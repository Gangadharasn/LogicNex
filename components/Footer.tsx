'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#E5E7EB] mb-4">
              LogicNex
            </h3>
            <p className="text-[#E5E7EB]/80">
              End-to-end technology solutions for your business needs. 
              Delivering high-quality digital products with innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#E5E7EB] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2563EB] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#2563EB] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#E5E7EB] mb-4">Get In Touch</h4>
            <p className="text-[#E5E7EB]/80 mb-2">
              Ready to transform your business with technology?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-[#2563EB]/20 mt-8 pt-8 text-center text-[#E5E7EB]/80">
          <p>&copy; {new Date().getFullYear()} LogicNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
