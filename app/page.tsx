'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <motion.span 
                  className="text-[#0F172A] block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 30px rgba(37, 99, 235, 0.5)',
                  }}
                >
                  LogicNex
                </motion.span>
                <motion.span 
                  className="text-[#0F172A] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Technology Solutions
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-[#334155] mb-6 leading-relaxed"
              >
                End-to-end technology solutions for your business. 
                We solve software problems and deliver high-quality digital products 
                that drive innovation and growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8"
              >
                <ul className="space-y-3 text-[#334155]">
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-3 text-xl">✓</span>
                    <span>Custom software development tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-3 text-xl">✓</span>
                    <span>Modern web and desktop applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-3 text-xl">✓</span>
                    <span>AI-powered automation and data management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-3 text-xl">✓</span>
                    <span>24/7 support and maintenance services</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#2563EB] text-[#FFFFFF] rounded-lg font-semibold hover:bg-[#1E40AF] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-transparent text-[#0F172A] rounded-lg font-semibold hover:bg-[#F8FAFC] transition-all border-2 border-[#2563EB]"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* 3D Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="h-[500px] w-full relative min-h-[500px]"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div 
                className="absolute inset-0 bg-[#F8FAFC] rounded-3xl p-2 md:p-4 border border-[#2563EB]/30 overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                    '0 0 40px rgba(37, 99, 235, 0.5)',
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Animated Technology Icons */}
                  <div className="grid grid-cols-3 gap-8 p-8 w-full h-full">
                    {[
                      { icon: '💻', label: 'Web Apps', delay: 0 },
                      { icon: '🌐', label: 'Cloud', delay: 0.2 },
                      { icon: '📱', label: 'Mobile', delay: 0.4 },
                      { icon: '🤖', label: 'AI/ML', delay: 0.6 },
                      { icon: '📊', label: 'Data', delay: 0.8 },
                      { icon: '🔒', label: 'Security', delay: 1.0 },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.2, y: -10 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2 + index * 0.5,
                            repeat: Infinity,
                            delay: item.delay,
                          }}
                          className="text-5xl mb-2"
                        >
                          {item.icon}
                        </motion.div>
                        <p className="text-sm font-semibold text-[#0F172A]">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
            {/* Floating particles effect (deterministic for hydration) */}
            {[
              { left: 12, top: 18, duration: 2.2, delay: 0.3 },
              { left: 78, top: 26, duration: 2.6, delay: 0.8 },
              { left: 34, top: 62, duration: 3.0, delay: 0.1 },
              { left: 88, top: 74, duration: 2.4, delay: 0.6 },
              { left: 52, top: 12, duration: 2.8, delay: 0.2 },
              { left: 67, top: 49, duration: 3.2, delay: 0.5 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#2563EB] rounded-full"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-[#334155]">
              Leveraging cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', category: 'Frontend' },
              { name: 'Angular', category: 'Frontend' },
              { name: 'Next.js', category: 'Frontend' },
              { name: '.NET', category: 'Backend' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'Python', category: 'Backend' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'MongoDB', category: 'Database' },
              { name: 'AWS', category: 'Cloud' },
              { name: 'Docker', category: 'DevOps' },
              { name: 'TensorFlow', category: 'AI/ML' },
              { name: 'Electron', category: 'Desktop' },
              { name: 'GraphQL', category: 'API' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#FFFFFF] border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <h4 className="font-bold text-[#0F172A] mb-1">{tech.name}</h4>
                <p className="text-sm text-[#334155]">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-[#334155]">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements, understand your business goals, and create a detailed project roadmap with timelines and milestones.',
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Our team creates intuitive UI/UX designs and interactive prototypes to visualize the final product before development begins.',
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Agile development approach with continuous testing, code reviews, and regular updates to ensure high-quality deliverables.',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Smooth deployment to production with ongoing maintenance, updates, and 24/7 support to keep your software running optimally.',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="text-5xl font-bold text-[#2563EB]/20 mb-4">{process.step}</div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{process.title}</h3>
                  <p className="text-[#334155] leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#2563EB] text-3xl z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Robust Requirements & Security
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              We ensure your software meets the highest standards of quality, security, and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Comprehensive Requirements Analysis</h3>
              <p className="text-[#334155] mb-4 leading-relaxed">
                Our expert team conducts thorough requirements gathering and analysis to ensure we understand your business needs completely. We document functional and non-functional requirements, create detailed specifications, and establish clear success criteria for every project.
              </p>
              <ul className="space-y-2 text-[#334155]">
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Stakeholder interviews and requirement workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Detailed requirement documentation and specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Feasibility analysis and technical assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Change management and requirement tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Enterprise-Grade Security</h3>
              <p className="text-[#334155] mb-4 leading-relaxed">
                Security is paramount in everything we build. We implement industry-leading security practices including encryption, authentication, authorization, and regular security audits to protect your data and applications from threats.
              </p>
              <ul className="space-y-2 text-[#334155]">
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>End-to-end encryption and secure data transmission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Multi-factor authentication and role-based access control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">✓</span>
                  <span>GDPR and compliance-ready solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Vision & Success Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Elevating Customer Vision
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              We transform your vision into reality by understanding your goals and delivering solutions that exceed expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Vision Alignment',
                description: 'We take time to understand your business vision, goals, and long-term objectives. Our solutions are designed to align with your strategic direction and help you achieve your mission.',
              },
              {
                icon: '🚀',
                title: 'Scalable Growth',
                description: 'Your software is built to grow with your business. We design scalable architectures that can handle increased load, users, and data as your company expands.',
              },
              {
                icon: '💡',
                title: 'Innovation Focus',
                description: 'We bring fresh perspectives and innovative solutions to your challenges. Our team stays current with the latest technologies and best practices to deliver cutting-edge solutions.',
              },
              {
                icon: '📈',
                title: 'Performance Optimization',
                description: 'Every application we build is optimized for speed and efficiency. We conduct performance testing and optimization to ensure your software runs smoothly under any load.',
              },
              {
                icon: '🔧',
                title: 'Ongoing Support',
                description: 'Our relationship doesn\'t end at deployment. We provide continuous support, maintenance, and updates to keep your software running optimally and evolving with your needs.',
              },
              {
                icon: '🤝',
                title: 'Partnership Approach',
                description: 'We work as your technology partner, not just a vendor. We invest in understanding your business and are committed to your long-term success and growth.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{item.title}</h3>
                <p className="text-[#334155] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Why Choose LogicNex?
            </h2>
            <p className="text-xl text-[#334155]">
              We deliver excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience in cutting-edge technologies',
                icon: '👥',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control to ensure flawless delivery',
                icon: '✅',
              },
              {
                title: 'Innovation First',
                description: 'Leveraging the latest technologies and best practices for optimal results',
                icon: '🚀',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-8 bg-[#FFFFFF] border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                style={{ 
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-[#2563EB]/0"
                  whileHover={{ 
                    background: 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.05))'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-[#0F172A] mb-4 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-[#334155] relative z-10"
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#2563EB] opacity-0"
                  whileHover={{ 
                    opacity: 0.6,
                    boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customer Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Don't just take our word for it - hear from our happy customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                company: 'TechCorp Solutions',
                role: 'CEO',
                rating: 5,
                review: 'LogicNex transformed our business with their custom software solution. The team was professional, responsive, and delivered exactly what we needed. Our operational efficiency increased by 65%!',
                image: '👩‍💼',
              },
              {
                name: 'Michael Chen',
                company: 'Global Enterprises',
                role: 'CTO',
                rating: 5,
                review: 'Outstanding work! The web platform they built for us is robust, secure, and scalable. Their attention to detail and commitment to quality is unmatched. Highly recommended!',
                image: '👨‍💻',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-[#334155] mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center border-t border-gray-200 pt-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#334155]">{testimonial.role}</p>
                    <p className="text-sm text-[#2563EB] font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2563EB] to-[#1E40AF]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#FFFFFF]/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FFFFFF] text-[#2563EB] rounded-lg font-semibold hover:bg-[#F8FAFC] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent text-[#FFFFFF] rounded-lg font-semibold hover:bg-[#FFFFFF]/10 transition-all border-2 border-[#FFFFFF]"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
