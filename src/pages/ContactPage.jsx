
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import useSound from '@/hooks/useSound';

const ContactPage = () => {
  const playSound = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('form_submit');
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleFocus = () => {
    playSound('focus', 0.2);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@dataseatech.com',
      description: 'Send us an email anytime',
      imageAlt: 'Stylized email icon',
      imageKeywords: 'email icon'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9703322554000',
      description: 'Mon-Fri from 9am to 7pm IST',
      imageAlt: 'Stylized phone icon',
      imageKeywords: 'phone icon'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'DataSeaTech, SDH2, Nallagandla, Hyderabad, India',
      description: 'Visit our headquarters',
      imageAlt: 'Stylized map pin icon',
      imageKeywords: 'map pin icon'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9am-7pm IST',
      description: 'We respond within 24 hours',
      imageAlt: 'Stylized clock icon',
      imageKeywords: 'clock icon'
    }
  ];

  const offices = [
    {
      city: 'Hyderabad (HQ)',
      address: 'DataSeaTech, SDH2, Nallagandla, Hyderabad, India',
      phone: '+91 9703322554000',
      email: 'info@dataseatech.com',
      imageAlt: 'Hyderabad skyline with Charminar or Hi-Tech City',
      imageKeywords: 'Hyderabad city skyline'
    },
    {
      city: 'USA',
      address: 'We are coming soon!',
      phone: 'N/A',
      email: 'usa@dataseatech.com',
      imageAlt: 'USA Flag or iconic landmark',
      imageKeywords: 'USA flag'
    },
    {
      city: 'Netherlands',
      address: 'We are coming soon!',
      phone: 'N/A',
      email: 'netherlands@dataseatech.com',
      imageAlt: 'Netherlands iconic windmills or canals',
      imageKeywords: 'Netherlands windmills'
    },
    {
        city: 'Dubai',
        address: 'We are coming soon!',
        phone: 'N/A',
        email: 'dubai@dataseatech.com',
        imageAlt: 'Dubai skyline with Burj Khalifa',
        imageKeywords: 'Dubai city skyline'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to transform your data infrastructure? Let's discuss your project 
              and explore how DataSeaTech can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-slate-200 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onClick={() => playSound('item_select', 0.2)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="project">New Project</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  onMouseEnter={() => playSound('button_hover')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-200 mb-6">Contact Information</h2>
                <p className="text-slate-400 mb-8">
                  We're here to help you transform your data infrastructure. 
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    onMouseEnter={() => playSound('card_hover')}
                    className="glass-effect rounded-xl p-6 hover:bg-slate-700/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg opacity-30 blur-md"></div>
                        <img  class="w-8 h-8 object-contain relative z-10 text-white" alt={info.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                        <p className="text-slate-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => playSound('button_hover')}
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => playSound('button_hover')}
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                  >
                    <Twitter className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => playSound('button_hover')}
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                  >
                    <Youtube className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              With offices across the globe, we're always close to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-6 text-center hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="h-40 w-full rounded-lg overflow-hidden mb-6">
                   <img  class="w-full h-full object-cover" alt={office.imageAlt} src="https://images.unsplash.com/photo-1645014859956-4bd4fdb28468" />
                </div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">{office.city}</h3>
                <div className="space-y-3 text-slate-400">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                   {office.phone !== 'N/A' && (
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
              <img  class="w-full h-full object-cover" alt="World map showing office locations" src="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
