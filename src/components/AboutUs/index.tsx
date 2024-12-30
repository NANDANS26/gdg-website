import { Container } from '../ui/Container';
import { AboutHero } from './AboutHero';
import { Mission } from './Mission';
import { Timeline } from './Timeline';

export default function AboutUs() {
  return (
    <Container>
      <AboutHero />
      <Mission />
      <Timeline />
    </Container>
  );
}