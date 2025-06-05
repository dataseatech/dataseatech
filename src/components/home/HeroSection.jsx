import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useSound from '@/hooks/useSound';

const HeroSection = () => {
  const playSound = useSound();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            <Button 
              size="lg" 
              onClick={() => playSound('submit')}
              onMouseEnter={() => playSound('button_hover')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 opacity-20 floating"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img  alt="Abstract floating orb 1" class="w-full h-full object-contain" src="https://images.unsplash.com/photo-1692091090127-c2e3334bf318" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 opacity-20 floating"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <img  alt="Abstract floating orb 2" class="w-full h-full object-contain" src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
