import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative py-20 overflow-hidden"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gdg-blue to-gdg-green mb-6">
          About GDG PESCE
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering students through technology, innovation, and community collaboration
        </p>
      </motion.div>
    </motion.section>
  );
}