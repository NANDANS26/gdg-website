import { motion } from 'framer-motion';

interface PartnerCardProps {
  name: string;
  image: string;
  website: string;
  color: string;
  index: number;
}

export function PartnerCard({ name, image, website, color, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="relative group"
    >
      <motion.a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <motion.div 
          className="w-32 h-32 mx-auto mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          className="text-center"
        >
          <span 
            className="text-xl font-semibold"
            style={{ color }}
          >
            {name}
          </span>
        </motion.div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    </motion.div>
  );
}