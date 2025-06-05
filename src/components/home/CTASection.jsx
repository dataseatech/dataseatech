import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useSound from '@/hooks/useSound';

const CTASection = () => {
  const playSound = useSound();

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
};

export default CTASection;
