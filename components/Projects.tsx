import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Projects() {
  const projects = [
    {
      title: 'Astra Focus — Task Tracker',
      description: 'Productivity web app with clean UI for tasks, priorities, and progress. Fast, keyboard-friendly interactions.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      deployedOn: 'GitHub',
      liveUrl: 'https://eskinder185.github.io/AstraFocusNexus/',
      repoUrl: 'https://github.com/Eskinder185/AstraFocusNexus',
      color: 'from-cyan-500 to-blue-500',
      icon: '✅'
    },
    {
      title: 'Roadmap to Role — Career Toolkit',
      description: 'Interactive tools for resumes, interview prep, and portfolio links to accelerate job readiness.',
      technologies: ['TypeScript', 'HTML', 'CSS'],
      deployedOn: 'GitHub',
      liveUrl: 'https://eskinder185.github.io/professionaldev/',
      repoUrl: 'https://github.com/Eskinder185/professionaldev',
      color: 'from-purple-500 to-pink-500',
      icon: '🚀'
    },
    {
      title: 'CodeRush — Typing Practice',
      description: 'Typing site with challenges and speed tracking. Multiple levels of difficulty and VS Code like theme.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      deployedOn: 'GitHub',
      liveUrl: 'https://eskinder185.github.io/CodeRush/',
      repoUrl: 'https://github.com/Eskinder185/CodeRush',
      color: 'from-green-500 to-teal-500',
      icon: '⌨️'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, cloud computing, and user experience design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard
              key={project.title}
              className="group relative"
              strength={8}
            >
              <motion.div
                className="relative h-full p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  layoutId={`project-bg-${index}`}
                />

                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${project.color.includes('cyan') ? 'rgba(34,211,238,0.3)' : project.color.includes('purple') ? 'rgba(168,85,247,0.3)' : 'rgba(34,197,94,0.3)'} 0%, transparent 100%)`,
                    filter: 'blur(1px)'
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Project Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-black/50 border border-gray-600 rounded-full text-xs font-medium text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.2 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    
                    <motion.span
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} text-black rounded-full text-xs font-bold`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      {project.deployedOn}
                    </motion.span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} />
                      Live
                    </motion.a>
                    
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: '#22d3ee',
                        color: '#22d3ee'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          
          <motion.a
            href="https://github.com/Eskinder185"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 text-white font-bold rounded-lg hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
