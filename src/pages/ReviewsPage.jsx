import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSound from '@/hooks/useSound';

const ReviewsPage = () => {
  const playSound = useSound();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'DataSeaTech transformed our entire data infrastructure. Their expertise in cloud migration and real-time analytics helped us reduce costs by 45% while improving performance dramatically.',
      imageAlt: 'Professional headshot of Sarah Johnson',
      videoThumbnail: 'Video thumbnail of Sarah Johnson testimonial',
      video: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'Global Retail Solutions',
      rating: 5,
      text: 'The team at DataSeaTech delivered our ML recommendation engine ahead of schedule. User engagement increased by 60% within the first month of deployment.',
      imageAlt: 'Professional headshot of Michael Chen',
      video: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Director',
      company: 'Financial Services Inc',
      rating: 5,
      text: 'Outstanding work on our fraud detection system. The real-time processing capabilities and 99.8% accuracy rate exceeded all our expectations.',
      imageAlt: 'Professional headshot of Emily Rodriguez',
      videoThumbnail: 'Video thumbnail of Emily Rodriguez testimonial',
      video: true
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Chief Data Officer',
      company: 'Healthcare Innovations',
      rating: 5,
      text: 'DataSeaTech helped us build a HIPAA-compliant data lake that processes patient data from 50+ hospitals. Their security expertise was invaluable.',
      imageAlt: 'Professional headshot of David Thompson',
      video: false
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Head of Analytics',
      company: 'E-commerce Giant',
      rating: 5,
      text: 'The real-time analytics platform they built processes over 1 million events per second. Our decision-making speed has improved dramatically.',
      imageAlt: 'Professional headshot of Lisa Wang',
      videoThumbnail: 'Video thumbnail of Lisa Wang testimonial',
      video: true
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'IT Director',
      company: 'Manufacturing Corp',
      rating: 5,
      text: 'Their IoT data pipeline solution connects 10,000+ sensors across our facilities. The insights we get now drive our operational efficiency.',
      imageAlt: 'Professional headshot of Robert Martinez',
      video: false
    }
  ];

  const clientStories = [
    {
      company: 'Fortune 500 Retailer',
      challenge: 'Legacy data warehouse couldn\'t handle Black Friday traffic',
      solution: 'Cloud-native data platform with auto-scaling',
      result: '300% performance improvement during peak traffic',
      logoAlt: 'Fortune 500 Retailer logo',
      imageAlt: 'Abstract visual representing retail data analytics'
    },
    {
      company: 'Global Bank',
      challenge: 'Manual fraud detection taking 24+ hours',
      solution: 'Real-time ML-powered fraud detection system',
      result: 'Fraud detection in under 100ms with 99.8% accuracy',
      logoAlt: 'Global Bank logo',
      imageAlt: 'Secure banking and fraud detection visual'
    },
    {
      company: 'Streaming Platform',
      challenge: 'Recommendation engine not personalized enough',
      solution: 'Advanced ML recommendation system',
      result: '45% increase in user engagement and retention',
      logoAlt: 'Streaming Platform logo',
      imageAlt: 'Visual of a personalized streaming interface'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Client Retention' },
    { number: '8+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Projects Completed' }
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
              Client <span className="gradient-text">Reviews</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Hear from our clients about how DataSeaTech has transformed their 
              data infrastructure and driven measurable business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              Video <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Watch our clients share their success stories and experiences working with DataSeaTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.video).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl overflow-hidden group hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                  <img  class="w-full h-full object-cover opacity-80" alt={testimonial.videoThumbnail} src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="icon" 
                      onClick={() => playSound('video_play')}
                      className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-slate-400 text-sm line-clamp-3">{testimonial.text}</p>
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-8 hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-slate-300 mb-6 italic">{testimonial.text}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50">
                         <img  class="w-full h-full object-cover" alt={testimonial.imageAlt} src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">{testimonial.name}</div>
                        <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                        <div className="text-slate-400 text-sm">{testimonial.company}</div>
                      </div>
                      <div className="flex ml-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real challenges, innovative solutions, and measurable results from our client partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-8 hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="h-24 w-full rounded-lg overflow-hidden mb-6 bg-slate-700/30 flex items-center justify-center">
                   <img  class="max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all" alt={story.logoAlt} src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                </div>
                 <img  class="w-full h-40 object-cover rounded-md mb-6" alt={story.imageAlt} src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                <h3 className="text-xl font-bold text-slate-200 mb-4">{story.company}</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-red-400 font-semibold text-sm">Challenge:</span>
                    <p className="text-slate-400 text-sm mt-1">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-blue-400 font-semibold text-sm">Solution:</span>
                    <p className="text-slate-400 text-sm mt-1">{story.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-green-400 font-semibold text-sm">Result:</span>
                    <p className="text-slate-400 text-sm mt-1">{story.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200">
              Ready to Join Our <span className="gradient-text">Success Stories</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Let's discuss how DataSeaTech can help you achieve similar results and transform your data infrastructure.
            </p>
            <Button 
              size="lg" 
              onClick={() => playSound('submit')}
              onMouseEnter={() => playSound('button_hover')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
            >
              Start Your Success Story
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;