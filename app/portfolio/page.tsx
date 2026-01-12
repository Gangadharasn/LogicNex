'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Enterprise Web Platform',
    description: 'A comprehensive web platform for enterprise data management with real-time analytics and reporting capabilities.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '🌐',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent dashboard with AI-driven insights and predictive analytics for business intelligence.',
    category: 'AI & Automation',
    technologies: ['React', 'Python', 'TensorFlow'],
    image: '🤖',
  },
  {
    title: 'Automated Billing System',
    description: 'A complete billing and invoice automation system with payment gateway integration and reporting.',
    category: 'Billing Systems',
    technologies: ['Node.js', 'MongoDB', 'Stripe API'],
    image: '💰',
  },
  {
    title: 'Cross-Platform Desktop App',
    description: 'A feature-rich desktop application for data visualization and management across Windows, macOS, and Linux.',
    category: 'Desktop Development',
    technologies: ['Electron', 'React', 'SQLite'],
    image: '💻',
  },
  {
    title: 'Data Management Portal',
    description: 'A centralized portal for managing, processing, and analyzing large volumes of business data.',
    category: 'Data Management',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    image: '📊',
  },
  {
    title: 'Custom CRM Solution',
    description: 'A tailor-made Customer Relationship Management system designed for a specific industry workflow.',
    category: 'Custom Development',
    technologies: ['Next.js', 'GraphQL', 'MySQL'],
    image: '⚙️',
  },
];

export default function Portfolio() {
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
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-[#E5E7EB]/80 max-w-3xl mx-auto">
              Showcasing our successful projects and the innovative solutions we've delivered to clients
            </p>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-[#0F172A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#2563EB]/20"
                style={{ boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)' }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-[#2563EB] flex items-center justify-center text-8xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-[#E5E7EB] mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#E5E7EB]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0F172A] text-[#E5E7EB] text-xs font-medium rounded-full border border-[#2563EB]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#2563EB] rounded-3xl p-12 text-white"
            style={{ boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25)' }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#2563EB] rounded-lg font-semibold hover:bg-[#E5E7EB] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
