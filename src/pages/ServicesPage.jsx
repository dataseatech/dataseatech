// src/pages/ServicesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Zap, Users, Brain, Settings, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSound from '@/hooks/useSound';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const playSound = useSound();

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Data Engineering',
      description: 'Build scalable, secure, and cost-effective data infrastructure on leading cloud platforms.',
      features: [
        'Azure Data Factory & Synapse Analytics',
        'Databricks & Apache Spark optimization',
        'Snowflake data warehouse design',
        'AWS Redshift & EMR solutions',
        'Google BigQuery implementations',
        'Multi-cloud data integration'
      ],
      color: 'from-blue-500 to-cyan-500',
      imageAlt: 'Cloud Data Engineering Visual',
      imageUrl: '/images/cloud-data.png'
    },
    {
      icon: Database,
      title: 'Real-Time & Batch Pipelines',
      description: 'Design and implement robust data pipelines for both streaming and batch processing.',
      features: [
        'Apache Kafka & Event Streaming',
        'Real-time analytics with Apache Flink',
        'ETL/ELT pipeline automation',
        'Data quality & monitoring',
        'Change data capture (CDC)',
        'Lambda & Kappa architectures'
      ],
      color: 'from-purple-500 to-pink-500',
      imageAlt: 'Real-time Pipeline Visual',
      imageUrl: '/images/data-pipeline.png'
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs while maintaining performance and reliability.',
      features: [
        'Cloud cost analysis & reporting',
        'Resource right-sizing',
        'Auto-scaling implementations',
        'Reserved instance optimization',
        'Data lifecycle management',
        'Performance tuning'
      ],
      color: 'from-green-500 to-teal-500',
      imageAlt: 'Cost Optimization Graph',
      imageUrl: '/images/cost-optimization.png'
    },
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: 'Expert teams to accelerate your data initiatives and fill skill gaps.',
      features: [
        'Senior data engineers',
        'Cloud architects',
        'DevOps specialists',
        'Data scientists',
        'Project managers',
        'Flexible engagement models'
      ],
      color: 'from-orange-500 to-red-500',
      imageAlt: 'Team Collaboration Visual',
      imageUrl: '/images/staff-augmentation.png'
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Leverage artificial intelligence and machine learning to unlock data insights.',
      features: [
        'MLOps pipeline development',
        'Model training & deployment',
        'Computer vision solutions',
        'Natural language processing',
        'Recommendation engines',
        'Predictive analytics'
      ],
      color: 'from-indigo-500 to-purple-500',
      imageAlt: 'AI/ML Visual',
      imageUrl: '/images/ai-ml.png'
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment processes with modern DevOps practices.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Kubernetes orchestration',
        'Monitoring & alerting',
        'Security automation',
        'GitOps workflows'
      ],
      color: 'from-yellow-500 to-orange-500',
      imageAlt: 'DevOps Visual',
      imageUrl: '/images/devops.png'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your data assets with comprehensive security solutions.',
      features: [
        'Data encryption & privacy',
        'Identity & access management',
        'Security monitoring',
        'Compliance frameworks',
        'Threat detection',
        'Incident response'
      ],
      color: 'from-red-500 to-pink-500',
      imageAlt: 'Cybersecurity Visual',
      imageUrl: '/images/cybersecurity.png'
    },
    {
      icon: Code,
      title: 'Platform Products',
      description: 'Custom platform solutions to accelerate your digital transformation.',
      features: [
        'Data platform development',
        'API gateway solutions',
        'Microservices architecture',
        'Event-driven systems',
        'Self-service analytics',
        'Data marketplace'
      ],
      color: 'from-cyan-500 to-blue-500',
      imageAlt: 'Platform Products Visual',
      imageUrl: '/images/platform-products.png'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your business needs, current infrastructure, and goals',
      imageAlt: 'Discovery Process Visual',
      imageUrl: '/images/process-discovery.png'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Design optimal architecture and create detailed implementation roadmap',
      imageAlt: 'Strategy Process Visual',
      imageUrl: '/images/process-strategy.png'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy solutions using agile methodologies and best practices',
      imageAlt: 'Implementation Process Visual',
      imageUrl: '/images/process-implementation.png'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Monitor, optimize, and provide ongoing support for maximum ROI',
      imageAlt: 'Optimization Process Visual',
      imageUrl: '/images/process-optimization.png'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive data engineering and cloud solutions to transform your business.
              From cloud migration to AI implementation, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-8 hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex-shrink-0`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-200 mb-3">{service.title}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>
                <div className="h-40 w-full rounded-lg overflow-hidden mb-6 bg-slate-700/50">
                  <img className="w-100 h-200 object-cover" src={service.imageUrl} alt={service.imageAlt} />
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => playSound('subtle_hover')}
                className="text-center glass-effect rounded-xl p-6 hover:bg-slate-700/30"
              >
                <div className="h-32 w-full rounded-lg overflow-hidden mb-4 bg-slate-700/30">
                  <img src={process.imageUrl} alt={process.imageAlt} className="w-full h-full object-contain p-2" />
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-2xl font-bold text-white mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{process.title}</h3>
                <p className="text-slate-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Let's discuss your project requirements and how we can help you achieve your data goals.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                onClick={() => playSound('submit')}
                onMouseEnter={() => playSound('button_hover')}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
