
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Database, Zap, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSound from '@/hooks/useSound';

const HeroSection = ({ playSound }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, hsl(var(--primary)) 0.5px, transparent 0.5px)',
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPositionX: ['0%', '100%'],
          backgroundPositionY: ['0%', '50%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      />
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: `hsla(195, 100%, 50%, ${Math.random() * 0.5 + 0.3})`,
            boxShadow: `0 0 ${Math.random() * 6 + 2}px hsla(195, 100%, 50%, 0.5)`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
            opacity: [0, Math.random() * 0.7 + 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="gradient-text">Harness Data.</span>
          <br />
          <span className="text-slate-200">Power Decisions.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Global IT consulting startup specializing in Cloud Data Engineering, 
          Big Data Architecture, and Cost-Optimized Pipeline Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              onClick={() => playSound('submit')}
              onMouseEnter={() => playSound('button_hover')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('button_hover')}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-lg px-8 py-4"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const CoreServicesSection = ({ services, playSound }) => (
  <section className="py-20 bg-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 188, 212, 0.2)" }}
            onMouseEnter={() => playSound('card_hover')}
            className="glass-effect rounded-xl p-6 text-center group hover:bg-slate-700/30 transition-all duration-300"
          >
            <div className="h-24 w-full mb-4 relative">
               <img  class="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" alt={service.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
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

const StatsSection = ({ stats }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
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
);

const TrustedBySection = ({ clients, playSound }) => (
  <section className="py-20 bg-slate-800/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="text-center"
            onMouseEnter={() => playSound('subtle_hover')}
          >
             <img  class="h-12 mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" alt={client.alt} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LatestWorkSection = ({ workItems, playSound }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 188, 212, 0.2)" }}
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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
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

const CTASection = ({ playSound }) => (
  <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-200">
          Ready to Transform Your <span className="gradient-text">Data Strategy</span>?
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Let's discuss how DataSeaTech can help you harness the power of your data 
          and drive intelligent business decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              onClick={() => playSound('submit')}
              onMouseEnter={() => playSound('button_hover')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('button_hover')}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-lg px-8 py-4"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);


const HomePage = () => {
  const playSound = useSound();

  const services = [
    { icon: Cloud, title: 'Cloud Data Engineering', description: 'Azure, Databricks, Snowflake solutions', image: 'futuristic cloud infrastructure with glowing data streams' },
    { icon: Database, title: 'Big Data Architecture', description: 'Scalable real-time & batch pipelines', image: 'complex big data architecture diagram with interconnected nodes' },
    { icon: Zap, title: 'Cost Optimization', description: 'Reduce infrastructure costs by 40%', image: 'dashboard showing cost savings and optimized resource allocation' },
    { icon: Users, title: 'Staff Augmentation', description: 'Expert teams for enterprise clients', image: 'diverse team of professionals collaborating in a modern office' }
  ];

  const clients = [
    { name: 'Microsoft', alt: 'Microsoft logo' }, { name: 'Amazon', alt: 'Amazon logo' }, { name: 'Google', alt: 'Google logo' },
    { name: 'Netflix', alt: 'Netflix logo' }, { name: 'Spotify', alt: 'Spotify logo' }, { name: 'Uber', alt: 'Uber logo' }
  ];

  const stats = [
    { number: '15+', label: 'Projects Delivered' }, { number: '8+', label: 'Enterprise Clients' },
    { number: '40%', label: 'Cost Reduction' }, { number: '99.9%', label: 'Uptime Achieved' }
  ];

  const workItems = [
    { title: 'Real-time Analytics Platform', category: 'Data Engineering', description: 'Built scalable streaming pipeline processing 1M+ events/sec', tech: ['Azure', 'Databricks', 'Kafka'], imageAlt: 'Animated GIF showing real-time data flowing through an analytics platform', gif: 'data-analytics-platform.gif' },
    { title: 'ML-Powered Recommendation Engine', category: 'AI/ML', description: 'Increased user engagement by 45% with personalized recommendations', tech: ['Python', 'TensorFlow', 'AWS'], imageAlt: 'Animated GIF of a brain with neural network connections processing recommendations', gif: 'ml-recommendation-engine.gif' },
    { title: 'Cloud Cost Optimization Dashboard', category: 'Cloud Optimization', description: 'Reduced cloud costs by 40% through intelligent resource management', tech: ['Snowflake', 'PowerBI', 'Azure'], imageAlt: 'Animated GIF of a financial dashboard showing cost reduction charts', gif: 'cost-optimization-dashboard.gif' },
    { title: 'Multi-Cloud Data Lake', category: 'Architecture', description: 'Unified data across AWS, Azure, and GCP for global enterprise', tech: ['Terraform', 'Kubernetes', 'Spark'], imageAlt: 'Animated GIF of data flowing between different cloud provider icons', gif: 'multi-cloud-data-lake.gif' },
    { title: 'Predictive Maintenance for IoT', category: 'IoT & AI', description: 'Reduced equipment downtime by 30% using predictive ML models.', tech: ['Azure IoT', 'Python', 'Scikit-learn'], imageAlt: 'Animated GIF of industrial sensors sending data to a central predictive analytics system', gif: 'iot-predictive-maintenance.gif' },
    { title: 'Business Intelligence Platform', category: 'BI & Analytics', description: 'Empowered decision-makers with self-service BI and interactive dashboards.', tech: ['Tableau', 'SQL Server', 'PowerBI'], imageAlt: 'Animated GIF showcasing various interactive business intelligence dashboards', gif: 'bi-platform.gif' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection playSound={playSound} />
      <CoreServicesSection services={services} playSound={playSound} />
      <StatsSection stats={stats} />
      <TrustedBySection clients={clients} playSound={playSound} />
      <LatestWorkSection workItems={workItems} playSound={playSound} />
      <CTASection playSound={playSound} />
    </div>
  );
};

export default HomePage;
