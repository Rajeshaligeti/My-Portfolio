"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, useMemo } from "react"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only access localStorage after mounting
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored && (stored === "light" || stored === "dark")) {
      setTheme(stored)
    }
  }, [storageKey])

  useEffect(() => {
    if (!mounted) return
    
    const root = window.document.documentElement
    
    // Add transition class before theme change
    root.style.transition = 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    
    // Apply theme changes
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    
    // Remove transition after theme change is complete
    setTimeout(() => {
      root.style.transition = ''
    }, 400)
  }, [theme, mounted])

  const value = useMemo(() => ({
    theme,
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }), [theme, storageKey])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="dark min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {children}
      </div>
    )
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
