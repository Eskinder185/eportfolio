import { motion } from 'framer-motion';
import { Code, Cpu, MapPin, User } from 'lucide-react';

export function About() {
  const chips = [
    { label: 'AWS', icon: '☁️' },
    { label: 'Serverless', icon: '⚡' },
    { label: 'Security', icon: '🛡️' },
    { label: 'Agents', icon: '🤖' },
    { label: 'TypeScript', icon: '📘' },
    { label: 'Python', icon: '🐍' },
  ];

  const aboutItems = [
    { icon: MapPin, label: 'Location', value: 'Atlanta, GA' },
    { icon: Code, label: 'Focus', value: 'Cloud • DevOps • Security • AI' },
    { icon: Cpu, label: 'Now', value: 'Building demos & improving IaC skills' },
    { icon: User, label: 'Interests', value: 'Cloud security, cloud deployment' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>

              <motion.div
                className="space-y-6 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p>
                  I'm a technologist focused on <span className="text-cyan-400 font-semibold">cloud computing</span>, 
                  <span className="text-purple-400 font-semibold"> security</span>, and 
                  <span className="text-pink-400 font-semibold"> AI</span>. I build AWS solutions that scale,
                  stay secure, and keep costs in check. I like automation, clean configs, and readable code.
                </p>
                
                <p>
                  Recently I've been experimenting with <span className="text-green-400 font-semibold">OpenAI</span> prompts 
                  & agents, exploring how cloud + security + AI combine to create smarter, safer systems.
                </p>
              </motion.div>

              {/* Tech Stack Chips */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {chips.map((chip, index) => (
                  <motion.span
                    key={chip.label}
                    className="group px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                    }}
                  >
                    <span className="mr-2">{chip.icon}</span>
                    {chip.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 transition-all duration-300">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    'linear-gradient(0deg, rgba(34,211,238,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    'linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    'linear-gradient(180deg, rgba(34,211,238,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    'linear-gradient(270deg, rgba(34,211,238,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    'linear-gradient(0deg, rgba(34,211,238,0.1) 0%, rgba(168,85,247,0.1) 100%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-6">
                {aboutItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4 group/item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover/item:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon size={20} className="text-cyan-400" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-400 font-medium">{item.label}:</div>
                      <div className="text-white font-medium break-words">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
