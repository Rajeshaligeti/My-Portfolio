import { useState, useEffect } from 'react'

interface MobileDetection {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLowEnd: boolean
  prefersReducedMotion: boolean
  devicePixelRatio: number
  isHydrated: boolean
}

export function useMobileOptimization(): MobileDetection {
  const [mobileInfo, setMobileInfo] = useState<MobileDetection>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEnd: false,
    prefersReducedMotion: false,
    devicePixelRatio: 1,
    isHydrated: false,
  })

  useEffect(() => {
    const checkMobileDevice = () => {
      // Only run on client side
      if (typeof window === 'undefined') return
      
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      
      // Detect device type
      const isMobile = width <= 768
      const isTablet = width > 768 && width <= 1024
      const isDesktop = width > 1024

      // Detect low-end devices (simplified heuristic)
      const isLowEnd = (
        navigator.hardwareConcurrency <= 2 || 
        (navigator as any).deviceMemory <= 4 ||
        width <= 480
      )

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      setMobileInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEnd,
        prefersReducedMotion,
        devicePixelRatio: dpr,
        isHydrated: true,
      })
    }

    // Initial check after hydration
    checkMobileDevice()

    // Listen for resize events
    window.addEventListener('resize', checkMobileDevice)
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkMobileDevice)

    return () => {
      window.removeEventListener('resize', checkMobileDevice)
      mediaQuery.removeEventListener('change', checkMobileDevice)
    }
  }, [])

  return mobileInfo
}

// Animation configuration based on device capabilities
export function getAnimationConfig(mobileInfo: MobileDetection) {
  // During SSR or before hydration, use safe defaults
  if (!mobileInfo.isHydrated) {
    return {
      duration: 1,
      ease: "easeOut",
      repeat: 0,
    }
  }

  if (mobileInfo.prefersReducedMotion) {
    return {
      duration: 0.01,
      ease: "linear",
      repeat: 0,
    }
  }

  if (mobileInfo.isLowEnd) {
    return {
      duration: 0.5,
      ease: "easeOut",
      repeat: 0,
    }
  }

  if (mobileInfo.isMobile) {
    return {
      duration: 0.8,
      ease: "easeInOut",
      repeat: 2,
    }
  }

  return {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
  }
}

// CSS class generator for mobile optimization
export function getMobileClasses(mobileInfo: MobileDetection, baseClasses: string) {
  let classes = baseClasses

  // Don't add dynamic classes during SSR
  if (!mobileInfo.isHydrated) {
    return classes
  }

  if (mobileInfo.prefersReducedMotion) {
    classes += " mobile-simple"
  } else if (mobileInfo.isLowEnd) {
    classes += " mobile-basic-fade"
  } else if (mobileInfo.isMobile) {
    classes += " mobile-optimized"
    
    if (mobileInfo.devicePixelRatio >= 2) {
      classes += " mobile-retina"
    }
  }

  return classes
}
