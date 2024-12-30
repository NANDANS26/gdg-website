import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function TeamHeader() {
  const title = "Meet Our Team";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="flex justify-center space-x-2 mb-4">
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gdg-blue to-gdg-green"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto rounded-full mb-4"
      />
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 text-xl text-gray-600 dark:text-gray-400"
      >
        The passionate individuals driving our community forward
      </motion.p>
    </motion.div>
  );
}