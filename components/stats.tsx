import Counter from '@/components/counter'

interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {

  const stats: StatProps[] = [
    {
      number: 100,
      suffix: '+',
      text: 'Ideas work-shopped.',
    },
    {
      number: 1.44,
      suffix: 'K',
      text: 'Users accross our products.',
    },
    {
      number: 15,
      suffix: '+',
      text: 'Coutries with our active presence.',
    },
    {
      number: 20,
      suffix: '+',
      text: 'In-house professional devlopers .',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">

        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight text-2xl md:text-3xl font-bold tabular-nums mb-2">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-sm text-zinc-500">{stat.text}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
