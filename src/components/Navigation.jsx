import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/b566f2d8-9ec2-4e79-8445-c32f57df1f3c/6a6961f3ad555494d08a761bfd9707fb.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleGetStartedClick = () => {
    navigate('/contact');
    setIsOpen(false); 
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/DSTFinalLogo.png"
            alt="DataSeaTech Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold">
            <span className="text-cyan-500">DataSea</span>
            <span className="text-slate-300">Tech</span>
          </span>
        </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                  />
                )}
              </Link>
            ))}
            <Button 
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={handleGetStartedClick}
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-teal-500"
            >
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
