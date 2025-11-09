import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveUrl,
  codeUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131318] to-transparent opacity-60" />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #00d4ff20, #b026ff20)',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 group-hover:text-[#00d4ff] transition-colors">
          {title}
        </h3>
        <p className="text-white/70 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-[#00d4ff]/30 text-[#00d4ff]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={16} />
              View Live
            </motion.a>
          )}
          {codeUrl && (
            <motion.a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00ff88] transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github size={16} />
              View Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20"
        style={{
          background: 'linear-gradient(225deg, #00d4ff, transparent)',
          opacity: 0,
        }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
