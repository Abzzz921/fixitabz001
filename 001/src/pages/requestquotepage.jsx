import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RequestQuotePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    services: [],
    message: ''
  });

  const services = [
    'Active Directory',
    'Exchange Email',
    'File Server Management',
    'Network Solutions',
    'Security & Compliance',
    'Cloud Migration',
    'Disaster Recovery',
    'Not Sure - Need Consultation'
  ];

  const employeeRanges = [
    '50-100 employees',
    '100-250 employees',
    '250-500 employees',
    '500+ employees'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    quotes.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('quotes', JSON.stringify(quotes));

    toast({
      title: "Quote Request Received! 🎉",
      description: "We'll review your requirements and get back to you within 24 hours with a custom proposal.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      employees: '',
      services: [],
      message: ''
    });
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote - Custom IT Solutions | FixitAbz</title>
        <meta name="description" content="Get a custom quote for your IT infrastructure needs. Free assessment and consultation. Active Directory, Exchange Email, File Servers, and Network Solutions." />
      </Helmet>

      <div className="pt-20 min-h-screen">
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
                Free Consultation
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Build Your Solution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us what you need, and we'll create a custom proposal tailored to your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefits Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        'We review your requirements',
                        '24-hour response guarantee',
                        'Custom proposal created',
                        'Free infrastructure assessment',
                        'No obligation consultation'
                      ].map((item, index) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">💯 Our Guarantee</h4>
                    <p className="text-gray-300 text-sm">
                      If we can't deliver measurable improvements to your IT infrastructure, we'll refund your first month. No questions asked.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-2xl" />
                  <form onSubmit={handleSubmit} className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
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
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Company & Employees */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size *
                        </label>
                        <select
                          required
                          value={formData.employees}
                          onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                        >
                          <option value="">Select...</option>
                          {employeeRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Services Needed (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map(service => (
                          <label
                            key={service}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                              formData.services.includes(service)
                                ? 'bg-purple-600/20 border-purple-500/50'
                                : 'bg-white/5 border-purple-500/20 hover:border-purple-500/40'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="w-4 h-4 rounded border-purple-500/50 text-purple-600 focus:ring-purple-500/50"
                            />
                            <span className="text-sm text-gray-300">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your needs
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                        placeholder="What challenges are you facing? What are your goals?"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-6 text-lg"
                    >
                      Get Your Free Quote
                    </Button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RequestQuotePage;