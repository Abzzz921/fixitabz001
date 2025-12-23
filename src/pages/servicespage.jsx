import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, Database, Network, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Active Directory',
      tagline: 'Identity Management That Just Works',
      description: 'Stop juggling passwords and permissions. Our Active Directory solutions give you centralized control over user access, security policies, and authentication across your entire infrastructure.',
      features: [
        'Single sign-on (SSO) implementation',
        'Multi-factor authentication (MFA)',
        'Group policy management',
        'User lifecycle automation',
        'Role-based access control',
        'Security compliance auditing'
      ],
      benefits: 'Reduce security risks by 90% and cut IT management time in half with automated user provisioning and centralized access control.'
    },
    {
      icon: Mail,
      title: 'Exchange Email',
      tagline: 'Email That Scales With Your Business',
      description: 'Enterprise-grade email that doesn\'t break the bank. We handle migration, management, and security so your team can communicate without interruption.',
      features: [
        'Exchange Online migration',
        'Advanced threat protection',
        'Mailbox management & archiving',
        'Mobile device management',
        'Spam & malware filtering',
        '99.9% uptime guarantee'
      ],
      benefits: 'Eliminate email downtime and security threats with military-grade protection and 24/7 monitoring.'
    },
    {
      icon: Database,
      title: 'File Server Management',
      tagline: 'Your Files, Always Accessible, Always Secure',
      description: 'Give your team seamless access to files from anywhere while maintaining ironclad security. Our file server solutions grow with your data needs.',
      features: [
        'Secure file sharing & collaboration',
        'Automated backup & disaster recovery',
        'Permissions & access control',
        'Version control & audit trails',
        'Cloud & on-premise integration',
        'Ransomware protection'
      ],
      benefits: 'Never lose a file again with automated backups and recover from disasters in minutes, not days.'
    },
    {
      icon: Network,
      title: 'Network Solutions',
      tagline: 'Infrastructure That Never Slows You Down',
      description: 'Build a network that can handle whatever your business throws at it. Fast, reliable, and secure connectivity for all your locations and remote workers.',
      features: [
        'Network design & architecture',
        'VPN & remote access setup',
        'Load balancing & optimization',
        'Firewall & security configuration',
        'Network monitoring & maintenance',
        'Bandwidth management'
      ],
      benefits: 'Experience 99.9% uptime and lightning-fast connections that keep your team productive, no matter where they work.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Active Directory, Exchange, Networking | FixitAbz</title>
        <meta name="description" content="Comprehensive IT services including Active Directory management, Exchange Email solutions, File Server Management, and Network Solutions for enterprises with 100+ employees." />
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
                Complete IT Solutions
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Services Built for Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Every service you need to run a modern, scalable IT infrastructure. No fluff, just results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                    <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/50 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="text-white" size={32} />
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-purple-300 text-lg mb-4 font-medium">{service.tagline}</p>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="text-green-400" size={20} />
                        Real Impact
                      </h4>
                      <p className="text-gray-300">{service.benefits}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Let's Build Your Solution
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Every business is different. Let's talk about what you actually need.
              </p>
              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-6 text-lg group">
                  Get Your Custom Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;