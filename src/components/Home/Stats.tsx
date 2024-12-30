interface Stat {
  label: string;
  value: string;
  icon: string;
}

const stats: Stat[] = [
  { label: 'Events Conducted', value: '50+', icon: '🎯' },
  { label: 'Active Members', value: '1000+', icon: '👥' },
  { label: 'Projects Completed', value: '100+', icon: '💻' },
  { label: 'Workshop Hours', value: '200+', icon: '⏰' },
]

export function Stats() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-5xl leading-7">{stat.icon}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}