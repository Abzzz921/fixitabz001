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
      title: 'Managed IT Support',
      tagline: 'Your IT, Handled Properly',
      description: 'We provide day-to-day IT support for your entire team. From fixing issues to keeping everything running smoothly, we become your outsourced IT department.',
      features: [
        'Unlimited remote & onsite support',
        'Helpdesk for your whole team',
        'Hardware & software troubleshooting',
        'System monitoring & maintenance',
        'Wi-Fi & network support',
        'Plain-English, friendly support'
      ],
      benefits: 'Your team stays productive while we quietly keep everything working in the background.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      tagline: 'Simple, Effective Protection',
      description: 'We protect your users, devices and data from modern cyber threats without slowing anyone down.',
      features: [
        'Multi-factor authentication (MFA)',
        'Endpoint protection',
        'Email security',
        'Account & access control',
        'Threat monitoring',
        'Security best practices'
      ],
      benefits: 'Your business stays safe from breaches, ransomware and data loss.'
    },
    {
      icon: Mail,
      title: 'Microsoft 365 & Google Workspace',
      tagline: 'Your Team’s Digital Workspace',
      description: 'We manage your email, calendars, file storage and collaboration tools so your team can work easily and securely from anywhere.',
      features: [
        'Microsoft 365 & Google Workspace',
        'Email setup & management',
        'Teams, SharePoint & OneDrive',
        'Google Drive & shared files',
        'User setup & permissions',
        'Spam & malware protection'
      ],
      benefits: 'No lost emails, no access issues — just smooth communication and collaboration.'
    },
    {
      icon: Database,
      title: 'Device & Laptop Management',
      tagline: 'Every Device Secured & Ready',
      description: 'We manage all company laptops and devices, keeping them secure, up-to-date and ready for your team to work from anywhere.',
      features: [
        'Windows & Mac management',
        'Intune, Jamf & device policies',
        'Software deployment',
        'Security & encryption',
        'Remote lock & wipe',
        'Hardware lifecycle management'
      ],
      benefits: 'Every device is protected, controlled and ready to work — wherever your team is.'
    },
    {
      icon: Network,
      title: 'New Starters & Leavers',
      tagline: 'Onboarded Right. Offboarded Securely.',
      description: 'We handle all IT when people join or leave your business, keeping everything organised and secure.',
      features: [
        'New starter laptop setup',
        'Email & account creation',
        'Permissions & access control',
        'Leaver lock-down',
        'Data protection',
        'No loose ends'
      ],
      benefits: 'New hires are productive on day one — and leavers never take access with them.'
    },
    {
      icon: Database,
      title: 'Backup & Recovery',
      tagline: 'Your Data, Always Protected',
      description: 'We make sure your business data is backed up and recoverable if something goes wrong.',
      features: [
        'Device backups',
        'Microsoft 365 backups',
        'Cloud data protection',
        'Ransomware recovery',
        'Regular backup checks',
        'Fast data restore'
      ],
      benefits: 'If the worst happens, your data is safe and your business can keep going.'
    }
  ];


  return (
    <>
      <Helmet>
        <title>IT Services - Managed IT, Cloud & Security | FixItAbz</title>
        <meta name="description" content="Managed IT support, Microsoft 365, device management and cybersecurity for growing UK businesses." />
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
                Everything your business needs to run IT properly — without hiring an internal IT team.
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
                  Let’s Build Your IT Setup
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Simple, secure IT that grows with your business.
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
