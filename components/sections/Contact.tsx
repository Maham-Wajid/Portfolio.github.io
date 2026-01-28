'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/myyookwb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">Let's work together!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 text-white mr-4">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 text-white mr-4">
                  📱
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 text-white mr-4">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {Object.entries(personalInfo.social).slice(0, 3).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full glass-effect hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    {platform === 'github' && '💻'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'upwork' && '��'}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="mt-4 text-secondary-600 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
