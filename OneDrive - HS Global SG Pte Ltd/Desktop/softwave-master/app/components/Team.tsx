'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Bhaskara',
    role: 'Managing Director',
    bio: 'Bhaskara is the Managing Director of Softwave Tech Solutions. He is driven by a passion for innovation and excellence, guiding the company with a focus on teamwork, creativity, and delivering impactful technology solutions. Bhaskara is committed to creating a positive environment that empowers both clients and employees to achieve their goals.',
  },
  {
    name: 'Gopi Krishna',
    role: 'Technical Director',
    bio: 'Leading the company\'s technology strategy and ensuring innovative solutions for clients.',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>
          
          {/* Team Culture Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Softwave Tech Solutions, our greatest strength lies in our people. We are a team of passionate innovators, skilled developers, creative designers, and dedicated strategists who share one common goal — to deliver technology that empowers businesses and inspires change.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our culture is built on collaboration, integrity, and continuous learning. We believe that every project is an opportunity to grow, challenge ourselves, and make a meaningful impact. Each member of our team brings unique expertise and ideas, allowing us to craft solutions that are both innovative and practical.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From brainstorming new concepts to delivering world-class software, our team works hand-in-hand with clients to ensure every solution exceeds expectations. We take pride not only in what we build but also in how we build it — with transparency, teamwork, and a passion for excellence.
            </p>
          </motion.div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="text-gray-500" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-[#2563eb] font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

