import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { PageTitle } from '../ui/PageTitle'
import { EventCard } from './EventCard'
import { EventFilters } from './EventFilters'
import { CommunityStats } from './CommunityStats'

const events = [
  // Upcoming Events
  {
    id: '1',
    title: 'Cloud Study Jam 2024',
    date: '2024-02-15',
    type: 'upcoming',
    description: 'Learn Google Cloud Platform fundamentals with hands-on labs',
    location: 'PESCE Campus',
    attendees: 150,
    image: 'https://www.gdghk.org/wp-content/uploads/2018/02/Screen-Shot-2018-02-05-at-2.12.20-PM.png',
  },
  {
    id: '2',
    title: 'Flutter Forward Extended',
    date: '2024-02-20',
    type: 'upcoming',
    description: 'Explore the latest Flutter features and best practices',
    location: 'Virtual Event',
    attendees: 200,
    image: 'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png',
  },
  {
    id: '3',
    title: 'Android Development Workshop',
    date: '2024-03-05',
    type: 'upcoming',
    description: 'Hands-on Android app development with Kotlin',
    location: 'PESCE Campus',
    attendees: 120,
    image: 'https://developer.android.com/static/images/social/android-developers.png',
  },
  // Ongoing Events
  {
    id: '4',
    title: '30 Days of Google Cloud',
    date: '2024-02-01',
    type: 'ongoing',
    description: 'Month-long cloud learning program with certificates',
    location: 'Virtual',
    attendees: 300,
    image: 'https://logowik.com/content/uploads/images/google-cloud8906.jpg',
  },
  {
    id: '5',
    title: 'Machine Learning Study Group',
    date: '2024-01-15',
    type: 'ongoing',
    description: 'Weekly sessions on ML fundamentals and TensorFlow',
    location: 'Hybrid',
    attendees: 80,
    image: 'https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png',
  },
  // Past Events
  {
    id: '6',
    title: 'DevFest 2023',
    date: '2023-12-10',
    type: 'past',
    description: 'Annual developer festival with tech talks and workshops',
    location: 'PESCE Campus',
    attendees: 500,
    image: 'https://media.licdn.com/dms/image/v2/C4D12AQH__ePJ53a3YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520186980337?e=2147483647&v=beta&t=ase3DvbNYpFZFL2PrN_QmuNPMI2INHzdnZv077o-62U',
  },
  {
    id: '7',
    title: 'Firebase Workshop',
    date: '2023-11-25',
    type: 'past',
    description: 'Building real-time applications with Firebase',
    location: 'PESCE Campus',
    attendees: 150,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeZUaz8RSMdFEcRiFKAGufdUORq4sHYDcpLikgOTB8Z3f7acXUxbtva4TL_cDD1blzNU&usqp=CAU',
  },
  {
    id: '8',
    title: 'Web Development Bootcamp',
    date: '2023-10-15',
    type: 'past',
    description: 'Intensive web development training with modern technologies',
    location: 'Virtual',
    attendees: 250,
    image: 'https://web.dev/static/images/social.png',
  },
];

export default function Community() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <Container>
      <div className="max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Community Events</PageTitle>
          <CommunityStats />
          <EventFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No {activeFilter} events found.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </Container>
  );
}