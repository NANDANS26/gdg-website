import { RoadmapItem } from './RoadmapItem'

const roadmapItems = [
  {
    title: 'Cloud Study Jams',
    date: 'February 2024',
    description: 'Hands-on workshops with Google Cloud Platform',
    isActive: true,
    icon: '☁️',
  },
  {
    title: 'Flutter Festival',
    date: 'March 2024',
    description: 'Mobile app development workshops and hackathon',
    icon: '📱',
  },
  {
    title: 'DevFest 2024',
    date: 'October 2024',
    description: 'Annual developer festival with industry experts',
    icon: '🎉',
  },
]

export function Roadmap() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-gdg-blue font-medium">2024 Timeline</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Upcoming Roadmap
          </h2>
        </div>
        <div className="relative">
          <div className="absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {roadmapItems.map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}