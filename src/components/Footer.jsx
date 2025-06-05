
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/b566f2d8-9ec2-4e79-8445-c32f57df1f3c/6a6961f3ad555494d08a761bfd9707fb.png";


  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <img src={logoUrl} alt="DataSeaTech Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">DataSea</span>
                <span className="text-slate-300">Tech</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Harness Data. Power Decisions. Leading global IT consulting startup specializing in cloud data engineering and big data solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-slate-200 mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Reviews', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold text-slate-200 mb-4 block">Services</span>
            <ul className="space-y-2">
              {[
                'Cloud Data Engineering',
                'Big Data Architecture',
                'Cost Optimization',
                'Staff Augmentation',
                'AI/ML Solutions',
                'DevOps Services'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <span className="text-lg font-semibold text-slate-200 mb-4 block">Stay Connected</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@dataseatech.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9703322554000</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
            
            <div className="mt-6">
              <span className="text-sm font-medium text-slate-300 mb-2 block">Newsletter</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} DataSeaTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
