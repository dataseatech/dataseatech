
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSound from '@/hooks/useSound';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const playSound = useSound();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Data Engineering', 'AI/ML', 'Cloud', 'Consulting'];

  const projects = [
    {
      id: 1,
      title: 'Real-time Analytics Platform',
      category: 'Data Engineering',
      description: 'Built a scalable streaming pipeline processing 1M+ events per second for a major e-commerce platform.',
      tech: ['Azure', 'Databricks', 'Kafka', 'Spark'],
      imageAlt: 'Animated GIF of a real-time analytics dashboard updating live',
      imageKeywords: 'realtime analytics dashboard animation',
      client: 'E-commerce Giant',
      duration: '6 months',
      outcome: '300% improvement in data processing speed'
    },
    {
      id: 2,
      title: 'ML-Powered Recommendation Engine',
      category: 'AI/ML',
      description: 'Developed personalized recommendation system that increased user engagement by 45%.',
      tech: ['Python', 'TensorFlow', 'AWS', 'Redis'],
      imageAlt: 'Animated GIF illustrating an ML recommendation engine suggesting products',
      imageKeywords: 'machine learning recommendation engine animation',
      client: 'Streaming Service',
      duration: '4 months',
      outcome: '45% increase in user engagement'
    },
    {
      id: 3,
      title: 'Multi-Cloud Data Lake',
      category: 'Cloud',
      description: 'Unified data across AWS, Azure, and GCP for a global enterprise with 50+ subsidiaries.',
      tech: ['Terraform', 'Kubernetes', 'Spark', 'Delta Lake'],
      imageAlt: 'Animated GIF showing data flowing seamlessly between different cloud provider logos',
      imageKeywords: 'multicloud data lake animation',
      client: 'Global Enterprise',
      duration: '8 months',
      outcome: 'Unified data across 50+ subsidiaries'
    },
    {
      id: 4,
      title: 'Cost Optimization Dashboard',
      category: 'Consulting',
      description: 'Reduced cloud infrastructure costs by 40% through intelligent resource management.',
      tech: ['Snowflake', 'PowerBI', 'Azure', 'Python'],
      imageAlt: 'Animated GIF of a dashboard with charts demonstrating cloud cost reduction',
      imageKeywords: 'cost optimization dashboard animation',
      client: 'Fortune 500 Company',
      duration: '3 months',
      outcome: '40% reduction in cloud costs'
    },
    {
      id: 5,
      title: 'Fraud Detection System',
      category: 'AI/ML',
      description: 'Real-time fraud detection system with 99.8% accuracy using advanced machine learning.',
      tech: ['Python', 'Kafka', 'Redis', 'TensorFlow'],
      imageAlt: 'Animated GIF of a cybersecurity system identifying and flagging fraudulent transactions',
      imageKeywords: 'fraud detection system animation',
      client: 'Financial Institution',
      duration: '5 months',
      outcome: '99.8% fraud detection accuracy'
    },
    {
      id: 6,
      title: 'IoT Data Pipeline',
      category: 'Data Engineering',
      description: 'Processing sensor data from 10,000+ IoT devices in real-time for smart city initiative.',
      tech: ['Azure IoT', 'Stream Analytics', 'CosmosDB', 'Power BI'],
      imageAlt: 'Animated GIF of IoT devices sending data streams to a central processing hub',
      imageKeywords: 'IoT data pipeline animation',
      client: 'Smart City Project',
      duration: '7 months',
      outcome: '10K+ devices connected'
    },
    {
      id: 7,
      title: 'Data Warehouse Modernization',
      category: 'Cloud',
      description: 'Migrated legacy on-premise data warehouse to cloud-native solution.',
      tech: ['Snowflake', 'dbt', 'Airflow', 'AWS'],
      imageAlt: 'Animated GIF showing data migration from an old server to a modern cloud warehouse',
      imageKeywords: 'data warehouse modernization animation',
      client: 'Retail Chain',
      duration: '6 months',
      outcome: '70% faster query performance'
    },
    {
      id: 8,
      title: 'Business Intelligence Solution',
      category: 'Consulting',
      description: 'Developed a comprehensive BI solution providing actionable insights for a CPG company.',
      tech: ['Tableau', 'SQL Server', 'Python', 'ETL'],
      imageAlt: 'Animated GIF of various interactive business intelligence dashboards and reports',
      imageKeywords: 'business intelligence solution animation',
      client: 'CPG Manufacturer',
      duration: '4 months',
      outcome: '20% increase in sales revenue'
    },
    {
      id: 9,
      title: 'Customer 360 Platform',
      category: 'Data Engineering',
      description: 'Unified customer data platform providing 360-degree view across all touchpoints.',
      tech: ['Databricks', 'Azure', 'PowerBI', 'Kafka'],
      imageAlt: 'Animated GIF of a Customer 360 dashboard showing interconnected customer data points',
      imageKeywords: 'customer 360 platform animation',
      client: 'Telecom Provider',
      duration: '5 months',
      outcome: '360° customer view achieved'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped enterprises 
              transform their data infrastructure and drive business value.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => { setActiveFilter(filter); playSound('filter'); }}
                onMouseEnter={() => playSound('button_hover')}
                className={`${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500'
                    : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
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
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="ghost" className="bg-black/20 hover:bg-black/40" onClick={() => playSound('click')}>
                      <ExternalLink className="h-4 w-4 text-white" />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-black/20 hover:bg-black/40" onClick={() => playSound('click')}>
                      <Github className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Client:</span>
                      <span className="text-slate-300">{project.client}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Duration:</span>
                      <span className="text-slate-300">{project.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Outcome:</span>
                      <span className="text-cyan-400">{project.outcome}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-700 text-cyan-400 px-2 py-1 rounded text-sm">
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

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              Project <span className="gradient-text">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '8+', label: 'Enterprise Clients' },
              { number: '40%', label: 'Average Cost Reduction' },
              { number: '99.9%', label: 'System Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar results for your organization.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                onClick={() => playSound('submit')}
                onMouseEnter={() => playSound('button_hover')}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
