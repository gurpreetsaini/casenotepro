'use client'

import { Clock, Shield, Brain, Users, Award, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Reduce documentation time by up to 70%',
    details: [
      'Voice recording while traveling between appointments',
      'AI automatically structures your notes',
      'No more typing lengthy reports',
      'Quick templates for common scenarios'
    ],
    stat: '70%',
    statLabel: 'Time Saved'
  },
  {
    icon: Shield,
    title: 'Protect Privacy',
    description: 'Your case notes stay on your device - we don\'t store your data',
    details: [
      'Notes stored securely on your device only',
      'No cloud storage of sensitive information',
      'We don\'t collect or access your case content',
      'International privacy standards compliant'
    ],
    stat: '0',
    statLabel: 'Data Stored by Us'
  },
  {
    icon: Brain,
    title: 'Professional Quality',
    description: 'AI ensures consistent, professional documentation',
    details: [
      'Structured notes following best practices',
      'Consistent formatting across all notes',
      'Professional language and terminology',
      'Court-ready documentation'
    ],
    stat: '15+',
    statLabel: 'AI Templates'
  },
  {
    icon: Users,
    title: 'Built by Professionals',
    description: 'Designed specifically for human services',
    details: [
      'Created by social work professionals',
      'Understanding of field requirements',
      'Compliance with professional standards',
      'Regular updates based on user feedback'
    ],
    stat: '100%',
    statLabel: 'Professional Focus'
  }
]

const comparisons = [
  {
    feature: 'Voice Recording',
    traditional: 'Manual typing after visits',
    casenotepro: 'Record while fresh in memory',
    advantage: 'Better accuracy and detail'
  },
  {
    feature: 'Note Structure',
    traditional: 'Inconsistent formats',
    casenotepro: 'AI-guided professional structure',
    advantage: 'Professional compliance'
  },
  {
    feature: 'Time Investment',
    traditional: '30-45 minutes per note',
    casenotepro: '10-15 minutes per note',
    advantage: 'More time for clients'
  },
  {
    feature: 'Data Security',
    traditional: 'Cloud-based with data privacy risks',
    casenotepro: 'Local storage, no data collection',
    advantage: 'Complete privacy control'
  },
  {
    feature: 'Learning Curve',
    traditional: 'Complex software interfaces',
    casenotepro: 'Intuitive voice-first design',
    advantage: 'Quick adoption'
  }
]

const testimonials = [
  {
    quote: "Casenotepro has revolutionized my documentation process. I can now record notes while driving between home visits and have professional case notes ready by the time I'm back at the office.",
    author: "Sarah M.",
    role: "Child Protection Social Worker",
    years: "8 years experience"
  },
  {
    quote: "As a new graduate, learning proper case note structure was challenging. Casenotepro's AI templates taught me professional documentation standards while helping me work more efficiently.",
    author: "Michael L.",
    role: "Mental Health Counselor",
    years: "New Graduate"
  },
  {
    quote: "The privacy features give me complete confidence. Knowing that my clients' sensitive information never leaves my device is crucial for maintaining ethical standards.",
    author: "Dr. Jennifer K.",
    role: "Clinical Supervisor",
    years: "15 years experience"
  }
]

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Why Choose Casenotepro</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Smart Choice for Professional Documentation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the difference that purpose-built technology makes for human services professionals
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="h-full p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-primary-500">
                    <div className="text-2xl font-bold text-primary-600">{benefit.stat}</div>
                    <div className="text-sm text-gray-600">{benefit.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900">Traditional vs. Casenotepro</h3>
            <p className="mt-4 text-lg text-gray-500">
              See how Casenotepro transforms your documentation workflow
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aspect
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Traditional Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      With Casenotepro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Advantage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {comparison.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {comparison.traditional}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600 font-medium">
                        {comparison.casenotepro}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        {comparison.advantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900">What Professionals Say</h3>
            <p className="mt-4 text-lg text-gray-500">
              Real feedback from social workers and human services professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.years}</div>
                </footer>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Calculate Your Time Savings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">25</div>
                <div className="text-sm opacity-90">Minutes saved per case note</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">8.3</div>
                <div className="text-sm opacity-90">Hours saved per week (20 notes)</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">36</div>
                <div className="text-sm opacity-90">Days saved per year</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              More time for what matters most: helping your clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
