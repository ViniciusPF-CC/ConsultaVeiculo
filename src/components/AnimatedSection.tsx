import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn'
  delay?: number
  duration?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out'
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`
    const delayClass = delay > 0 ? `delay-[${Math.round(delay * 1000)}ms]` : ''
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-8`
        case 'fadeInLeft':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 -translate-x-8`
        case 'fadeInRight':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-x-8`
        case 'fadeIn':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0`
        case 'scaleIn':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-95`
        default:
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-8`
      }
    } else {
      return `${baseClass} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}