'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#E5E7EB]">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-[#E5E7EB]/80 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-[#0F172A] rounded-2xl p-8 shadow-lg border border-[#2563EB]/20" style={{ boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)' }}>
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="text-2xl mr-3">📧</div>
                      <h4 className="font-semibold text-[#E5E7EB]">Email</h4>
                    </div>
                    <p className="text-[#E5E7EB]/80 ml-11">
                      contact@logicnex.com
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="text-2xl mr-3">🌐</div>
                      <h4 className="font-semibold text-[#E5E7EB]">Website</h4>
                    </div>
                    <p className="text-[#E5E7EB]/80 ml-11">
                      www.logicnex.com
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="text-2xl mr-3">💼</div>
                      <h4 className="font-semibold text-[#E5E7EB]">Services</h4>
                    </div>
                    <p className="text-[#E5E7EB]/80 ml-11">
                      Custom software solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#0F172A] rounded-2xl p-8 shadow-lg border border-[#2563EB]/20" style={{ boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#E5E7EB] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#2563EB]/20 bg-[#0F172A] text-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#E5E7EB] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#2563EB]/20 bg-[#0F172A] text-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[#E5E7EB] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#2563EB]/20 bg-[#0F172A] text-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#E5E7EB] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 rounded-lg"
                    >
                      Thank you for your message! We'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
