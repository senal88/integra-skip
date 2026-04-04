import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const stats = [
  { label: 'Anos de Experiência', value: 25, suffix: '+' },
  { label: 'Clientes Atendidos', value: 3000, suffix: '+' },
  { label: 'Processos Finalizados', value: 5000, suffix: '+' },
  { label: 'Profissionais', value: 40, suffix: '' },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const duration = 2000 // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      setCount(Math.floor(easeProgress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end])

  return (
    <span className="text-4xl md:text-5xl font-serif font-bold text-gold">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              {isIntersecting ? (
                <Counter end={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="text-4xl md:text-5xl font-serif font-bold text-transparent">
                  0{stat.suffix}
                </span>
              )}
              <span className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
