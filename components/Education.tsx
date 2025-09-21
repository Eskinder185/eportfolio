import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Education() {
  const educationItems = [
    {
      title: "Southern New Hampshire University (SNHU)",
      badge: "Completed Aug 2025",
      description: "B.S. in Computer Science — focus on Cloud, Security, and Software Engineering.",
      details: [
        "Capstone artifacts: Secure Task Manager, ML-based IDS, Encrypted Auth System",
        "Core tech: Java, Python, JS/TS, AWS, Linux, Git"
      ],
      chips: ["Bachelor's", "Computer Science", "Cloud • Security"],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Springboard — Software Engineering Bootcamp",
      badge: "Completed May 2025",
      description: "450+ hours, MERN stack, CI/CD, and real-world projects.",
      details: [
        "Projects: Trivia Clash, Neon Meme Machine, Hive Social App",
        "Stack: React, Node.js, Express, REST APIs"
      ],
      chips: ["JavaScript", "React", "Node.js"],
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AWS re/Start (Per Scholas)",
      badge: "Completed Sep 2025",
      description: "Hands-on AWS labs and career prep: VPC, EC2, IAM, CloudFormation.",
      details: [
        "Built: VPC + EC2 stack, Lambda pipelines, RDS migration lab",
        "Focus: Cloud foundations, Linux, Networking"
      ],
      chips: ["AWS", "Cloud", "Linux"],
      icon: Trophy,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Certifications",
      badge: "Active",
      description: "",
      details: [
        "AWS Solutions Architect – Associate (SAA-C03)",
        "CompTIA Security+ (SY0-701)"
      ],
      chips: ["Architecture", "Security", "Best Practices"],
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
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
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational journey and professional certifications in cloud computing, software engineering, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <TiltCard
              key={item.title}
              className="group relative"
              strength={6}
            >
              <motion.div
                className="relative h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  layoutId={`edu-bg-${index}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <motion.span
                      className={`px-3 py-1 bg-gradient-to-r ${item.color} text-black rounded-full text-xs font-bold whitespace-nowrap`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {item.badge}
                    </motion.span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {item.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        className="text-gray-400 text-sm flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 + detailIndex * 0.05 }}
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {item.chips.map((chip, chipIndex) => (
                      <motion.span
                        key={chip}
                        className="px-3 py-1 bg-black/50 border border-gray-600 rounded-full text-xs font-medium text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 + chipIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {chip}
                      </motion.span>
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
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {index === 0 ? '🎓' : index === 1 ? '💻' : index === 2 ? '☁️' : '🏆'}
                </motion.div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
