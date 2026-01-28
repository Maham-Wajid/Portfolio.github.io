'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.technical.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect p-6 rounded-2xl card-hover"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.soft.map((skill, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-r from-pastel-pink to-pastel-mint rounded-full text-gray-800 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
