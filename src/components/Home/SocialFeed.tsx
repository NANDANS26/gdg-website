import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'linkedin';
  content: string;
  date: string;
  link: string;
}

const recentPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'twitter',
    content: 'Join us for an exciting workshop on Web Development! #GDGPesce #WebDev',
    date: '2024-01-20',
    link: 'https://twitter.com/gdgpesce/status/1',
  },
  {
    id: '2',
    platform: 'linkedin',
    content: 'Celebrating another successful hackathon at PESCE! 🎉',
    date: '2024-01-18',
    link: 'https://linkedin.com/gdgpesce/posts/1',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      bounce: 0.3
    }
  })
};

export function SocialFeed() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Social Updates
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
          {recentPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="block rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"
            >
              <motion.div 
                className="flex items-center gap-x-4 mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="w-10 h-10 rounded-full bg-gdg-blue/10 flex items-center justify-center"
                >
                  {post.platform === 'twitter' ? (
                    <Twitter className="w-5 h-5 text-gdg-blue" />
                  ) : (
                    <Linkedin className="w-5 h-5 text-gdg-blue" />
                  )}
                </motion.div>
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </motion.div>
              <motion.p 
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.4 }}
              >
                {post.content}
              </motion.p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}