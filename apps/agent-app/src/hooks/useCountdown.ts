'use client'

import { useState, useEffect, useCallback } from 'react'

export function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive || seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setIsActive(false)
          return 0
        }
        return s - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, seconds])

  const reset = useCallback((newSeconds?: number) => {
    setSeconds(newSeconds ?? initialSeconds)
    setIsActive(true)
  }, [initialSeconds])

  const formatted = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

  return { seconds, formatted, isActive, isFinished: seconds === 0, reset }
}
