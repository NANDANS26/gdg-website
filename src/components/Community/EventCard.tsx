import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  location: string;
  attendees: number;
  image: string;
  type: 'upcoming' | 'ongoing' | 'past';
}

export function EventCard({ title, date, description, location, attendees, image, type }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            type === 'upcoming' ? 'bg-green-100 text-green-800' :
            type === 'ongoing' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <UsersIcon className="w-5 h-5 mr-2" />
            <span>{attendees} attendees</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}