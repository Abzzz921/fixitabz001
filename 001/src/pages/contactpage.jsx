import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    toast({
      title: "Message Sent! 📧",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-4567',
      description: 'Mon-Fri, 8am-6pm PST',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@fixitabz.com',
      description: '24hr response time',
      action: 'mailto:hello@fixitabz.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Tech Street, Suite 100',
      description: 'San Francisco, CA 94102',
      action: '#'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with FixitAbz</title>
        <meta name="description" content="Contact FixitAbz for IT support, consultations, or questions. Call (555) 123-4567 or email hello@fixitabz.com. We respond within 24 hours." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium mb-6">
                We're Here to Help
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Talk
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions? Need support? Just want to chat about your IT challenges? We're all ears.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-purple-300 font-medium mb-1">{method.details}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-2xl" />
                  <form onSubmit={handleSubmit} className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-6">
                        <MessageSquare className="text-purple-400" size={24} />
                        <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={6}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                          placeholder="Tell us what's on your mind..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-6 text-lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Office Hours */}
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-purple-400" size={20} />
                    <h3 className="text-lg font-bold text-white">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">🚨 Emergency Support</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Critical system down? We offer 24/7 emergency support for existing clients.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                    Emergency Hotline
                  </Button>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="#"
                      className="flex-1 p-3 bg-white/5 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all"
                    >
                      <Linkedin size={20} className="text-purple-400" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="#"
                      className="flex-1 p-3 bg-white/5 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all"
                    >
                      <Twitter size={20} className="text-purple-400" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;