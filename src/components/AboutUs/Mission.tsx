import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To foster a vibrant tech community that promotes learning and innovation',
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'Creating a platform where students can grow, learn, and build together',
  },
  {
    icon: Lightbulb,
    title: 'Our Values',
    description: 'Innovation, collaboration, inclusivity, and continuous learning',
  },
];

export function Mission() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gdg-blue/10 rounded-lg flex items-center justify-center mb-4"
              >
                <item.icon className="w-6 h-6 text-gdg-blue" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}