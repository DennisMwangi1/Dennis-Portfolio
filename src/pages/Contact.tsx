import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully!', {
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'denniskamau1803@gmail.com',
      href: 'mailto:denniskamau1803@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available upon request',
      href: null,
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
                Get In Touch
              </span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              Have a project in mind or want to collaborate? Let's talk about how we can
              work together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <h2 className="text-[#00d4ff] mb-6">Let's Connect</h2>
                <p className="text-white/70 mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#b026ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-[#00d4ff] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <motion.div
                className="p-6 rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-[#00ff88] mb-2">Currently Available</h3>
                <p className="text-white/70">
                  I'm actively looking for new opportunities and exciting projects to work
                  on. Let's build something amazing together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-white/10 bg-card space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-white/20 text-white focus:border-[#00d4ff] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-white/20 text-white focus:border-[#00d4ff] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-white/20 text-white focus:border-[#00d4ff] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background border-white/20 text-white focus:border-[#00d4ff] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00d4ff]/90 hover:to-[#b026ff]/90 text-white border-0"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#131318] to-[#0a0a0f]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
                Ready to Start Your Project?
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let's turn your ideas into reality. Whether you need a full-stack application,
              cloud architecture, or technical consultation, I'm here to help.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] hover:from-[#00ff88]/90 hover:to-[#00d4ff]/90 text-white border-0"
            >
              Hire Me Now
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
