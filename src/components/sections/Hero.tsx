"use client"
import React, { useState, useEffect } from 'react';
import {  Code, Database, Server, ExternalLink,  ChevronDown, Star } from 'lucide-react';

export default function HeroSection() {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const technologies = [
    'Next.js',
    'React',
    'Java Quarkus',
    'Spring Boot',
    'PostgreSQL',
    'Elasticsearch',
    'Apache Kafka',
    'Docker'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Left Content */}
          <div className={`lg:w-3/5 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-100/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-amber-700 border border-amber-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">AMIT</span>
                <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  KUMAR
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-gray-700 space-y-2">
                <p className="font-semibold">Full Stack Developer</p>
                <div className="flex items-center space-x-2">
                  <span>Specializing in</span>
                  <span className="text-amber-600 font-bold min-w-[120px] inline-block">
                    {technologies[currentTech]}
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Innovative and detail-oriented developer with expertise in modern web technologies. 
                Currently building scalable solutions for the National Portal of India, focusing on 
                user-centered design and impactful experiences.
              </p>

              {/* Achievement Stats */}
              <div className="flex flex-wrap gap-8 py-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">40%</div>
                  <div className="text-sm text-gray-600">Efficiency Improved</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            {/* <div className="flex flex-wrap gap-6 text-gray-700">
              <a href="tel:8540840506" className="flex items-center space-x-2 hover:text-amber-600 transition-colors group">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+91 8540840506</span>
              </a>
              <a href="mailto:amitraz133@gmail.com" className="flex items-center space-x-2 hover:text-amber-600 transition-colors group">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <Mail size={16} />
                </div>
                <span>amitraz133@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <MapPin size={16} />
                </div>
                <span>Odisha, India</span>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-amber-400 hover:to-orange-400 hover:shadow-lg hover:shadow-amber-500/25 transition-all transform hover:scale-105 flex items-center space-x-2 font-semibold">
                <span>Get in Touch</span>
               <a href="./contact"><ExternalLink size={16} /></a> 
              </button>
              {/* <button className="border-2 border-amber-200 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-all flex items-center space-x-2 font-semibold">
                <Download size={16} />
                <span>Download CV</span>
              </button> */}
            </div>

            {/* GitHub Links */}
            {/* <div className="flex items-center space-x-6">
              <a href="https://github.com/amitkeen" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                  <Github size={20} />
                </div>
                <span>amitkeen</span>
              </a>
              <a href="https://github.com/amit80022" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                  <Github size={20} />
                </div>
                <span>amit80022</span>
              </a>
            </div> */}
          </div>

          {/* Right Content - Tech Stack Cards */}
          <div className={`lg:w-2/5 mt-12 lg:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="grid grid-cols-1 gap-6">
              
              {/* Current Work Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                    <Star className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Current Role</h3>
                    <p className="text-sm text-gray-600">National Portal of India</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Building scalable web solutions with Next.js and Java Quarkus for government digital services.
                </p>
              </div>

              {/* Frontend Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Code className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'JavaScript', 'HTML/CSS', 'Bootstrap'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Server className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java Quarkus', 'Spring Boot', 'Apache Kafka', 'Apache Camel'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & Tools Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Database className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Database & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Elasticsearch', 'Docker', 'Podman', 'Linux'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-600/60 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
  );
}