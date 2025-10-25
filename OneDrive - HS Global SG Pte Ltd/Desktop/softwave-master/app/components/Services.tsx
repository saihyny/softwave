'use client';

import { motion } from 'framer-motion';
import { Code, Briefcase, Database, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    items: [
      'Custom Software Solutions: Tailored applications for business needs.',
      'Web Applications: Modern, responsive websites and web apps.',
      'Mobile Apps: iOS and Android app development.',
      'Enterprise Solutions: ERP, CRM, and other large-scale software systems.',
    ],
  },
  {
    icon: Briefcase,
    title: 'IT Consulting & Digital Transformation',
    items: [
      'IT strategy planning and technology roadmap',
      'Cloud strategy, migration, and management',
      'Cybersecurity assessments and risk management',
    ],
  },
  {
    icon: Database,
    title: 'Data & AI Solutions',
    items: [
      'Business Intelligence dashboards and analytics',
      'AI/ML applications for business insights',
      'Data visualization and reporting tools',
    ],
  },
  {
    icon: Settings,
    title: 'Support & Maintenance',
    items: [
      'Ongoing software maintenance and updates',
      'IT support and helpdesk services',
      'System performance monitoring and optimization',
    ],
  },
  {
    icon: Users,
    title: 'Vendor Collaboration & Manpower Solutions',
    items: [
      'Collaborating with trusted technology vendors to provide best-in-class software and hardware solutions',
      'Access to specialized tools and platforms through vendor alliances',
      'Supplying skilled IT professionals for project-based or long-term engagements',
      'Staff augmentation for software development, IT support, and digital transformation projects',
      'Flexible resource solutions to scale teams based on client requirements',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="text-[#2563eb]" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2563eb] mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

