import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2020',
    title: 'GDG PESCE Founded',
    description: 'Started with a small group of passionate developers',
  },
  {
    year: '2021',
    title: 'First DevFest',
    description: 'Successfully organized our first major tech conference',
  },
  {
    year: '2022',
    title: 'Community Growth',
    description: 'Reached 500+ active members',
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Launched dedicated space for tech innovation',
  },
];

export function Timeline() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gdg-blue/20" />
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
            >
              <div className="w-1/2 relative p-6">
                <div className="absolute top-8 w-4 h-4 rounded-full bg-gdg-blue" 
                     style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }} />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <span className="text-gdg-blue font-bold">{milestone.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{milestone.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}