'use client'

import React from 'react'
import { useState } from 'react';
import { User, Award, Target, Clock, BookOpen, Coffee, Heart, Code2, Lightbulb, Zap, CheckCircle, Book } from 'lucide-react';


export default function page() {
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
                        <Book size={16} />
                        <span>Thoughts & Learnings</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Tech <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Insights</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A space where I share my learnings, ideas, and experiences across software development, technology, and the journey of building better software.          </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
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




            </div>
        </section>
    )
}
