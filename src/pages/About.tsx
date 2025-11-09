import { motion } from 'motion/react';
import { Code2, Layers, Zap, Trophy, Users, Gamepad2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { React } from 'react';
//@ts-ignore
import Dennis from '../assets/Dennis.jpg';
export function About() {
  const expertise = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'React, TypeScript, JavaScript, Node.js, Express' },
    { icon: Layers, title: 'PERN/MERN Stack', desc: 'PostgreSQL, MongoDB, Express, React, Node.js' },
    { icon: Zap, title: 'Cloud Technologies', desc: 'AWS, Azure, Scalable Infrastructure' },
  ];

  const hobbies = [
    { icon: Trophy, name: 'Basketball' },
    { icon: Users, name: 'Events' },
    { icon: Gamepad2, name: 'Playstation' },
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
                About Me
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Avatar and bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative mb-8 max-w-md mx-auto">
                <motion.div
                  className="aspect-square rounded-2xl overflow-hidden border-2 border-[#00d4ff]/30 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <ImageWithFallback
                    src={Dennis}
                    alt="Dennis Mwangi Avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #b026ff)',
                    filter: 'blur(30px)',
                    opacity: 0.3,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <h2 className="text-[#00d4ff] mb-4">Who I Am</h2>
                <p className="text-white/80 leading-relaxed">
                  Dynamic Factory Lead and Solutions Architect with over three years of experience delivering innovative software solutions across diverse projects. Expertise in frontend and backend development, complemented by a strong foundation in cloud technologies and DevOps practices. Proven ability to establish operational frameworks that enhance efficiency and drive project success. Adept at leading technical direction while maintaining strong client relationships, ensuring impactful delivery and exceptional user experiences. Committed to leveraging technical acumen and collaborative spirit to excel in a Fullstack Software Engineer or Solutions Architect role.
                </p>
              </div>

              <div>
                <p className="text-white/80 leading-relaxed">
                  Experienced in creating seamless user interfaces, implementing testing
                  frameworks, and managing cloud infrastructure. Adept at collaborating with
                  global teams, solving complex problems, and continuously improving both
                  technical and soft skills.
                </p>
              </div>

              <div>
                <p className="text-white/80 leading-relaxed">
                  Able to work independently from remote locations or in-office as needed.
                </p>
              </div>

              <motion.div
                className="p-6 rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-[#00ff88] mb-2">My Motivation</h3>
                <p className="text-white/80 italic">
                  "I love building scalable solutions and realizing dreams of digitizing
                  companies."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Expertise */}
          <div className="mb-20">
            <motion.h2
              className="text-center text-[#00d4ff] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative p-8 rounded-xl border border-white/10 bg-card hover:border-[#00d4ff]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#b026ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="mb-2 text-white">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff20, #b026ff20)',
                      filter: 'blur(20px)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <motion.h2
              className="text-center text-[#00ff88] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              When I'm Not Coding
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/20 bg-card hover:border-[#00ff88]/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <hobby.icon size={24} className="text-[#00ff88]" />
                  <span className="text-white">{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
