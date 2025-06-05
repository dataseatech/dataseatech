import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Zap, Users } from 'lucide-react';
import useSound from '@/hooks/useSound';

const ServicesHighlight = () => {
  const playSound = useSound();
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Data Engineering',
      description: 'Azure, Databricks, Snowflake solutions',
      imageAlt: 'Cloud data engineering icon'
    },
    {
      icon: Database,
      title: 'Big Data Architecture',
      description: 'Scalable real-time & batch pipelines',
      imageAlt: 'Big data architecture icon'
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by 40%',
      imageAlt: 'Cost optimization icon'
    },
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: 'Expert teams for enterprise clients',
      imageAlt: 'Staff augmentation icon'
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transforming businesses through cutting-edge data solutions and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => playSound('card_hover')}
              className="glass-effect rounded-xl p-6 text-center group hover:bg-slate-700/30 transition-all duration-300"
            >
              <div className="h-24 w-full mb-4 relative">
                 <img  class="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" alt={service.imageAlt} src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
