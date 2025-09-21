"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function SparklesBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      const sparkleCount = 50

      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5, // bigger sparkles (5–15px)
          delay: Math.random() * 3,
        })
      }

      setSparkles(newSparkles)
    }

    generateSparkles()

    const interval = setInterval(generateSparkles, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sparkles relative w-full h-full">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle animate-sparkle absolute rounded-full bg-white opacity-70"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
