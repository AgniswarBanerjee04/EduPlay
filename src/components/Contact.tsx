import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a 
                      href="mailto:agniwork99@gmail.com" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      agniwork99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a 
                      href="tel:+918967641707" 
                      className="text-green-600 hover:text-green-800"
                    >
                      +91 8967641707
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-purple-600">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/agni4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/agni4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-600" />
                  </a>
                  <a
                    href="agniwork99@gmail.com"
                    className="bg-red-100 p-3 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-red-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}