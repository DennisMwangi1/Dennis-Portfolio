import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import React from 'react';

const dqLogo = new URL('../assets/DQ.png', import.meta.url).href;
const kuerLogo = new URL('../assets/KUER.jpeg', import.meta.url).href;
const megatheriumLogo = new URL('../assets/Megatherium.png', import.meta.url).href;
const kytabuLogo = new URL('../assets/Kytabu.png', import.meta.url).href;
const kaboriLogo = new URL('../assets/Kabori.png', import.meta.url).href;

export function Work() {
  const experiences = [
    {
      company: 'DigitalQatalyst',
      logo: dqLogo,
      role: 'Factory Lead | Solutions Architect',
      period: '04/2024 – Present',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Accountable for end-to-end delivery governance across the Solutions Factory',
        'Established operational frameworks for planning, resourcing, and efficiency',
        'Leading as Solutions Architect / Dev Lead on Khalifa Fund project',
        'Delivered critical demos for leadership stakeholders',
      ],
    },
    {
      company: 'Kenya Universities Esports Ranking',
      logo: kuerLogo,
      role: 'Software Developer (Freelance)',
      period: '10/2024 – 04/2025',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Built esports ranking site for Kenyan universities',
        'Integrated scalable backend infrastructure',
        'Optimized for performance and real-time updates',
      ],
    },
    {
      company: 'Megatherium',
      logo: megatheriumLogo,
      role: 'Frontend Developer',
      period: '01/2023 – 12/2024',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Built UI components for internal project improving UX and performance',
        'Implemented Playwright/Vitest testing for a German client',
        'Developed AWS S3 upload/download modules with resume support',
        'Led frontend efforts for Kabori SaaS platform rollout',
      ],
      projects: [
        {
          name: 'Kabori',
          description: 'B2B SaaS platform built at Megatherium to streamline enterprise supply chains',
          logo: kaboriLogo,
        },
      ],
    },
    {
      company: 'Kytabu',
      logo: kytabuLogo,
      role: 'Data Entry Associate',
      period: '12/2019 – 04/2020',
      location: 'Nairobi, Kenya',
      responsibilities: [
        'Streamlined and verified educational content for Kenyan students',
        'Maintained high accuracy in data processing',
        'Collaborated with content team for quality assurance',
      ],
    },
  ];

  const education = [
    {
      institution: 'Rongo University',
      degree: 'BSc in Informatics',
      period: '11/2020 – 12/2024',
    },
    {
      institution: 'Moringa School',
      degree: 'Software Engineering Certificate',
      period: '04/2022 – 11/2022',
    },
    {
      institution: 'Zalego Institute of Technology',
      degree: 'Standard Level Software Development Certificate',
      period: '12/2019 – 04/2020',
    },
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
                Work Experience
              </span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              My professional journey in software development and solutions architecture
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <ExperienceTimeline experiences={experiences} />
          </div>

          {/* Education Section */}
          <div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">
                <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="p-6 rounded-xl border border-white/10 bg-card hover:border-[#00ff88]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center mb-4">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-white mb-2">{edu.institution}</h3>
                  <p className="text-[#00ff88] mb-2">{edu.degree}</p>
                  <p className="text-sm text-white/60">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
