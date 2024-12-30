import { Hero } from './Hero'
import { Stats } from './Stats'
import { VideoShowcase } from './VideoShowcase'
import { FeaturedEvents } from './FeaturedEvents'
import { Testimonials } from './Testimonials'
import { TechShowcase } from './TechShowcase'
import { Achievements } from './Achievements'
import { Partners } from './Partners'
import { SocialFeed } from './SocialFeed'
import { Chatbot } from './Chatbot'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <VideoShowcase />
      <FeaturedEvents />
      <Testimonials />
      <TechShowcase />
      <Achievements />
      <Partners />
      <SocialFeed />
      <Chatbot />
    </div>
  )
}