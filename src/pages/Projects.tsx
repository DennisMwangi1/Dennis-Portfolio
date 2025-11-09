import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ProjectCard } from '../components/ProjectCard';
import React from 'react';

const VarsitySokoImage = new URL('../assets/VaristySoko-home.png', import.meta.url)
  .href;
const KUERImage = new URL('../assets/KUER-home.png', import.meta.url).href;
const ZappicImage = new URL('../assets/zappic-home.png', import.meta.url).href;
const KaboriImage = new URL('../assets/kabori-home.png', import.meta.url).href;
const HLCCImage = new URL('../assets/HLCC-home.png', import.meta.url).href;
const NexusImage = new URL('../assets/nexus-home.png', import.meta.url).href;
export function Projects() {
  const projects = [
    {
      title: 'VarsitySoko',
      description:
        'A student-focused online marketplace enabling university students in Kenya to buy, sell, and trade products and services within their campuses. Emphasis on security, user experience, and community commerce.',
      techStack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
      image: VarsitySokoImage,
      liveUrl: 'https://varsitysoko.co.ke/',
      codeUrl: '#',
    },
    {
      title: 'Kenya Universities Esports Ranking',
      description:
        'Built esports ranking site for Kenyan universities. Integrated scalable backend and optimized for performance with real-time updates and competitive leaderboards.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: KUERImage,
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Zappic SDK',
      description:
        'Software Development Kit built for Zappic.co, a product of SnapasLabs, providing developers tools to integrate Zappic functionality into their applications.',
      techStack: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs'],
      image: ZappicImage,
      liveUrl: 'https://zappic.co/',
      codeUrl: '#',
    },
    {
      title: 'Kabori BaaS Platform',
      description:
        'Contributed to the development of Kabori, a Backend-as-a-Service (BaaS) platform for scalable and secure application backends.',
      techStack: ['Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL'],
      image: KaboriImage,
      liveUrl: 'https://kabori.de/',
      codeUrl: '#',
    },
    {
      title: 'HLCC Platform',
      description:
        'Developed the digital platform for HLCC Africa, supporting leadership development, culture transformation, and organizational consulting services across Africa.',
      techStack: ['React', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS'],
      image: HLCCImage,
      liveUrl: 'https://www.hlcc.africa/',
      codeUrl: '#',
    },
    {
      title: 'Nexus Data & Design',
      description:
        'Software consulting and digitization projects across multiple industries. Led architecture, development, and implementation of custom solutions.',
      techStack: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Supabase'],
      image: NexusImage,
      liveUrl: 'https://nexus-omega-liart.vercel.app/',
      codeUrl: '#',
    }
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
                Featured Projects
              </span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              A showcase of my recent work building scalable, user-focused applications
              across various domains.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          {/* Additional CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ff88] transition-colors"
            >
              <span>Visit my GitHub</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
