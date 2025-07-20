

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react'



export default function Footer() {

    return (

        <div className="bg-white dark:bg-gray-900">
            <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CTA Section */}
                    <div className="py-16 text-center border-b border-slate-700/50">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Boost your productivity. Start using our app today.
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
                            </p>
                            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                                <span className="relative z-10">Get started</span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                            {/* Solutions */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-blue-400 mb-6">Solutions</h3>
                                <nav className="space-y-3">
                                    {['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'].map((item) => (
                                        <Link key={item} href="#" className="block text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                                            <span className="group-hover:border-b group-hover:border-blue-400">{item}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Support */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-purple-400 mb-6">Support</h3>
                                <nav className="space-y-3">
                                    {['Submit ticket', 'Documentation', 'Guides'].map((item) => (
                                        <Link key={item} href="#" className="block text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                                            <span className="group-hover:border-b group-hover:border-purple-400">{item}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Company */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-green-400 mb-6">Company</h3>
                                <nav className="space-y-3">
                                    {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                                        <Link key={item} href="#" className="block text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                                            <span className="group-hover:border-b group-hover:border-green-400">{item}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Legal */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-orange-400 mb-6">Legal</h3>
                                <nav className="space-y-3">
                                    {['Terms of service', 'Privacy policy', 'License'].map((item) => (
                                        <Link key={item} href="#" className="block text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 group">
                                            <span className="group-hover:border-b group-hover:border-orange-400">{item}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="py-8 border-t border-slate-700/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                            {/* Social Media */}
                            <div className="flex space-x-6">
                                {[
                                    { Icon: Facebook, color: 'hover:text-blue-400' },
                                    { Icon: Instagram, color: 'hover:text-pink-400' },
                                    { Icon: Twitter, color: 'hover:text-sky-400' },
                                    { Icon: Github, color: 'hover:text-gray-300' },
                                    { Icon: Youtube, color: 'hover:text-red-400' }
                                ].map(({ Icon, color }, index) => (
                                    <Link key={index} href="#" className={`text-slate-400 ${color} transition-all duration-200 hover:scale-110 hover:-translate-y-1`}>
                                        <Icon size={24} />
                                    </Link>
                                ))}
                            </div>

                            {/* Copyright */}
                            <div className="text-slate-400 text-sm text-center md:text-right">
                                <p>&copy; 2024 JWCTC, Inc. All rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            </footer>
        </div>

    );
}