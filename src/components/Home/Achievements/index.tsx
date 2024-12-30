import { AchievementCard } from './AchievementCard'

const achievements = [
  {
    title: 'Hackathon Winners',
    description: 'Our members won multiple national hackathons',
    icon: '🏆',
  },
  {
    title: 'Community Growth',
    description: '500+ active members and growing',
    icon: '📈',
  },
  {
    title: 'Industry Connect',
    description: 'Partnerships with leading tech companies',
    icon: '🤝',
  },
]

export function Achievements() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}