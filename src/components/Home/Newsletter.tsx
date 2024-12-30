import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    setEmail('')
  }

  return (
    <section className="py-16 bg-gdg-blue/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter for the latest updates and events
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gdg-blue dark:bg-gray-800 dark:text-white dark:ring-gray-700"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-gdg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gdg-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gdg-blue"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}