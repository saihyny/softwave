'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#2563eb]" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-700 mb-3">
                G2, Surya Kiran Apartments, Behind S.R Nager Police Station, Hyderabad-500038, Telangana
              </p>
              <a
                href="https://maps.app.goo.gl/awXVMBTpiqek4crS6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline inline-flex items-center gap-1"
              >
                Open on Google Maps <ExternalLink size={16} />
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-[#2563eb]" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
              </div>
              <a href="mailto:info@softwavetech.in" className="text-gray-700 hover:text-[#2563eb] block mb-2">
                info@softwavetech.in
              </a>
              <a href="mailto:softwavetechsolutions@gmail.com" className="text-gray-700 hover:text-[#2563eb] block">
                softwavetechsolutions@gmail.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-[#2563eb]" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              </div>
              <a href="tel:040-31750493" className="text-gray-700 hover:text-[#2563eb] block mb-2">
                040-31750493
              </a>
              <a href="tel:+91-9177913924" className="text-gray-700 hover:text-[#2563eb] block">
                +91-9177913924
              </a>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[#2563eb]" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <p className="text-gray-700 mb-1">Mon – Fri: 9:00 AM – 5:00 PM</p>
              <p className="text-gray-700">Sat – Sun: Closed</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center border-t border-gray-200 pt-8"
          >
            <p className="text-gray-600">
              © 2025 Softwave Tech Solutions. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

