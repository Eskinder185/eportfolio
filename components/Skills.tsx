import { motion } from 'framer-motion';
import { Cloud, Code, Shield } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Serverless', level: 85 },
        { name: 'Terraform', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 }
      ]
    },
    {
      title: 'Security & AI',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10',
      skills: [
        { name: 'IAM', level: 85 },
        { name: 'RBAC', level: 80 },
        { name: 'OpenAI', level: 75 },
        { name: 'RAG', level: 70 },
        { name: 'Agents', level: 75 },
        { name: 'Pentesting', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities across cloud computing, development, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard
              key={category.title}
              className="group relative"
              strength={6}
            >
              <motion.div
                className="relative h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}
                  layoutId={`skill-bg-${categoryIndex}`}
                />

                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    boxShadow: [
                      '0 0 0 1px rgba(34, 211, 238, 0)',
                      '0 0 20px 1px rgba(34, 211, 238, 0.3)',
                      '0 0 0 1px rgba(34, 211, 238, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon size={24} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-400 group-hover/skill:text-cyan-400 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              type: 'spring',
                              stiffness: 100
                            }}
                          />
                          
                          {/* Animated glow effect */}
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover/skill:opacity-50 blur-sm`}
                            style={{ width: `${skill.level}%` }}
                            animate={{
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating icon */}
                <motion.div
                  className="absolute top-4 right-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: categoryIndex * 0.5 }}
                >
                  {categoryIndex === 0 ? '☁️' : categoryIndex === 1 ? '💻' : '🔒'}
                </motion.div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Skill highlights */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'AWS Certified', value: 'Solutions Architect', icon: '🏆' },
              { label: 'Security+', value: 'CompTIA Certified', icon: '🛡️' },
              { label: 'Active Learning', value: 'Always Improving', icon: '📚' }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.label}
                className="p-4 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-700 rounded-xl text-center hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl mb-2">{highlight.icon}</div>
                <div className="text-sm text-gray-400">{highlight.label}</div>
                <div className="font-bold text-cyan-400">{highlight.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
