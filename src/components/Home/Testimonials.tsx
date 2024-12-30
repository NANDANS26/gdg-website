import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Student Developer',
    role: 'Computer Science',
    content: 'GDG PESCE helped me grow as a developer. The workshops and mentorship were invaluable.',
    image: '/testimonials/student1.jpg',
  },
  {
    id: '2',
    name: 'Tech Lead',
    role: 'Industry Expert',
    content: 'The community at GDG PESCE is incredible. The enthusiasm and dedication of students is inspiring.',
    image: '/testimonials/expert1.jpg',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Community Voices
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1,
                delay: index * 0.2,
                bounce: 0.3
              }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"
            >
              <motion.div 
                className="flex items-center gap-x-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                <motion.img
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", duration: 1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full bg-gray-100 object-cover"
                />
                <div>
                  <motion.h3
                    whileHover={{ color: "#4285F4", scale: 1.05 }}
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    {testimonial.name}
                  </motion.h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.4 }}
                className="text-gray-600 dark:text-gray-400 relative"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.2, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.6 }}
                  className="absolute -top-4 -left-2 text-4xl text-gdg-blue"
                >
                  "
                </motion.span>
                {testimonial.content}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 0.2, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.6 }}
                  className="absolute -bottom-4 -right-2 text-4xl text-gdg-blue"
                >
                  "
                </motion.span>
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}