interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
}

export function AchievementCard({ title, description, icon }: AchievementCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-gdg hover:shadow-gdg-lg transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <span className="text-5xl mb-6 block animate-float">{icon}</span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gdg-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}