import { motion } from 'framer-motion';
import { PartnerCard } from './PartnerCard';

const partners = [
  {
    name: 'Google',
    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    website: 'https://developers.google.com',
    color: '#4285F4',
  },
  {
    name: 'Firebase',
    image: 'https://www.gstatic.com/devrel-devsite/prod/v5ab6fd0ad9c02b131b4d387b5751ac2c3616478c6dd65b5e931f0805efa1009c/firebase/images/lockup.svg',
    website: 'https://firebase.google.com',
    color: '#FFCA28',
  },
  {
    name: 'Flutter',
    image: 'https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg',
    website: 'https://flutter.dev',
    color: '#027DFD',
  },
];

export function Partners() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Partners
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} {...partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}