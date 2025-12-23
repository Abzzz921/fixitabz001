import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              FixitAbz
            </span>
            <p className="text-gray-400 text-sm">
              Enterprise-grade IT solutions for growing businesses. We keep your systems running so you can focus on what matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Home</Link>
              <Link to="/services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Services</Link>
              <Link to="/industries" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Industries</Link>
              <Link to="/case-studies" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Case Studies</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-white font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Active Directory</Link>
              <Link to="/services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Exchange Email</Link>
              <Link to="/services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">File Server Management</Link>
              <Link to="/services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">Network Solutions</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-white font-semibold mb-4 block">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-0.5 text-purple-400 shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-0.5 text-purple-400 shrink-0" />
                <span>hello@fixitabz.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 text-purple-400 shrink-0" />
                <span>123 Tech Street, Suite 100<br />San Francisco, CA 94102</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 py-6 border-t border-purple-500/20">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 text-gray-400 hover:text-purple-400 transition-all"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 text-gray-400 hover:text-purple-400 transition-all"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 text-gray-400 hover:text-purple-400 transition-all"
          >
            <Facebook size={20} />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-6 border-t border-purple-500/20">
          <p>&copy; {currentYear} FixitAbz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;