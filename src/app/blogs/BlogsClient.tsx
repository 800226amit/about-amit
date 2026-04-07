"use client"

import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Zap, Book, Newspaper, FolderGit2, BookOpenText, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import projects from "./_blogs/learning-journey/Data";

export default function BlogsClient() {
    const [activeFilter, setActiveFilter] = useState('article');

    const filters = [


        // { id: 'all', label: 'All Projects', icon: Globe },
        { id: 'article', label: 'Tech Articles', icon: Newspaper },
        { id: 'projects', label: 'Projects', icon: FolderGit2 },
        { id: 'journey', label: 'Learning Journey', icon: BookOpenText },
        { id: 'experience', label: 'Work & Experience', icon: Briefcase }
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

            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-amber-100/50 rounded-full px-4 py-2 text-sm text-amber-700 mb-4">
                        <Book size={16} />
                        <span>Thoughts & Learnings</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Tech <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Insights</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A space where I share my learnings, ideas, and experiences across software development, technology, and the journey of building better software.          </p>
                </div>


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


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
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


                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>


                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.liveUrl !== '#' && (
                                        <Link
                                            href={project.liveUrl}
                                            className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                                        >
                                            <ExternalLink size={16} className="text-gray-700" />
                                        </Link>
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

                                <div className="flex space-x-3">
                                    {project.liveUrl !== '#' && (
                                        <Link
                                            href={project.liveUrl}
                                            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all font-semibold text-sm"
                                        >
                                            View Live
                                        </Link>
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

            </div>
        </section>
    );
}
