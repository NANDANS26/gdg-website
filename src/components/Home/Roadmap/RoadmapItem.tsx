interface RoadmapItemProps {
  title: string;
  date: string;
  description: string;
  isActive?: boolean;
  icon?: string;
}

export function RoadmapItem({ title, date, description, isActive = false, icon }: RoadmapItemProps) {
  return (
    <div className={`relative flex flex-col p-8 rounded-xl ${
      isActive 
        ? 'bg-gradient-to-br from-gdg-blue/10 to-gdg-blue/5 ring-2 ring-gdg-blue' 
        : 'bg-white dark:bg-gray-900'
    } shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
      {icon && (
        <div className="absolute -top-4 left-8 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gdg-blue/20">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <div className="bg-gdg-blue/5 dark:bg-gdg-blue/10 rounded-lg px-3 py-1 w-fit mb-4">
        <time className="text-sm text-gdg-blue font-medium">{date}</time>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-6">
        <button className="text-gdg-blue hover:text-gdg-blue-600 font-medium inline-flex items-center group">
          Learn more
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  )
}