import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import React from 'react';
interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  logo?: string;
  projects?: {
    name: string;
    description?: string;
    logo?: string;
  }[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: Readonly<ExperienceTimelineProps>) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#b026ff] to-[#00ff88]" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 ' : 'md:pl-1/2 md:ml-auto'
            }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {/* Timeline dot */}
          <motion.div
            className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:-right-2' : 'left-0 md:-left-2'
              } md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00d4ff] border-4 border-[#0a0a0f] z-10`}
            whileHover={{ scale: 1.5 }}
            style={{
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            }}
          />

          {/* Content card */}
          <motion.div
            className="ml-8 md:ml-0 bg-card border border-white/10 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Company and Role */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Briefcase size={20} className="text-white" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-[#00d4ff]">{exp.company}</h3>
                <p className="text-white/90">{exp.role}</p>
              </div>
            </div>

            {/* Period and Location */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 text-white/70">
              {exp.responsibilities.map((resp, idx) => (
                <motion.li
                  key={`${exp.company}-resp-${idx}`}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-[#00ff88] mt-1">▹</span>
                  <span>{resp}</span>
                </motion.li>
              ))}
            </ul>

            {exp.projects?.length ? (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  Highlight project
                </p>
                <div className="space-y-3">
                  {exp.projects.map((project) => (
                    <div key={`${exp.company}-${project.name}`} className="flex items-start gap-3">
                      {project.logo ? (
                        <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                      <div>
                        <p className="text-sm font-medium text-white/90">{project.name}</p>
                        {project.description ? (
                          <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
