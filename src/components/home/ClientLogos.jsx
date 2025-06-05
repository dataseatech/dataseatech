import React from 'react';
import { motion } from 'framer-motion';
import useSound from '@/hooks/useSound';

const ClientLogos = () => {
  const playSound = useSound();
  const clients = [
    { name: 'Microsoft', alt: 'Microsoft logo', imageKeywords: 'Microsoft company logo' },
    { name: 'Amazon', alt: 'Amazon logo', imageKeywords: 'Amazon company logo' },
    { name: 'Google', alt: 'Google logo', imageKeywords: 'Google company logo' },
    { name: 'Netflix', alt: 'Netflix logo', imageKeywords: 'Netflix company logo' },
    { name: 'Spotify', alt: 'Spotify logo', imageKeywords: 'Spotify company logo' },
    { name: 'Uber', alt: 'Uber logo', imageKeywords: 'Uber company logo' }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-200 mb-4">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
              onMouseEnter={() => playSound('subtle_hover')}
            >
               <img  class="h-12 mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" alt={client.alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
