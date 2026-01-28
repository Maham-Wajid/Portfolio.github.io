'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            {about.heading}
          </h2>
          <p className="text-xl text-gray-600">{about.subheading}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {about.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 glass-effect rounded-2xl card-hover text-center"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
