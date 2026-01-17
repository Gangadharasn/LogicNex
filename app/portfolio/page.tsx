'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Enterprise Web Platform',
    description: 'A comprehensive web platform for enterprise data management with real-time analytics and reporting capabilities.',
    detailedDescription: 'Built a scalable enterprise platform handling millions of records with real-time data synchronization, advanced analytics dashboards, role-based access control, and comprehensive reporting tools. The platform improved operational efficiency by 65% and reduced manual data processing time by 80%.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    results: ['65% Efficiency Increase', '80% Time Reduction', 'Scalable to 1M+ Users'],
    image: '🌐',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent dashboard with AI-driven insights and predictive analytics for business intelligence.',
    detailedDescription: 'Developed an AI-powered analytics platform using machine learning algorithms for demand forecasting, customer behavior analysis, and predictive insights. The system processes terabytes of data daily and provides actionable recommendations, resulting in a 40% improvement in decision-making accuracy.',
    category: 'AI & Automation',
    technologies: ['React', 'Python', 'TensorFlow', 'MongoDB', 'Docker'],
    results: ['40% Better Decisions', 'Real-time Predictions', 'Terabyte Processing'],
    image: '🤖',
  },
  {
    title: 'Automated Billing System',
    description: 'A complete billing and invoice automation system with payment gateway integration and reporting.',
    detailedDescription: 'Created a fully automated billing and invoicing system integrated with Stripe, PayPal, and Square payment gateways. The system handles recurring subscriptions, tax calculations, invoice generation, payment tracking, and financial reporting. Reduced billing errors by 95% and cut processing time by 90%.',
    category: 'Billing Systems',
    technologies: ['Node.js', 'MongoDB', 'Stripe API', 'PDF Generation', 'Email Service'],
    results: ['95% Error Reduction', '90% Time Savings', 'Multi-Gateway Support'],
    image: '💰',
  },
  {
    title: 'Cross-Platform Desktop App',
    description: 'A feature-rich desktop application for data visualization and management across Windows, macOS, and Linux.',
    detailedDescription: 'Built a cross-platform desktop application using Electron with offline capabilities, local data storage, and system integration. The app features advanced data visualization, export capabilities, and synchronization with cloud services. Supports Windows, macOS, and Linux with native performance.',
    category: 'Desktop Development',
    technologies: ['Electron', 'React', 'SQLite', 'Chart.js', 'File System API'],
    results: ['Cross-Platform', 'Offline Capable', 'Native Performance'],
    image: '💻',
  },
  {
    title: 'Data Management Portal',
    description: 'A centralized portal for managing, processing, and analyzing large volumes of business data.',
    detailedDescription: 'Developed a comprehensive data management portal with ETL capabilities, data warehousing, real-time processing, and advanced analytics. The portal handles data ingestion from multiple sources, data transformation, storage optimization, and provides intuitive dashboards for data visualization and reporting.',
    category: 'Data Management',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Elasticsearch', 'Apache Airflow'],
    results: ['Multi-Source Integration', 'Real-time Processing', 'Advanced Analytics'],
    image: '📊',
  },
  {
    title: 'Custom CRM Solution',
    description: 'A tailor-made Customer Relationship Management system designed for a specific industry workflow.',
    detailedDescription: 'Designed and developed a custom CRM solution tailored to the specific workflow of a service industry. The system includes lead management, contact tracking, sales pipeline, automated email campaigns, document management, and comprehensive reporting. Increased sales conversion by 50% and improved customer retention by 35%.',
    category: 'Custom Development',
    technologies: ['Next.js', 'GraphQL', 'MySQL', 'Email API', 'File Storage'],
    results: ['50% Conversion Increase', '35% Retention Boost', 'Workflow Automation'],
    image: '⚙️',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, checkout, and order processing.',
    detailedDescription: 'Built a complete e-commerce solution with product catalog management, shopping cart functionality, secure checkout process, payment gateway integration, order management, inventory tracking, and customer portal. The platform supports multiple payment methods and shipping providers.',
    category: 'Web Development',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Payment Gateway'],
    results: ['Secure Payments', 'Inventory Management', 'Multi-Vendor Support'],
    image: '🛒',
  },
  {
    title: 'Workflow Automation System',
    description: 'An intelligent workflow automation platform that streamlines business processes and reduces manual tasks.',
    detailedDescription: 'Created an automation platform that integrates with various business tools and APIs to automate repetitive tasks, send notifications, generate reports, and trigger actions based on business rules. The system reduced manual work by 70% and improved process consistency.',
    category: 'AI & Automation',
    technologies: ['Python', 'Zapier API', 'Webhooks', 'Database', 'Notification Service'],
    results: ['70% Manual Work Reduction', 'Process Consistency', 'Multi-Tool Integration'],
    image: '🔄',
  },
  {
    title: 'Cloud-Based ERP System',
    description: 'A comprehensive Enterprise Resource Planning system with modules for finance, HR, inventory, and sales.',
    detailedDescription: 'Developed a cloud-based ERP system with modules for financial management, human resources, inventory control, sales management, and reporting. The system provides real-time visibility into business operations and integrates with existing tools. Improved operational efficiency by 55%.',
    category: 'Custom Development',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
    results: ['55% Efficiency Boost', 'Real-time Visibility', 'Cloud-Based'],
    image: '📈',
  },
];

export default function Portfolio() {
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
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
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
                className="group bg-[#FFFFFF] border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
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
                  
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#334155] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Results */}
                  {project.results && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-[#334155]">
                            <span className="text-[#2563EB] mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#F8FAFC] text-[#0F172A] text-xs font-medium rounded-full border border-gray-200"
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
            className="bg-[#2563EB] rounded-3xl p-12 text-[#FFFFFF]"
            style={{ boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25)' }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#FFFFFF]">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 text-[#FFFFFF]/90">
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
