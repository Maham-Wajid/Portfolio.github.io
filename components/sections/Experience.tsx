'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600">My professional journey</p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-lg text-primary-600 font-semibold">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex gap-2 flex-wrap">
                  <span className="px-4 py-2 bg-pastel-mint rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                  <span className="px-4 py-2 bg-pastel-pink rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
