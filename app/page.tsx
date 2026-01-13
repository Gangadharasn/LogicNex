'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
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
                  className="text-[#E5E7EB] block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 30px rgba(37, 99, 235, 0.5)',
                  }}
                >
                  LogicNex
                </motion.span>
                <motion.span 
                  className="text-[#E5E7EB] block"
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
                className="text-xl text-[#E5E7EB]/80 mb-8 leading-relaxed"
              >
                End-to-end technology solutions for your business. 
                We solve software problems and deliver high-quality digital products 
                that drive innovation and growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-transparent text-[#E5E7EB] rounded-lg font-semibold hover:bg-[#0F172A]/50 transition-all border-2 border-[#2563EB]"
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
                className="absolute inset-0 bg-[#0F172A] rounded-3xl p-2 md:p-4 border border-[#2563EB]/30 overflow-hidden"
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
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-32 h-32 border-4 border-[#2563EB] rounded-lg mx-auto mb-4"
                      style={{
                        boxShadow: '0 0 40px rgba(37, 99, 235, 0.5)',
                      }}
                    />
                    <p className="text-[#2563EB] text-lg font-semibold">Technology Solutions</p>
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
              Why Choose LogicNex?
            </h2>
            <p className="text-xl text-[#E5E7EB]/80">
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
                className="p-8 bg-[#0F172A] rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#2563EB]/20 relative overflow-hidden"
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
                  className="text-2xl font-bold text-[#E5E7EB] mb-4 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-[#E5E7EB]/80 relative z-10"
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

      <Footer />
    </div>
  );
}
