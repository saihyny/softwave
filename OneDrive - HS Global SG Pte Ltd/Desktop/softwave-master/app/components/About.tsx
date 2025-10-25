'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

export default function About() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/SoftwavetechsolutionsPrivatelimited' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/SIFTWAVETECH20' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/softwave-tech-solutions' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/softwavetechsolutions' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/SoftwaveTechSolutions' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            About Us
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p className="text-lg">
              Softwave Tech Solutions is a leading provider of cutting-edge software and IT services dedicated to helping businesses thrive in the digital age. Since our inception, we've been driven by a passion for innovation, quality, and customer satisfaction. Our team of skilled professionals specializes in developing customized software solutions, web and mobile applications, and enterprise IT systems designed to meet the unique needs of every client.
            </p>
            <p className="text-lg">
              What sets us apart is our commitment to excellence and our customer-first approach. We believe that technology should not only solve problems but also create opportunities — empowering businesses to operate smarter, faster, and more efficiently. Whether it's digital transformation, cloud integration, or software development, we deliver solutions that are secure, scalable, and built for the future.
            </p>
            <p className="text-lg">
              At Softwave Tech Solutions, we don't just build technology — we build trust, innovation, and success stories.
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-[#2563eb] hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <social.icon size={20} />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

