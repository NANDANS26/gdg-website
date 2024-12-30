import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { TeamHeader } from './TeamHeader';
import { TeamGrid } from './TeamGrid';
import { teamMembers } from './teamData';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren"
    }
  }
};

export default function Team() {
  return (
    <Container>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="py-12"
      >
        <TeamHeader />
        <TeamGrid members={teamMembers} />
      </motion.div>
    </Container>
  );
}