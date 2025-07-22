"use client"

import React, { useState } from 'react';
import { User, Award, Target, Clock, BookOpen, Coffee, Heart, Code2, Lightbulb, Zap, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');
  
  const experiences = [
    {
      role: "Software Developer",
      company: "National Portal of India",
      period: "Jan 2024 - Present",
      type: "Full-time",
      description: "Leading development of India's national digital portal using Next.js and Java Quarkus",
      achievements: [
        "Built scalable microservices architecture serving 10M+ users",
        "Implemented real-time data processing with Apache Kafka",
        "Optimized search functionality using Elasticsearch",
        "Collaborated with cross-functional teams of 5+ developers"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Fostering Linux",
      period: "Apr 2023 - Dec 2023",
      type: "Internship",
      description: "Developed project management solutions using Redmine and Linux technologies",
      achievements: [
        "Reduced project completion time by 40% through workflow optimization",
        "Implemented automated task dependency management",
        "Built custom notification systems for team collaboration",
        "Created performance analytics dashboard"
      ]
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: ["Next.js", "React", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
      proficiency: 90
    },
    {
      category: "Backend Development",
      icon: Target,
      skills: ["Java Quarkus", "Spring Boot", "Apache Kafka", "Apache Camel", "RESTful APIs"],
      proficiency: 85
    },
    {
      category: "Database & Search",
      icon: BookOpen,
      skills: ["PostgreSQL", "Elasticsearch", "MongoDB", "Redis", "MySQL"],
      proficiency: 80
    },
    {
      category: "DevOps & Tools",
      icon: Zap,
      skills: ["Docker", "Podman", "Linux", "Git", "Shell Scripting", "AWS"],
      proficiency: 75
    }
  ];

  const personalValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and finding creative solutions to complex problems."
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Passionate about creating meaningful experiences that make a real difference in people's lives."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Committed to staying updated with the latest trends and best practices in web development."
    },
    {
      icon: CheckCircle,
      title: "Quality Focus",
      description: "Believe in writing clean, maintainable code and delivering robust, scalable solutions."
    }
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'skills', label: 'Skills', icon: Target }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100/50 rounded-full px-4 py-2 text-sm text-amber-700 mb-4">
            <User size={16} />
            <span>Get to know me</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with a mission to build impactful digital solutions 
            that make a difference in people&apos;s lives.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200 hover:border-amber-200'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* My Story Tab */}
          {activeTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Hi! I&apos;m Amit Kumar, a passionate full-stack developer from Odisha, India. 
                      My journey in tech began with curiosity about how websites work, which led me 
                      to dive deep into the world of web development.
                    </p>
                    <p>
                      Currently, I&apos;m working on the National Portal of India, where I get to build 
                      solutions that directly impact millions of citizens. This role has taught me 
                      the importance of scalable architecture and user-centered design.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                      open-source projects, or sharing knowledge with the developer community. I believe 
                      in continuous learning and pushing the boundaries of what&apos;s possible with code.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200/30 shadow-lg p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">2+</div>
                    <div className="text-sm text-gray-600">Years Coding</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200/30 shadow-lg p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">10M+</div>
                    <div className="text-sm text-gray-600">Users Served</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Drives Me</h3>
                {personalValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200/30 shadow-lg p-6 hover:shadow-xl transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-amber-100 rounded-lg">
                          <Icon className="text-amber-600" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span className="font-semibold text-amber-600">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8 hover:shadow-xl transition-all">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Icon className="text-amber-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <span className="text-sm font-semibold text-amber-600">{skillGroup.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skillGroup.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects. 
              Whether it&apos;s a startup idea or an enterprise solution, let&apos;s make it happen!
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all font-semibold hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105">
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}