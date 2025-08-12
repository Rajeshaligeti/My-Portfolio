import { useState, useEffect } from 'react'

export interface MobileOptimizationInfo {
  isMobile: boolean
  isTablet: boolean
  isHydrated: boolean
  prefersReducedMotion: boolean
  devicePixelRatio: number
  screenWidth: number
  screenHeight: number
}

export function useMobileOptimization(): MobileOptimizationInfo {
  const [info, setInfo] = useState<MobileOptimizationInfo>({
    isMobile: false,
    isTablet: false,
    isHydrated: false,
    prefersReducedMotion: false,
    devicePixelRatio: 1,
    screenWidth: 0,
    screenHeight: 0,
  })

  useEffect(() => {
    const updateInfo = () => {
      const isMobile = window.innerWidth <= 768
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      setInfo({
        isMobile,
        isTablet,
        isHydrated: true,
        prefersReducedMotion,
        devicePixelRatio: window.devicePixelRatio || 1,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      })
    }

    updateInfo()
    window.addEventListener('resize', updateInfo)

    return () => window.removeEventListener('resize', updateInfo)
  }, [])

  return info
}

export function getAnimationConfig(mobileInfo: MobileOptimizationInfo) {
  if (mobileInfo.prefersReducedMotion) {
    return {
      duration: 0.1,
      repeat: 0,
      ease: 'linear' as const,
    }
  }

  if (mobileInfo.isMobile) {
    return {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'easeInOut' as const,
    }
  }

  return {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: 'easeInOut' as const,
  }
}

export function getMobileClasses(mobileInfo: MobileOptimizationInfo, baseClasses: string): string {
  if (mobileInfo.isMobile) {
    // Simplify classes for mobile
    return baseClasses.replace(/(-top-8|-left-8|-right-12)/, (match) => {
      switch (match) {
        case '-top-8': return '-top-4'
        case '-left-8': return '-left-4'
        case '-right-12': return '-right-6'
        default: return match
      }
    })
  }
  
  return baseClasses
}
