import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Badge } from '../components/ui/badge';

export function Blog() {
  const blogPosts = [
    {
      title: 'Building Scalable Applications with PERN Stack',
      excerpt:
        'Learn how to architect and build production-ready applications using PostgreSQL, Express, React, and Node.js.',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1665360786531-28f152b73086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'Cloud Architecture Best Practices',
      excerpt:
        'Explore essential patterns and practices for designing resilient cloud infrastructure on AWS and Azure.',
      date: '2025-01-08',
      readTime: '10 min read',
      tags: ['AWS', 'Cloud', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'TypeScript Tips for Better Code Quality',
      excerpt:
        'Discover advanced TypeScript techniques that will help you write more maintainable and type-safe code.',
      date: '2024-12-20',
      readTime: '6 min read',
      tags: ['TypeScript', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1665360786531-28f152b73086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
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
                Blog & Insights
              </span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              Sharing thoughts on software development, architecture, and technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            className="mb-12 p-8 rounded-2xl border border-[#00ff88]/30 bg-[#00ff88]/5 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[#00ff88] mb-2">Coming Soon!</h2>
            <p className="text-white/70">
              I'm currently working on bringing you valuable content. Stay tuned for
              articles on full-stack development, cloud architecture, and more.
            </p>
          </motion.div>

          {/* Blog Posts Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="group bg-card rounded-xl overflow-hidden border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#b026ff]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/40 text-sm">Preview Image</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#131318] to-transparent opacity-60"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-[#00d4ff]/30 text-[#00d4ff]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <motion.button
                    className="flex items-center gap-2 text-sm text-[#00d4ff] hover:text-[#00ff88] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </motion.button>
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
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-20 p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#131318] to-[#0a0a0f] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#b026ff] bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Subscribe to get notified when new articles are published. No spam, just
              quality content about software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#b026ff] text-white hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
