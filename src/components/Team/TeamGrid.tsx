import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';
import { TeamMemberType } from './types';

interface TeamGridProps {
  members: TeamMemberType[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {members.map((member, index) => (
        <TeamMember key={member.name} {...member} index={index} />
      ))}
    </motion.div>
  );
}