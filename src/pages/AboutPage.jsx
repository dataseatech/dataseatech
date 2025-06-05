
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import useSound from '@/hooks/useSound';

const AboutPage = () => {
  const playSound = useSound();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to deliver breakthrough solutions.',
      imageAlt: 'Lightbulb glowing with innovative ideas',
      imageKeywords: 'innovation lightbulb ideas animation'
    },
    {
      icon: Eye,
      title: 'Agility',
      description: 'Our flexible approach allows us to adapt quickly to changing requirements and market conditions.',
      imageAlt: 'Abstract representation of fast, agile movement',
      imageKeywords: 'agility fast movement animation'
    },
    {
      icon: Heart,
      title: 'Transparency',
      description: 'We believe in open communication and honest partnerships with our clients.',
      imageAlt: 'Clear glass layers representing transparency',
      imageKeywords: 'transparency clear layers animation'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'DataSeaTech was established with a vision to democratize data engineering.',
      imageAlt: 'Stylized "2020" with a small sapling growing, symbolizing new beginnings',
      imageKeywords: 'company founded 2020 sapling animation'
    },
    {
      year: '2021',
      title: 'First Enterprise Client',
      description: 'Secured our first Fortune 500 client and delivered a successful cloud migration.',
      imageAlt: 'Handshake icon with "Enterprise Client" text, year 2021',
      imageKeywords: 'enterprise client handshake 2021 animation'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 25+ engineers and expanded services to include AI/ML solutions.',
      imageAlt: 'Growing team icon with "25+ Engineers" text, year 2022',
      imageKeywords: 'team expansion 25 engineers 2022 animation'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Established partnerships across 3 continents and 8+ enterprise clients.',
      imageAlt: 'Globe icon with connecting lines, year 2023',
      imageKeywords: 'global reach globe connections 2023 animation'
    },
    {
      year: '2024',
      title: 'Platform Products',
      description: 'Launched our first platform products and expanded into cybersecurity.',
      imageAlt: 'Icon representing platform products and a shield for cybersecurity, year 2024',
      imageKeywords: 'platform products cybersecurity 2024 animation'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Expanding into AI-powered automation and next-gen data platforms.',
      imageAlt: 'Futuristic vision icon with AI and data platform symbols, year 2025',
      imageKeywords: 'future vision ai data platform 2025 animation'
    }
  ];

  const team = [
    {
      name: 'Anantha Vamshi Krishna',
      role: 'Founder & CEO',
      bio: 'Former Principal Engineer at Microsoft Azure. 15+ years in cloud architecture and data engineering.',
      imageAlt: 'Professional headshot of Anantha Vamshi Krishna',
      imageKeywords: 'Anantha Vamshi Krishna professional headshot'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      bio: 'Ex-Google Cloud architect. Expert in distributed systems and machine learning infrastructure.',
      imageAlt: 'Professional headshot of Sarah Rodriguez',
      imageKeywords: 'Sarah Rodriguez professional headshot'
    },
    {
      name: 'Michael Johnson',
      role: 'VP of Engineering',
      bio: 'Former Amazon Web Services senior engineer. Specialist in large-scale data processing.',
      imageAlt: 'Professional headshot of Michael Johnson',
      imageKeywords: 'Michael Johnson professional headshot'
    },
    {
      name: 'Emily Zhang',
      role: 'Head of AI/ML',
      bio: 'PhD in Machine Learning from Stanford. Previously led AI initiatives at Tesla.',
      imageAlt: 'Professional headshot of Emily Zhang',
      imageKeywords: 'Emily Zhang professional headshot'
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
              About <span className="gradient-text">DataSeaTech</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We're a global IT consulting startup on a mission to help enterprises 
              harness the power of their data and make intelligent decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
                Founder's <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-slate-400 mb-6">
                "In today's data-driven world, the ability to extract meaningful insights 
                from vast amounts of information is what separates industry leaders from 
                the rest. At DataSeaTech, we believe every organization deserves access 
                to world-class data engineering capabilities."
              </p>
              <p className="text-lg text-slate-400 mb-6">
                "Our mission is to democratize data engineering by providing cutting-edge 
                solutions that are both powerful and accessible. We're not just building 
                data pipelines; we're building the foundation for intelligent decision-making."
              </p>
              <div className="flex items-center space-x-4">
                 <img  class="w-16 h-16 rounded-full object-cover" alt="Anantha Vamshi Krishna, Founder & CEO" src="https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc" />
                <div>
                  <div className="text-slate-200 font-semibold">Anantha Vamshi Krishna</div>
                  <div className="text-slate-400">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img  class="w-full h-full object-cover rounded-xl" alt="Founder's vision - abstract data visualization" src="https://images.unsplash.com/photo-1548230445-ca4ebd9755a8" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl"></div>
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
              Mission & <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our core values guide everything we do, from client relationships to technical decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-8 text-center hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="h-24 w-full mb-6 relative">
                  <img  class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" alt={value.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From startup to global consulting firm - here's how we've grown and evolved.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-500 opacity-50"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start md:flex-row-reverse' : 'justify-end md:flex-row' 
                } flex-col md:flex-row`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mb-6 md:mb-0`}>
                  <div className="h-32 w-full rounded-lg overflow-hidden mb-4 bg-slate-800/50">
                     <img  class="w-full h-full object-contain p-4" alt={item.imageAlt} src="https://images.unsplash.com/photo-1534521021738-1b548b787b19" />
                  </div>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                  <div className="glass-effect rounded-xl p-6 inline-block">
                    <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full border-4 border-slate-900"></div>
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
              Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Meet the experienced leaders driving DataSeaTech's vision and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => playSound('card_hover')}
                className="glass-effect rounded-xl p-6 text-center hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400 p-1">
                   <img  class="w-full h-full object-cover rounded-full" alt={member.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-1">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-3">{member.role}</div>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50+', label: 'Team Members', imageAlt: 'Icon representing team members', imageKeywords: 'team members icon animation' },
              { icon: Award, number: '15+', label: 'Projects Delivered', imageAlt: 'Icon representing an award for projects', imageKeywords: 'projects delivered award icon animation' },
              { icon: TrendingUp, number: '40%', label: 'Average Cost Savings', imageAlt: 'Icon of a graph trending upwards for cost savings', imageKeywords: 'cost savings graph icon animation' },
              { icon: Target, number: '99.9%', label: 'Client Satisfaction', imageAlt: 'Icon of a target hit, representing client satisfaction', imageKeywords: 'client satisfaction target icon animation' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full opacity-30 blur-lg"></div>
                  <img  class="w-12 h-12 object-contain relative z-10" alt={stat.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
