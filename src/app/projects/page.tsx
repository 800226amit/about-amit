"use client"

import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Code, Server, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
//import { features } from 'process';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "National Portal of India",
      category: "fullstack",
      type: "Professional Project",
      description: "A comprehensive government portal built with Next.js and Java Quarkus, serving millions of citizens with digital services and information.",
      longDescription: "Leading the development of India's national digital portal, focusing on scalable architecture and user-centered design. Implemented responsive UIs and robust backend systems to handle high traffic loads.",
      technologies: ["Next.js", "Java Quarkus", "PostgreSQL", "Elasticsearch", "Apache Kafka", "Docker"],
      features: [
        "Responsive UI for all devices",
        "Real-time data processing with Kafka",
        "Advanced search with Elasticsearch",
        "Scalable microservices architecture",
        "High availability and performance"
      ],
      image: "/nationalportal.png",
      liveUrl: "https://www.india.gov.in/",
      githubUrl: "#",
      status: "In Development",
      duration: "Jan 2024 - Present",
      team: "5 developers",
      impact: "Serving 10M+ users"
    },
    {
      id: 2,
      title: "Project Management System",

      category: "backend",
      type: "Internship Project",
      description: "Developed a Redmine-based project management solution that reduced project completion time by 40% through optimized workflows.",
      longDescription: "Built during my internship at Fostering Linux, this system revolutionized project tracking and team collaboration through automated notifications and task dependencies.",
      technologies: ["Redmine", "Linux", "Shell Scripting", "MySQL", "Apache"],
      features: [
        "Automated task dependencies",
        "Integrated notifications system",
        "Custom workflow optimization",
        "Team collaboration tools",
        "Performance analytics dashboard"
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      duration: "Apr 2023 - Dec 2023",
      team: "3 developers",
      impact: "40% faster delivery"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "fullstack",
      type: "Personal Project",
      description: "A modern e-commerce solution built with React and Spring Boot, featuring real-time inventory management and secure payment integration.",
      longDescription: "Complete e-commerce platform with advanced features like real-time inventory tracking, secure payment processing, and comprehensive admin dashboard.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Stripe API", "AWS"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "User authentication & authorization",
        "Mobile-responsive design"
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/amit80022/ecommerce-platform",
      status: "Completed",
      duration: "6 months",
      team: "Solo project",
      impact: "Learning project"
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      category: "frontend",
      type: "Personal Project",
      description: "Built a real-time messaging application with React and Socket.io, supporting group chats, file sharing, and message encryption.",
      longDescription: "Feature-rich chat application with modern UI/UX, supporting multiple chat rooms, file sharing, emoji reactions, and end-to-end message encryption.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Cloudinary"],
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "File and image sharing",
        "Message encryption",
        "Emoji reactions and typing indicators"
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/amitkeen/chat-application",
      status: "Completed",
      duration: "3 months",
      team: "Solo project",
      impact: "200+ users"
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      category: "backend",
      type: "Personal Project",
      description: "Created a comprehensive analytics dashboard using Java Spring Boot and Elasticsearch for processing and visualizing large datasets.",
      longDescription: "Advanced data processing and visualization platform capable of handling large datasets with real-time analytics and interactive charts.",
      technologies: ["Java", "Spring Boot", "Elasticsearch", "Kibana", "PostgreSQL", "Apache Kafka"],
      features: [
        "Real-time data processing",
        "Interactive charts and graphs",
        "Custom dashboard creation",
        "Data export functionality",
        "Role-based access control"
      ],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "https://github.com/amit80022/analytics-dashboard",
      status: "Completed",
      duration: "4 months",
      team: "Solo project",
      impact: "Processing 1M+ records"
    },
    /*
    {
      id: 6,
      title: "National Portal of India APP",
      category: "Mobile APP",
      type: "Professional Project",
      description: "Coming soon",
      longDescription: "Coming soon",
      technologies: "React Native",
      features: [],
      image: "",
      liveUrl: "",
      githubUrl: "",
      status: "",
      duration: "",
      team: "",
      impact: ""


    }
    */
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Zap },
    { id: 'backend', label: 'Backend', icon: Server }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100/50 rounded-full px-4 py-2 text-sm text-amber-700 mb-4">
            <Code size={16} />
            <span>Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development,
            from government portals to personal innovations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200 hover:border-amber-200'
                  }`}
              >
                <Icon size={18} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-amber-600/30">
                    {project.title.split(' ').map(word => word[0]).join('')}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap size={14} />
                    <span>{project.impact}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all font-semibold text-sm"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-amber-200 text-amber-700 text-center py-2 rounded-lg hover:bg-amber-50 transition-all font-semibold text-sm"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to discussing new opportunities and exciting projects.
              Let&apos;s create something amazing together!
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all font-semibold hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
