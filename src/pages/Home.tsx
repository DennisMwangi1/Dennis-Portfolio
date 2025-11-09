import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  return (
    <PageTransition>
      <div className="max-h-screen relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #b026ff, transparent)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
          <div className="text-center">
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="text-[#00d4ff]" />
              <span className="text-sm text-white/90">Available for hire</span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-white/40">Hi, I'm</span>
              <motion.span
                className="block bg-gradient-to-r from-[#00d4ff] via-[#b026ff] to-[#00ff88] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Dennis Mwangi
              </motion.span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              className="max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-white/80 mb-4">
                Fullstack Software Engineer / Solutions Architect
              </h2>
              <p className="text-lg text-white/60">
                Dynamic Factory Lead and Solutions Architect with over three years of experience delivering innovative software solutions across diverse projects. Expertise in frontend and backend development, complemented by a strong foundation in cloud technologies and DevOps practices. Proven ability to establish operational frameworks that enhance efficiency and drive project success. Adept at leading technical direction while maintaining strong client relationships, ensuring impactful delivery and exceptional user experiences. Committed to leveraging technical acumen and collaborative spirit to excel in a Fullstack Software Engineer or Solutions Architect role.
              </p>
            </motion.div>

            {/* Location */}
            <motion.p
              className="text-[#00ff88] mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              📍 Nairobi, Kenya
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00d4ff]/90 hover:to-[#b026ff]/90 text-white border-0"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>

              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10"
                >
                  View My Work
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88]/10"
              >
                <a
                  href="/Dennis-Mwangi-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>


          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-[#00d4ff]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-3 h-3 rounded-full bg-[#00ff88]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
          }}
        />
      </div>
    </PageTransition>
  );
}
