import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, HeartPulse, Briefcase, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndustriesPage = () => {
  const industries = [
    {
      icon: Building2,
      name: 'Professional Services',
      description: 'Law firms, consulting agencies, and accounting practices need rock-solid IT. We ensure your client data stays secure while your team collaborates seamlessly.',
      challenges: ['Data security compliance', 'Remote work infrastructure', 'Client confidentiality'],
      solutions: ['Encrypted file sharing', 'VPN access for remote teams', 'SOC 2 compliant infrastructure']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Schools and training centers require reliable systems for students and staff. We build infrastructure that scales with enrollment and supports hybrid learning.',
      challenges: ['Student data protection', 'Scalable infrastructure', 'Budget constraints'],
      solutions: ['Cloud-based learning platforms', 'Automated backups', 'Cost-effective licensing']
    },
    {
      icon: HeartPulse,
      name: 'Healthcare',
      description: 'Medical practices can\'t afford downtime. We provide HIPAA-compliant systems that keep patient data secure and accessible when you need it.',
      challenges: ['HIPAA compliance', 'Electronic health records', 'System uptime'],
      solutions: ['Encrypted data storage', 'Disaster recovery', '24/7 system monitoring']
    },
    {
      icon: Briefcase,
      name: 'Financial Services',
      description: 'Banks, credit unions, and financial advisors need bulletproof security. We deliver infrastructure that meets regulatory requirements and protects sensitive financial data.',
      challenges: ['Regulatory compliance', 'Fraud prevention', 'Data encryption'],
      solutions: ['Multi-factor authentication', 'Advanced threat protection', 'Compliance auditing']
    },
    {
      icon: TrendingUp,
      name: 'E-commerce & Retail',
      description: 'Online stores need fast, reliable systems that handle traffic spikes. We build infrastructure that grows with your sales without breaking a sweat.',
      challenges: ['Peak traffic handling', 'Payment security', 'Inventory systems'],
      solutions: ['Load-balanced servers', 'PCI DSS compliance', 'Real-time synchronization']
    },
    {
      icon: Shield,
      name: 'Manufacturing',
      description: 'Production facilities require secure networks that connect floor operations to office systems. We integrate legacy equipment with modern cloud solutions.',
      challenges: ['Legacy system integration', 'Industrial IoT security', 'Network reliability'],
      solutions: ['Hybrid cloud solutions', 'Industrial network segmentation', 'Predictive maintenance']
    }
  ];

  const insights = [
    {
      title: 'The Hidden Cost of IT Downtime',
      excerpt: 'Most businesses underestimate the true cost of system failures. Here\'s what downtime really costs and how to prevent it.',
      readTime: '5 min read',
      category: 'Business Strategy'
    },
    {
      title: 'Why Your Active Directory Needs an Audit',
      excerpt: 'Security vulnerabilities hide in plain sight. Learn how to spot and fix common AD misconfigurations before they become disasters.',
      readTime: '7 min read',
      category: 'Security'
    },
    {
      title: 'Cloud vs On-Premise: The Real Numbers',
      excerpt: 'Cut through the marketing hype. We break down actual costs, performance, and when each option makes sense for your business.',
      readTime: '6 min read',
      category: 'Infrastructure'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve & IT Insights | FixitAbz</title>
        <meta name="description" content="FixitAbz serves Professional Services, Education, Healthcare, Financial Services, E-commerce, and Manufacturing with tailored IT solutions. Read our latest insights on IT strategy and security." />
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
                Industry Expertise
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Built for Your Industry
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand that every industry has unique challenges. Here's how we solve yours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <industry.icon className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-gray-300 mb-4">{industry.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-purple-400 mb-2 block">Common Challenges</span>
                        <div className="space-y-1">
                          {industry.challenges.map((challenge) => (
                            <div key={challenge} className="text-sm text-gray-400">• {challenge}</div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-blue-400 mb-2 block">Our Solutions</span>
                        <div className="space-y-1">
                          {industry.solutions.map((solution) => (
                            <div key={solution} className="text-sm text-gray-400">• {solution}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Latest Insights
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Real talk about IT strategy, security, and what actually works
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all">
                    <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium mb-4">
                      {insight.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">{insight.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                      <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  Your Industry, Our Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's talk about the specific challenges you're facing
              </p>
              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-6 text-lg group">
                  Schedule a Consultation
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

export default IndustriesPage;