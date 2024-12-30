import { motion } from 'framer-motion'

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    date: '2024-02-01',
    description: 'Learn modern web development with React and TypeScript',
    image: 'https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg',
  },
  {
    id: '2',
    title: 'Cloud Computing Seminar',
    date: '2024-02-15',
    description: 'Deep dive into cloud technologies and best practices',
    image: 'https://th.bing.com/th/id/R.38964753a7746becd61cf573eb9b12ca?rik=S4dm%2fPPil1pzWw&riu=http%3a%2f%2fwww.itbriefcase.net%2fwp-content%2fuploads%2f2018%2f04%2fcloud-security.jpg&ehk=5jgyoaXTKwdBUqqCU7G2QFjntpdwbphEnEy6EuKjWHk%3d&risl=&pid=ImgRaw&r=0',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const eventVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export function FeaturedEvents() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Join us in our upcoming events and workshops
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {upcomingEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={eventVariants}
              className="flex flex-col items-start group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <motion.time
                    whileHover={{ scale: 1.1 }}
                    dateTime={event.date}
                    className="text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full font-medium"
                  >
                    {new Date(event.date).toLocaleDateString()}
                  </motion.time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gdg-blue transition-colors duration-300">
                    <a href={`/events/${event.id}`}>
                      <span className="absolute inset-0" />
                      {event.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}