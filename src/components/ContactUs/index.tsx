import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { PageTitle } from '../ui/PageTitle';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface ContactInfo {
  icon: typeof MapPin;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'PES College of Engineering, Mandya, Karnataka',
    link: 'https://maps.google.com/?q=PESCE+Mandya'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 1234567890',
    link: 'tel:+911234567890'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'gdg@pesce.ac.in',
    link: 'mailto:gdg@pesce.ac.in'
  },
  {
    icon: Globe,
    title: 'Follow Us',
    content: '@gdg_pesce',
    link: 'https://twitter.com/gdg_pesce'
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '', subject: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '', subject: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '', subject: '' });
    }
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-12 px-4"
      >
        <PageTitle>Contact Us</PageTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <info.icon className="w-6 h-6 text-gdg-blue" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gdg-blue"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gdg-blue"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gdg-blue"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="event">Event Related</option>
                  <option value="membership">Membership</option>
                  <option value="partnership">Partnership</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gdg-blue"
                  placeholder="Your message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg bg-gdg-blue text-white font-medium ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gdg-blue-600'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}