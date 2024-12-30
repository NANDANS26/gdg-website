import { Logo3D } from './Logo3D'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gdg-blue-50 to-white dark:from-gray-900 dark:via-gdg-blue-900/20 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="h-[400px] mb-8">
          <Logo3D />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gdg-blue to-gdg-green mb-6">
          Empowering Developers at PESCE
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Join our community of innovators and leaders in technology
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#join"
            className="px-8 py-3 bg-gradient-to-r from-gdg-blue to-gdg-blue-600 text-white font-semibold rounded-lg shadow-gdg hover:shadow-gdg-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Join Us
          </a>
          <a
            href="#explore"
            className="px-8 py-3 text-gdg-blue dark:text-white font-semibold hover:text-gdg-blue-600 dark:hover:text-gdg-blue-400 transition-colors group"
          >
            Explore Community 
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}