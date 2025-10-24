'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#2563eb]" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Softwave Tech Solutions, our mission is to deliver innovative, efficient, and scalable software solutions that empower businesses to grow and succeed in the digital era. We aim to bridge the gap between technology and business needs by providing customized IT services that enhance performance, security, and user experience. Our focus is on building long-term partnerships through trust, transparency, and excellence in every project we undertake.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-[#2563eb]" size={32} />
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to become a global leader in software innovation, recognized for transforming complex challenges into seamless digital solutions. We aspire to shape the future of technology by driving continuous improvement, embracing emerging trends, and creating intelligent systems that make life and work simpler, smarter, and more connected.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

