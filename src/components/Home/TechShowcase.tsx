interface Technology {
  name: string;
  icon: string;
  description: string;
}

const technologies: Technology[] = [
  {
    name: 'Web Development',
    icon: '🌐',
    description: 'React, Angular, Vue.js',
  },
  {
    name: 'Cloud Computing',
    icon: '☁️',
    description: 'GCP, Firebase, Cloud Run',
  },
  {
    name: 'Machine Learning',
    icon: '🤖',
    description: 'TensorFlow, PyTorch',
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    description: 'Flutter, React Native',
  },
]

export function TechShowcase() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technologies We Explore
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 hover:scale-105 transition-transform"
            >
              <span className="text-4xl">{tech.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}