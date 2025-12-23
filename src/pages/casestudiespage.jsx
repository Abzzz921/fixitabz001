import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      client: 'TechCorp Solutions',
      industry: 'Professional Services',
      challenge: 'Growing from 80 to 150 employees in 6 months created IT chaos. Their existing infrastructure couldn\'t scale, remote access was unreliable, and security was becoming a major concern.',
      solution: 'We implemented a complete Active Directory overhaul with automated provisioning, deployed Exchange Online with advanced threat protection, and built a secure VPN infrastructure for remote teams.',
      results: [
        { metric: '99.9%', label: 'System Uptime', icon: TrendingUp },
        { metric: '3 hours', label: 'Avg. Response Time', icon: Clock },
        { metric: '$120K', label: 'Annual Savings', icon: DollarSign },
        { metric: 'Zero', label: 'Security Breaches', icon: Shield }
      ],
      testimonial: 'FixitAbz didn\'t just fix our IT—they transformed how we work. Our team is more productive, and I actually sleep at night knowing our systems are secure.',
      author: 'Sarah Chen, CTO'
    },
    {
      client: 'BuildRight Construction',
      industry: 'Construction & Manufacturing',
      challenge: 'Field teams couldn\'t access critical project files, leading to costly delays. Their on-premise servers were aging, and backups were inconsistent at best.',
      solution: 'We migrated them to a hybrid cloud infrastructure with secure mobile access, implemented automated backups with disaster recovery, and integrated their field management software with centralized file storage.',
      results: [
        { metric: '85%', label: 'Faster File Access', icon: TrendingUp },
        { metric: '15 min', label: 'Disaster Recovery', icon: Clock },
        { metric: '$200K', label: 'Prevented Losses', icon: DollarSign },
        { metric: '100%', label: 'Backup Success', icon: Shield }
      ],
      testimonial: 'We used to lose hours every week to IT issues. Now our teams in the field have everything they need, instantly. It\'s been a game-changer for project timelines.',
      author: 'Michael Rodriguez, Operations Director'
    },
    {
      client: 'HealthFirst Medical Group',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance gaps were putting patient data at risk. Their email system lacked encryption, file sharing was insecure, and they had no audit trail for data access.',
      solution: 'We built a HIPAA-compliant infrastructure from the ground up, including encrypted file sharing, secure email with DLP, comprehensive access logging, and regular security audits.',
      results: [
        { metric: '100%', label: 'HIPAA Compliant', icon: TrendingUp },
        { metric: '24/7', label: 'Security Monitoring', icon: Clock },
        { metric: '$0', label: 'Compliance Fines', icon: DollarSign },
        { metric: 'SOC 2', label: 'Certified', icon: Shield }
      ],
      testimonial: 'Patient trust is everything in healthcare. FixitAbz gave us the security infrastructure we needed to protect that trust. The audit process was painless for the first time ever.',
      author: 'Dr. Jennifer Park, CEO'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Real Results from Real Clients | FixitAbz</title>
        <meta name="description" content="See how FixitAbz helped businesses achieve 99.9% uptime, reduce IT costs, and improve security. Real case studies with measurable results from Professional Services, Construction, and Healthcare industries." />
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
                Real Results
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See how we've helped businesses like yours solve real IT challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-2xl" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium mb-4">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{study.client}</h2>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        The Challenge
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        The Solution
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">The Results</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
                        >
                          <result.icon className="text-purple-400 mx-auto mb-3" size={32} />
                          <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                          <div className="text-sm text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
                    <p className="text-gray-300 text-lg italic mb-4">"{study.testimonial}"</p>
                    <p className="text-white font-semibold">{study.author}</p>
                    <p className="text-gray-400 text-sm">{study.client}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
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
                  Our Track Record
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '150+', label: 'Happy Clients' },
                { value: '99.9%', label: 'Avg. Uptime' },
                { value: '< 2hr', label: 'Response Time' },
                { value: '$5M+', label: 'Cost Savings' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
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
                  Ready to Write Your Success Story?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's talk about what results we can deliver for your business
              </p>
              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-6 text-lg group">
                  Start Your Success Story
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

export default CaseStudiesPage;