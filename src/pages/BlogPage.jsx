import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useSound from '@/hooks/useSound';

const BlogPage = () => {
  const playSound = useSound();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cloud', 'Data Engineering', 'AI/ML', 'Case Studies', 'Best Practices'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Data Engineering: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping cloud data engineering, from serverless architectures to real-time analytics and GenAI integration.',
      category: 'Cloud',
      author: 'Alex Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      imageAlt: 'Futuristic cloud infrastructure with data streams and AI nodes',
      featured: true
    },
    {
      id: 2,
      title: 'Building Real-Time Analytics Pipelines with Apache Kafka & Flink',
      excerpt: 'A comprehensive guide to implementing scalable real-time data processing using Kafka and Apache Flink for complex event processing.',
      category: 'Data Engineering',
      author: 'Sarah Rodriguez',
      date: '2025-01-10',
      readTime: '12 min read',
      imageAlt: 'Animated real-time data pipeline visualization with Kafka and Flink components'
    },
    {
      id: 3,
      title: 'Cost Optimization Strategies for Cloud Data Warehouses in the AI Era',
      excerpt: 'Learn proven techniques to reduce your cloud data warehouse costs by up to 40% while supporting demanding AI/ML workloads.',
      category: 'Best Practices',
      author: 'Michael Johnson',
      date: '2025-01-08',
      readTime: '10 min read',
      imageAlt: 'Cost optimization dashboard showing resource usage for AI workloads'
    },
    {
      id: 4,
      title: 'Machine Learning Model Deployment at Scale using Kubernetes and MLOps',
      excerpt: 'Best practices for deploying and managing ML models in production environments using Kubernetes, Kubeflow, and MLOps principles.',
      category: 'AI/ML',
      author: 'Emily Zhang',
      date: '2025-01-05',
      readTime: '15 min read',
      imageAlt: 'MLOps pipeline diagram with Kubernetes and Kubeflow integration'
    },
    {
      id: 5,
      title: 'Case Study: Transforming Legacy Data Infrastructure for a Financial Giant',
      excerpt: 'How we helped a Fortune 100 financial institution migrate from on-premise to a secure, cloud-native data architecture.',
      category: 'Case Studies',
      author: 'Alex Chen',
      date: '2025-01-03',
      readTime: '6 min read',
      imageAlt: 'Comparison of old vs. new financial data infrastructure design'
    },
    {
      id: 6,
      title: 'Data Mesh vs. Data Lakehouse: Choosing Your Next-Gen Architecture',
      excerpt: 'Understanding the nuances of Data Mesh and Data Lakehouse architectures and how to select the best fit for your enterprise.',
      category: 'Data Engineering',
      author: 'Sarah Rodriguez',
      date: '2024-12-28',
      readTime: '14 min read',
      imageAlt: 'Comparative diagram of Data Mesh and Data Lakehouse architectures'
    },
    {
      id: 7,
      title: 'Securing Your Data Pipeline: A Zero-Trust Approach',
      excerpt: 'Comprehensive security strategies for protecting data in transit and at rest in modern data pipelines using Zero-Trust principles.',
      category: 'Best Practices',
      author: 'Michael Johnson',
      date: '2024-12-25',
      readTime: '11 min read',
      imageAlt: 'Cybersecurity visualization of a Zero-Trust data pipeline'
    },
    {
      id: 8,
      title: 'Snowflake vs. Databricks vs. BigQuery: A 2025 Deep Dive',
      excerpt: 'An updated detailed comparison of three leading cloud data platforms to help you make an informed decision for your 2025 strategy.',
      category: 'Cloud',
      author: 'Emily Zhang',
      date: '2024-12-20',
      readTime: '9 min read',
      imageAlt: 'Feature comparison matrix of Snowflake, Databricks, and BigQuery'
    },
    {
      id: 9,
      title: 'Real-Time Fraud Detection with Graph Neural Networks',
      excerpt: 'Building an advanced real-time fraud detection system using Graph Neural Networks (GNNs) for complex relationship analysis.',
      category: 'AI/ML',
      author: 'Alex Chen',
      date: '2024-12-18',
      readTime: '13 min read',
      imageAlt: 'Visualization of a Graph Neural Network analyzing transaction relationships for fraud detection'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'All' || searchTerm);


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
              Data Engineering <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Insights, tutorials, and best practices from our team of data engineering experts. 
              Stay updated with the latest trends in cloud data architecture and analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => playSound('focus', 0.2)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => { setSelectedCategory(category); playSound('filter'); }}
                      onMouseEnter={() => playSound('button_hover')}
                      className={`${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500'
                          : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      <Tag className="mr-2 h-4 w-4" />
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
              onMouseEnter={() => playSound('card_hover')}
            >
              <h2 className="text-3xl font-bold text-slate-200 mb-8">Featured Article</h2>
              <div className="glass-effect rounded-xl overflow-hidden hover:bg-slate-700/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                     <img  class="w-full h-full object-cover" alt={featuredPost.imageAlt} src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-4">{featuredPost.title}</h3>
                    <p className="text-slate-400 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0" onClick={() => playSound('click')}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-200 mb-8">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
            </h2>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-400">No articles found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={() => playSound('card_hover')}
                  className="glass-effect rounded-xl overflow-hidden hover:bg-slate-700/30 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                     <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={post.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 p-0" onClick={() => playSound('click')}>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
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
            <h3 className="text-2xl font-bold text-slate-200 mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on data engineering, 
              cloud architecture, and analytics delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                onFocus={() => playSound('focus', 0.2)}
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <Button 
                onClick={() => playSound('submit')}
                onMouseEnter={() => playSound('button_hover')}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;