import { motion } from 'framer-motion';
import { Calendar, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    label: 'Total Events',
    value: '24+',
    color: 'text-gdg-blue',
  },
  {
    icon: Users,
    label: 'Community Members',
    value: '500+',
    color: 'text-gdg-green',
  },
  {
    icon: Award,
    label: 'Achievements',
    value: '15+',
    color: 'text-gdg-yellow',
  },
];

export function CommunityStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
            <div>
              <h3 className="text-lg font-semibold dark:text-white">{stat.label}</h3>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}