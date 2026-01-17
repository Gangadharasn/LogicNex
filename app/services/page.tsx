'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks. Responsive, fast, and scalable solutions tailored to your business needs.',
    detailedDescription: 'We develop custom web applications using React, Next.js, Vue.js, and Angular. Our web solutions include Single Page Applications (SPAs), Progressive Web Apps (PWAs), E-commerce platforms, Content Management Systems (CMS), and Enterprise web portals. All applications are mobile-responsive, SEO-optimized, and performance-tuned for maximum user engagement.',
    benefits: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Scalable Architecture'],
    useCases: ['Business Websites', 'E-commerce Stores', 'Web Portals', 'Dashboards'],
    icon: '🌐',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'web',
  },
  {
    title: 'Desktop Application Development',
    description: 'Cross-platform desktop applications that deliver powerful functionality and exceptional user experience across all devices.',
    detailedDescription: 'We build native and cross-platform desktop applications using Electron, .NET, Java, and Python. Our desktop solutions work seamlessly on Windows, macOS, and Linux. We create everything from productivity tools and business applications to complex data processing software with offline capabilities and system integration.',
    benefits: ['Cross-Platform', 'Offline Functionality', 'System Integration', 'Rich User Interface'],
    useCases: ['Business Tools', 'Data Processing Apps', 'Productivity Software', 'Enterprise Solutions'],
    icon: '💻',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'laptop',
  },
  {
    title: 'Data Management Solutions',
    description: 'Efficient data management systems that organize, process, and analyze your business data for better decision-making.',
    detailedDescription: 'We design and implement comprehensive data management systems including database design, ETL processes, data warehousing, and data visualization. Our solutions help businesses collect, store, process, and analyze large volumes of data efficiently using technologies like PostgreSQL, MongoDB, Redis, and Elasticsearch.',
    benefits: ['Data Security', 'Real-time Processing', 'Scalable Storage', 'Advanced Analytics'],
    useCases: ['Data Warehouses', 'Business Intelligence', 'Reporting Systems', 'Data Migration'],
    icon: '📊',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'Billing & Invoice Systems',
    description: 'Automated billing and invoice generation systems that streamline your financial processes and reduce manual work.',
    detailedDescription: 'We develop automated billing and invoicing systems that integrate with payment gateways (Stripe, PayPal, Square), handle recurring subscriptions, generate PDF invoices, manage tax calculations, and provide comprehensive financial reporting. These systems reduce manual errors and save time on financial administration.',
    benefits: ['Payment Gateway Integration', 'Automated Invoicing', 'Tax Management', 'Financial Reporting'],
    useCases: ['Subscription Services', 'SaaS Platforms', 'E-commerce Billing', 'Service Providers'],
    icon: '💰',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'AI-Based Predictions & Automation',
    description: 'Intelligent automation solutions powered by AI and machine learning to predict trends and automate complex processes.',
    detailedDescription: 'We implement AI and machine learning solutions for predictive analytics, natural language processing, computer vision, and process automation. Using TensorFlow, PyTorch, and cloud AI services, we help businesses automate workflows, make data-driven predictions, and gain intelligent insights from their data.',
    benefits: ['Predictive Analytics', 'Process Automation', 'Intelligent Insights', 'Cost Reduction'],
    useCases: ['Demand Forecasting', 'Chatbots & NLP', 'Image Recognition', 'Automated Workflows'],
    icon: '🤖',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed and developed from scratch to meet your unique business requirements and goals.',
    detailedDescription: 'We create tailor-made software solutions from the ground up, designed specifically for your business needs. Our custom development includes requirements analysis, architecture design, full-stack development, quality assurance, and ongoing maintenance. We build solutions that integrate with your existing systems and scale with your business growth.',
    benefits: ['Tailored Solutions', 'System Integration', 'Full Lifecycle Support', 'Future-Proof Design'],
    useCases: ['CRM Systems', 'ERP Solutions', 'Workflow Management', 'Industry-Specific Software'],
    icon: '⚙️',
    color: 'from-[#2563EB] to-[#2563EB]',
    model: 'cube',
  },
];

const get3DModel = (modelType: string) => {
  // Simple placeholder icon based on service type
  const icons: Record<string, string> = {
    web: '🌐',
    laptop: '💻',
    default: '⚙️',
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-6xl"
      >
        {icons[modelType] || icons.default}
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
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
              <span className="text-[#0F172A]">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto mb-6">
              Comprehensive technology solutions designed to transform your business 
              and drive digital innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium">Web Development</span>
              <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium">Desktop Apps</span>
              <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium">AI & Automation</span>
              <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium">Data Management</span>
            </div>
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
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Animated Service Cards */}
                <div className="grid grid-cols-2 gap-6 p-6 w-full h-full">
                  {[
                    { icon: '🌐', title: 'Web Development', color: 'from-blue-400 to-blue-600' },
                    { icon: '💻', title: 'Desktop Apps', color: 'from-purple-400 to-purple-600' },
                    { icon: '🤖', title: 'AI & Automation', color: 'from-green-400 to-green-600' },
                    { icon: '📊', title: 'Data Solutions', color: 'from-orange-400 to-orange-600' },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className={`bg-gradient-to-br ${service.color} rounded-xl p-6 shadow-lg cursor-pointer`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="text-4xl mb-3 text-center"
                      >
                        {service.icon}
                      </motion.div>
                      <p className="text-white font-bold text-sm text-center">{service.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Floating particles (deterministic for hydration) */}
            {[
              { left: 15, top: 22, duration: 2.6, delay: 0.4, x: 6 },
              { left: 82, top: 28, duration: 2.9, delay: 0.9, x: -5 },
              { left: 33, top: 64, duration: 3.1, delay: 0.2, x: 8 },
              { left: 74, top: 58, duration: 2.7, delay: 0.6, x: -7 },
              { left: 46, top: 18, duration: 2.8, delay: 0.1, x: 5 },
              { left: 62, top: 72, duration: 3.0, delay: 0.5, x: -6 },
              { left: 9, top: 45, duration: 2.5, delay: 0.7, x: 4 },
              { left: 88, top: 40, duration: 3.2, delay: 0.3, x: -8 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#2563EB] rounded-full"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [1, 1.8, 1],
                  x: [0, p.x, 0],
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

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#2563EB]/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000" style={{ boxShadow: '0 0 100px rgba(37, 99, 235, 0.25)' }}></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
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
                className="group relative bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
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
                    className="text-2xl font-bold text-[#0F172A] mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#334155] leading-relaxed mb-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Benefits List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[#334155]">
                          <span className="text-[#2563EB] mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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

      {/* Detailed Service Information Section */}
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
              Comprehensive Software Solutions
            </h2>
            <p className="text-xl text-[#334155]">
              Detailed information about what we offer and how we can help your business
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className="text-3xl font-bold text-[#0F172A]">{service.title}</h3>
                    </div>
                    <p className="text-[#334155] leading-relaxed mb-6 text-lg">
                      {service.detailedDescription}
                    </p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-xl p-6">
                    <h4 className="font-bold text-[#0F172A] mb-4">Use Cases:</h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-center text-[#334155]">
                          <span className="text-[#2563EB] mr-2">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
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
            className="bg-[#2563EB] rounded-3xl p-12 text-[#FFFFFF]"
            style={{ boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25)' }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#FFFFFF]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-[#FFFFFF]/90">
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
