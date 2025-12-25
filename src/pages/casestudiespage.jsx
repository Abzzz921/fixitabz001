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
      challenge: 'A fast-growing team meant constant onboarding, device issues, and “who has access to what?” chaos. IT was becoming a blocker: new starters weren’t ready, security was inconsistent, and the business needed a setup that could scale without hiring internal IT.',
      solution: 'We took over day-to-day support, tightened security with MFA and proper access control, standardised device setup, and organised their Microsoft 365 environment so email, Teams and file sharing worked properly. We also introduced reliable backups and a clean joiner/leaver process.',
      results: [
        { metric: 'Faster', label: 'Onboarding', icon: TrendingUp },
        { metric: 'Same-day', label: 'Device Setup', icon: Clock },
        { metric: 'Reduced', label: 'IT Disruption', icon: DollarSign },
        { metric: 'Stronger', label: 'Security Posture', icon: Shield }
      ],
      testimonial: 'FixitAbz didn’t just fix issues — they brought structure. New starters are ready, access is controlled, and IT isn’t a daily headache anymore.',
      author: 'Sarah Chen, Operations Lead'
    },
    {
      client: 'BuildRight Construction',
      industry: 'Construction & Field Teams',
      challenge: 'Remote and field staff struggled with slow access to files, unreliable VPN connections, and inconsistent laptop setups. The business needed secure access to data and support for staff who weren’t sitting in an office all day.',
      solution: 'We cleaned up their Microsoft 365 setup for file access and collaboration, implemented secure remote access, and standardised laptops so devices were managed and supported properly. Backups were put in place so data was recoverable if anything went wrong.',
      results: [
        { metric: 'Faster', label: 'File Access', icon: TrendingUp },
        { metric: 'Less', label: 'Downtime', icon: Clock },
        { metric: 'Lower', label: 'Support Burden', icon: DollarSign },
        { metric: 'Secure', label: 'Remote Working', icon: Shield }
      ],
      testimonial: 'Our teams can access what they need without messing around. Support is quick, and we’re no longer firefighting IT problems every week.',
      author: 'Michael Rodriguez, Operations Director'
    },
    {
      client: 'HealthFirst Clinic Group',
      industry: 'Healthcare & Clinics',
      challenge: 'Patient-facing teams need systems to be reliable and secure. They had inconsistent access controls, unclear device standards, and no confidence in backups. They also needed a more professional approach to security and data handling.',
      solution: 'We introduced a security-first setup: MFA, better account control, secure devices, and clearer access rules. Microsoft 365 was organised properly for email and file sharing, and backups were put in place with regular checks. We also implemented a joiner/leaver process so access stays tight as staff change.',
      results: [
        { metric: 'Clear', label: 'Access Control', icon: TrendingUp },
        { metric: 'Reliable', label: 'Day-to-day IT', icon: Clock },
        { metric: 'Protected', label: 'Business Data', icon: DollarSign },
        { metric: 'Improved', label: 'Security', icon: Shield }
      ],
      testimonial: 'We needed IT that was reliable and secure without becoming complicated. FixitAbz made everything simpler and more controlled.',
      author: 'Dr. Jennifer Park, Practice Owner'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Real Outcomes for Growing Teams | FixitAbz</title>
        <meta
          name="description"
          content="Explore real-world examples of managed IT improvements: smoother onboarding, stronger security, better Microsoft 365, reliable backups and fewer IT headaches for growing businesses."
        />
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
                Real Outcomes
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real examples of what “proper IT” looks like: smoother onboarding, tighter security, cleaner Microsoft 365, reliable backups, and less downtime.
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
                  What We Focus On
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 'Fast', label: 'Support & Response' },
                { value: 'Secure', label: 'MFA + Device Protection' },
                { value: 'Reliable', label: 'Backups + Recovery' },
                { value: 'Scalable', label: 'Onboarding Built-In' }
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
                Let’s talk about how we can make your IT simpler, more secure, and easier to scale.
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
