'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Calendar, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success'>(null)

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amitraz133@gmail.com',
      link: 'mailto:amitraz133@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Drop me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8540840506',
      link: 'tel:',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Call for urgent matters'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Industrial AreaSector 62, Noida, Uttar Pradesh',
      link: 'https://g.co/kgs/shVMxe3',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Available for local meetings'
    },
    {
      icon: Calendar,
      label: 'Schedule',
      value: 'Book a Call',
      link: 'https://calendly.com/amitraz133',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Schedule a 30-min chat'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/800226amit',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-100'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amit-kumar-7629941b7/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/amit',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50'
    },
    {
      icon: MessageSquare,
      name: 'Discord',
      url: 'https://discord.com/amit',
      color: 'hover:text-indigo-600',
      bgColor: 'hover:bg-indigo-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-orange-800 bg-clip-text text-transparent mb-6">
            Let&apos; s Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. Whether you have a question, 
            want to collaborate, or just want to say hi, I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-amber-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send me a message</h2>
              <p className="text-gray-600 mb-8">I typically respond within 24 hours</p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="name@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-amber-400 hover:to-orange-400 focus:ring-4 focus:ring-amber-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                          {item.label}
                        </h3>
                        <p className="text-gray-600 font-medium">{item.value}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Connect with me</h2>
              <p className="text-gray-600 mb-8">Follow my work and connect on social media</p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-transparent ${social.bgColor} transition-all duration-200 hover:scale-105 hover:shadow-md`}
                    >
                      <Icon className={`w-6 h-6 text-gray-600 ${social.color} transition-colors duration-200`} />
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {social.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-8 lg:p-10 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold">Currently Available</h3>
              </div>
              <p className="text-green-100 mb-4">
                I&apos;m open to freelance projects, full-time opportunities, and interesting collaborations.
              </p>
              <div className="flex items-center space-x-2 text-green-100">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Response time: Usually within 24 hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}