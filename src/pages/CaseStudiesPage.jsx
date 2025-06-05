import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, TrendingUp, Award, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSound from '@/hooks/useSound';

const CaseStudiesPage = () => {
  const playSound = useSound();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Cloud Migration', 'Data Engineering', 'Cost Optimization', 'AI/ML', 'Real-time Analytics'];

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Retail Giant: Cloud Data Warehouse Migration & Real-time Analytics',
      client: 'Global Retail Corporation',
      industry: 'Retail',
      category: 'Cloud Migration',
      duration: '8 months',
      teamSize: '12 engineers',
      challenge: 'Legacy on-premise data warehouse struggling with scalability and performance issues, processing 50TB+ daily data with 6-hour batch windows.',
      solution: 'Migrated to Snowflake cloud data warehouse with real-time streaming pipelines using Kafka and Databricks for ETL processing and PowerBI for visualization.',
      results: [
        '75% reduction in query response time',
        '60% cost savings on infrastructure',
        '99.9% uptime improvement',
        'Enabled real-time inventory analytics'
      ],
      technologies: ['Snowflake', 'Databricks', 'Apache Kafka', 'Azure', 'Python', 'SQL', 'PowerBI'],
      imageAlt: 'Animated diagram of cloud data warehouse migration for retail giant',
      gif: 'retail-cloud-migration.gif',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Services: ML-Powered Real-time Fraud Detection System',
      client: 'Leading Investment Bank',
      industry: 'Financial Services',
      category: 'Real-time Analytics',
      duration: '6 months',
      teamSize: '8 engineers',
      challenge: 'Processing millions of transactions daily with legacy batch-based fraud detection causing delayed responses and financial losses.',
      solution: 'Built real-time ML-powered fraud detection system using Apache Kafka, Apache Flink, and custom ML models (TensorFlow) deployed on Kubernetes.',
      results: [
        '95% reduction in fraud detection time (sub-second)',
        '$2.5M annual savings from prevented fraud',
        '99.99% system availability',
        '40% improvement in detection accuracy'
      ],
      technologies: ['Apache Kafka', 'Apache Flink', 'TensorFlow', 'Kubernetes', 'Redis', 'PostgreSQL'],
      imageAlt: 'Animated visualization of real-time fraud detection in financial transactions',
      gif: 'finance-fraud-detection.gif'
    },
    {
      id: 3,
      title: 'Healthcare Analytics: Unified Patient Data Platform (HIPAA Compliant)',
      client: 'Multi-Hospital Healthcare Network',
      industry: 'Healthcare',
      category: 'Data Engineering',
      duration: '10 months',
      teamSize: '15 engineers',
      challenge: 'Siloed patient data across multiple EMR systems preventing comprehensive care analytics and regulatory compliance challenges.',
      solution: 'Developed HIPAA-compliant data lake on AWS with automated ETL pipelines (Airflow), patient 360 views, and predictive analytics for care optimization using Redshift and Tableau.',
      results: [
        '100% HIPAA compliance achieved',
        '50% improvement in care coordination efficiency',
        '30% reduction in patient readmission rates',
        'Unified view of 2M+ patient records for analytics'
      ],
      technologies: ['AWS S3', 'Apache Airflow', 'Redshift', 'Lambda', 'EMR', 'Tableau', 'Python'],
      imageAlt: 'Animated flow of patient data into a secure, unified healthcare analytics platform',
      gif: 'healthcare-data-platform.gif'
    },
    {
      id: 4,
      title: 'Manufacturing IoT: AI-Driven Predictive Maintenance Platform',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      category: 'AI/ML',
      duration: '7 months',
      teamSize: '10 engineers',
      challenge: 'Unplanned equipment downtime costing $1M+ monthly with reactive maintenance approach across 50+ manufacturing facilities.',
      solution: 'Implemented IoT data pipeline with ML-based predictive maintenance models using Azure IoT Hub, Stream Analytics, Azure Machine Learning, and Power BI dashboards.',
      results: [
        '70% reduction in unplanned equipment downtime',
        '$8M annual cost savings from proactive maintenance',
        '85% prediction accuracy for critical equipment failures',
        'Real-time monitoring of 10K+ industrial sensors'
      ],
      technologies: ['Azure IoT Hub', 'Stream Analytics', 'Azure ML', 'Power BI', 'Python', 'TimescaleDB'],
      imageAlt: 'Animated graphic showing IoT sensors predicting machinery failure in a factory setting',
      gif: 'manufacturing-iot-predictive.gif'
    },
    {
      id: 5,
      title: 'E-commerce: Hyper-Personalization Engine for 100M+ Users',
      client: 'Top 10 E-commerce Platform',
      industry: 'E-commerce',
      category: 'AI/ML',
      duration: '9 months',
      teamSize: '14 engineers',
      challenge: 'Generic product recommendations leading to low conversion rates and poor customer experience across a massive user base.',
      solution: 'Built real-time personalization engine using collaborative filtering, deep learning models (TensorFlow on GCP), and a robust A/B testing framework with Redis for low-latency.',
      results: [
        '35% increase in product conversion rates',
        '50% improvement in customer engagement metrics',
        '$25M additional annual revenue attributed to personalization',
        'Sub-100ms recommendation response time'
      ],
      technologies: ['Apache Spark', 'TensorFlow', 'Redis', 'Elasticsearch', 'Kubernetes', 'GCP AI Platform'],
      imageAlt: 'Animated display of personalized product recommendations on an e-commerce site',
      gif: 'ecommerce-personalization.gif'
    },
    {
      id: 6,
      title: 'Telecommunications: Network Performance & Cost Optimization Analytics',
      client: 'Major Telecom Provider',
      industry: 'Telecommunications',
      category: 'Cost Optimization',
      duration: '5 months',
      teamSize: '9 engineers',
      challenge: 'Network congestion and inefficient resource allocation leading to poor service quality (QoS) and high operational costs for a nationwide network.',
      solution: 'Developed network analytics platform with real-time monitoring (Kafka, ClickHouse), predictive capacity planning, and automated optimization algorithms, visualized in Grafana.',
      results: [
        '40% improvement in network resource efficiency',
        '25% reduction in network operational costs',
        '90% decrease in critical service outages',
        'Optimized resource allocation across 1000+ cell towers'
      ],
      technologies: ['Apache Kafka', 'ClickHouse', 'Grafana', 'Python', 'Docker', 'AWS EC2'],
      imageAlt: 'Animated telecom network graph showing optimized data flow',
      gif: 'telecom-network-optimization.gif'
    }
  ];

  const filteredStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter);

  const featuredStudy = caseStudies.find(study => study.featured);

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
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover how we've helped leading organizations transform their data infrastructure, 
              optimize costs, and unlock the power of their data for business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => { setSelectedFilter(filter); playSound('filter'); }}
                onMouseEnter={() => playSound('button_hover')}
                className={`${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500'
                    : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {featuredStudy && selectedFilter === 'All' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => playSound('card_hover')}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-200 mb-8">Featured Case Study</h2>
              <div className="glass-effect rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-80 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                     <img  class="w-full h-full object-cover" alt={featuredStudy.imageAlt} src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {featuredStudy.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">{featuredStudy.title}</h3>
                    <p className="text-cyan-400 mb-4">{featuredStudy.client} • {featuredStudy.industry}</p>
                    <p className="text-slate-400 mb-6 line-clamp-3">{featuredStudy.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredStudy.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{featuredStudy.teamSize}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {featuredStudy.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-slate-300">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600" onClick={() => playSound('click')}>
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className={`py-20 ${!(featuredStudy && selectedFilter === 'All') ? '' : 'bg-slate-800/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.filter(study => !study.featured || selectedFilter !== 'All').map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl overflow-hidden hover:bg-slate-700/30 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                  <img  
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={study.imageAlt} src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-500">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3">{study.client}</p>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{study.challenge}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                      <Calendar className="h-3 w-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                      <Users className="h-3 w-3" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="bg-slate-800 text-slate-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="bg-slate-800 text-slate-400 px-2 py-1 rounded text-xs">
                        +{study.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0 w-full justify-between" onClick={() => playSound('click')}>
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
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
            className="glass-effect rounded-xl p-8 text-center"
          >
            <Award className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-slate-200 mb-4">Ready to Transform Your Data Infrastructure?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have revolutionized their data operations with DataSeaTech. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600" onClick={() => playSound('click')}>
                Start Your Transformation
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" onClick={() => playSound('click')}>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;