import { motion } from 'motion/react';
import { Code2, Server, Users2, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-[#00d4ff] to-[#b026ff]',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-[#b026ff] to-[#00ff88]',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express', level: 92 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Sparkles,
      color: 'from-[#00ff88] to-[#00d4ff]',
      skills: [
        { name: 'AWS', level: 87 },
        { name: 'Azure', level: 82 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 83 },
        { name: 'Git', level: 95 },
        { name: 'Testing (Playwright/Vitest)', level: 88 },
      ],
    },
  ];

  const softSkills = [
    { name: 'Conflict Resolution', icon: '🤝' },
    { name: 'Agile Leadership', icon: '🎯' },
    { name: 'Culture-driven Collaboration', icon: '🌍' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Communication', icon: '💬' },
    { name: 'Team Mentoring', icon: '👥' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#b026ff] bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              Technical proficiencies and soft skills that drive my work
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills */}
          <div className="space-y-12 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Users2 className="text-[#00ff88]" size={32} />
                <h2>
                  <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                    Soft Skills
                  </span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group p-6 rounded-xl border border-white/10 bg-card hover:border-[#00ff88]/50 transition-all duration-300 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-white">{skill.name}</p>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    style={{
                      background: 'linear-gradient(135deg, #00ff8820, #00d4ff20)',
                      filter: 'blur(20px)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack Summary */}
          <motion.div
            className="mt-20 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#131318] to-[#0a0a0f]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-[#00d4ff] mb-6">
              Primary Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'PERN Stack',
                'MERN Stack',
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Express',
                'PostgreSQL',
                'MongoDB',
                'AWS',
                'Azure',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#b026ff]/10 border border-[#00d4ff]/30 text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
