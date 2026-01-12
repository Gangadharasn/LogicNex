'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WireframeCubeWrapper from '@/components/3D/WireframeCubeWrapper';
import WebWireframeWrapper from '@/components/3D/WebWireframeWrapper';
import LaptopWireframeWrapper from '@/components/3D/LaptopWireframeWrapper';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks. Responsive, fast, and scalable solutions tailored to your business needs.',
    icon: '🌐',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'web',
  },
  {
    title: 'Desktop Application Development',
    description: 'Cross-platform desktop applications that deliver powerful functionality and exceptional user experience across all devices.',
    icon: '💻',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'laptop',
  },
  {
    title: 'Data Management Solutions',
    description: 'Efficient data management systems that organize, process, and analyze your business data for better decision-making.',
    icon: '📊',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'Billing & Invoice Systems',
    description: 'Automated billing and invoice generation systems that streamline your financial processes and reduce manual work.',
    icon: '💰',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'AI-Based Predictions & Automation',
    description: 'Intelligent automation solutions powered by AI and machine learning to predict trends and automate complex processes.',
    icon: '🤖',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed and developed from scratch to meet your unique business requirements and goals.',
    icon: '⚙️',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
];

const get3DModel = (modelType: string) => {
  switch (modelType) {
    case 'web':
      return <WebWireframeWrapper />;
    case 'laptop':
      return <LaptopWireframeWrapper />;
    default:
      return <WireframeCubeWrapper />;
  }
};

export default function Services() {
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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-[#E5E7EB]/80 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive digital innovation
            </p>
          </motion.div>

          {/* 3D Animation Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="mb-20 h-[400px] w-full relative"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#0F172A]/50 rounded-3xl p-4 border border-[#2563EB]/20"
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
              <WireframeCubeWrapper />
            </motion.div>
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#2563EB] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [1, 1.8, 1],
                  x: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 2.5 + Math.random() * 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative bg-[#0F172A] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-[#2563EB]/20"
                style={{ 
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* 3D Model Container */}
                <motion.div
                  className="absolute top-4 right-4 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {get3DModel(service.model)}
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-[#E5E7EB] mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#E5E7EB]/80 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#2563EB] opacity-0"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)',
                    }}
                  />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#2563EB] rounded-lg font-semibold hover:bg-[#E5E7EB] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
