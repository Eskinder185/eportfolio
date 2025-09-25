import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, ChevronDown } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { TypewriterEffect } from './TypewriterEffect';
import { StatCard } from './StatCard';

export function Hero() {
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-80 h-80 rounded-full bg-black" />
              </motion.div>
              
              <motion.img
                src="/Eskinder.png"
                alt="Eskinder Kassahun"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-black"
                onLoad={() => setAvatarLoaded(true)}
                initial={{ scale: 0 }}
                animate={{ scale: avatarLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                🛡️
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-cyan-400 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              👾 Welcome to My Tech Universe
            </motion.p>

            <div className="space-y-4">
              <GlitchText
                text="I'm Eskinder"
                className="text-4xl md:text-6xl font-bold"
              />
              
              <motion.h1
                className="text-2xl md:text-4xl font-bold text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                part <span className="text-cyan-400">cloud engineer</span>, 
                part <span className="text-purple-400">security geek</span>, 
                part <span className="text-pink-400">AI explorer</span>.
              </motion.h1>
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I design <span className="text-cyan-400 underline decoration-cyan-400/50">secure AWS pipelines</span>, 
              hack on <span className="text-purple-400 underline decoration-purple-400/50">generative & agent AI</span>,
              and turn bold ideas into working code. This is my{' '}
              <span className="font-bold text-white">player's hub</span> — pick a project and hit{' '}
              <em className="text-green-400">start</em>.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard
                label="Experience"
                value="3+"
                subtitle="Cloud • Security • AI — building, shipping, and learning."
                delay={1}
              />
              <StatCard
                label="Projects Shipped"
                value="25+"
                subtitle="Production demos, labs, and portfolio apps."
                delay={1.2}
              />
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/14iL1uNi4vp0GLu-Nkh6jc_7ICK8buyIr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} />
                  View My Resume
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Play size={20} />
                  View Projects
                </span>
              </motion.button>
            </motion.div>

            {/* Typewriter Effect */}
            <TypewriterEffect
              lines={[
                "Initializing…",
                "Provisioning VPC, subnets, and IAM…",
                "Deploying Lambdas…",
                "Securing endpoints…",
                "Load complete. Ready to explore!"
              ]}
              delay={2}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}
