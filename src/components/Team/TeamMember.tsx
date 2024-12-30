import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  index: number;
}

export function TeamMember({ name, role, image, bio, social, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1,
        delay: index * 0.2,
        bounce: 0.3
      }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="relative w-48 h-48 mx-auto mb-6"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image}
            alt={name}
            className="absolute inset-2 w-44 h-44 object-cover rounded-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gdg-blue font-medium mt-1">{role}</p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{bio}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="flex justify-center space-x-4 mt-6"
        >
          {social.github && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gdg-blue dark:text-gray-400 dark:hover:text-gdg-blue"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {social.linkedin && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gdg-blue dark:text-gray-400 dark:hover:text-gdg-blue"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          )}
          {social.twitter && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gdg-blue dark:text-gray-400 dark:hover:text-gdg-blue"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}