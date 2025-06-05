import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useSound from '@/hooks/useSound';

const LatestWork = () => {
  const playSound = useSound();
  const workItems = [
    {
      title: 'Real-time Analytics Platform',
      category: 'Data Engineering',
      description: 'Built scalable streaming pipeline processing 1M+ events/sec',
      tech: ['Azure', 'Databricks', 'Kafka'],
      imageAlt: 'Animated GIF showing real-time data flowing through an analytics platform',
      imageKeywords: 'real-time data analytics platform animation'
    },
    {
      title: 'ML-Powered Recommendation Engine',
      category: 'AI/ML',
      description: 'Increased user engagement by 45% with personalized recommendations',
      tech: ['Python', 'TensorFlow', 'AWS'],
      imageAlt: 'Animated GIF of a brain with neural network connections processing recommendations',
      imageKeywords: 'machine learning recommendation engine animation'
    },
    {
      title: 'Cloud Cost Optimization Dashboard',
      category: 'Cloud Optimization',
      description: 'Reduced cloud costs by 40% through intelligent resource management',
      tech: ['Snowflake', 'PowerBI', 'Azure'],
      imageAlt: 'Animated GIF of a financial dashboard showing cost reduction charts',
      imageKeywords: 'cloud cost optimization dashboard animation'
    },
    {
      title: 'Multi-Cloud Data Lake',
      category: 'Architecture',
      description: 'Unified data across AWS, Azure, and GCP for global enterprise',
      tech: ['Terraform', 'Kubernetes', 'Spark'],
      imageAlt: 'Animated GIF of data flowing between different cloud provider icons',
      imageKeywords: 'multi-cloud data lake animation'
    },
    {
      title: 'Predictive Maintenance for IoT',
      category: 'IoT & AI',
      description: 'Reduced equipment downtime by 30% using predictive ML models.',
      tech: ['Azure IoT', 'Python', 'Scikit-learn'],
      imageAlt: 'Animated GIF of industrial sensors sending data to a central predictive analytics system',
      imageKeywords: 'IoT predictive maintenance animation'
    },
    {
      title: 'Business Intelligence Platform',
      category: 'BI & Analytics',
      description: 'Empowered decision-makers with self-service BI and interactive dashboards.',
      tech: ['Tableau', 'SQL Server', 'PowerBI'],
      imageAlt: 'Animated GIF showcasing various interactive business intelligence dashboards',
      imageKeywords: 'business intelligence platform animation'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            Our <span className="gradient-text">Latest Work</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover how we've helped enterprises transform their data infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => playSound('card_hover')}
              className="glass-effect rounded-xl overflow-hidden group hover:bg-slate-700/30 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 relative overflow-hidden">
                <img  
                  class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                  alt={project.imageAlt} src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-slate-700 text-cyan-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0" onClick={() => playSound('click')}>
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button 
              size="lg" 
              onClick={() => playSound('submit')}
              onMouseEnter={() => playSound('button_hover')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWork;
