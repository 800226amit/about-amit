"use client"

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Heart, Coffee, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const projects = [
    { name: 'National Portal of India', href: '#' },
    { name: 'E-Commerce Platform', href: 'https://github.com/amit80022/ecommerce-platform' },
    { name: 'Chat Application', href: 'https://github.com/amitkeen/chat-application' },
    { name: 'Analytics Dashboard', href: 'https://github.com/amit80022/analytics-dashboard' }
  ];

  const techStack = [
    'Next.js', 'React', 'Java Quarkus', 'Spring Boot', 'PostgreSQL', 'Docker'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* About Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  AMIT <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">KUMAR</span>
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Full Stack Developer passionate about building scalable web solutions 
                  and creating meaningful digital experiences. Currently working on 
                  the National Portal of India.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:amitraz133@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors group">
                  <div className="p-2 bg-amber-100/50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>amitraz133@gmail.com</span>
                </a>
                <a href="tel:8540840506" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors group">
                  <div className="p-2 bg-amber-100/50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>+91 8540840506</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span>Bihar, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://github.com/amitkeen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm border border-amber-200/30 rounded-lg text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all hover:scale-105">
                  <Github size={20} />
                </a>
                <a href="https://github.com/amit80022" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm border border-amber-200/30 rounded-lg text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all hover:scale-105">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/amitkumar" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm border border-amber-200/30 rounded-lg text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all hover:scale-105">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Code size={18} className="text-amber-600" />
                <span>Quick Links</span>
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="block text-gray-600 hover:text-amber-600 hover:translate-x-1 transition-all duration-200 group">
                    <span className="group-hover:border-b group-hover:border-amber-400">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Featured Projects */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <ExternalLink size={18} className="text-amber-600" />
                <span>Featured Work</span>
              </h4>
              <nav className="space-y-3">
                {projects.map((project) => (
                  <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-amber-600 hover:translate-x-1 transition-all duration-200 group">
                    <span className="group-hover:border-b group-hover:border-amber-400 text-sm">
                      {project.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-8 border-t border-amber-200/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-semibold">Built with:</span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-amber-200/30 rounded-full text-sm text-gray-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Scroll to top button */}
            <button 
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 group"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-amber-200/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-gray-600 text-sm text-center md:text-left">
              <p>&copy; 2024 Amit Kumar. All rights reserved.</p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee size={16} className="text-amber-600" />
              <span>in India</span>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="pb-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new challenges and bring innovative ideas to life. 
              Let&apos;s discuss how we can make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/contact'}>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-all hover:scale-105 hover:shadow-lg">
                Get In Touch
              </button>
            </Link>

            <Link href={'./projects'}>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all hover:scale-105">
                View My Work
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
    </footer>
  );
}