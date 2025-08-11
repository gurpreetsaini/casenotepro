'use client'

import { Mic, Brain, FileText, Shield, Clock, Users, Search, Download } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Advanced Speech Recognition',
    description: 'High-quality speech-to-text conversion that accurately captures your dictated case notes.',
    highlights: ['Real-time transcription', 'Professional terminology', 'Voice-first design']
  },
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Smart text processing that automatically structures raw dictation into professional case notes.',
    highlights: ['Template-based notes', 'Quick improvements', 'Custom prompts']
  },
  {
    icon: FileText,
    title: 'Professional Templates',
    description: 'Pre-built templates for common social work scenarios including assessments, home visits, and reviews.',
    highlights: ['15+ templates', 'Customizable', 'Compliance focused']
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Your case notes are stored securely on your device. We don\'t store or access your sensitive information.',
    highlights: ['Local device storage', 'No data collection', 'Professional compliance']
  },
  {
    icon: Search,
    title: 'Smart Organization',
    description: 'Advanced search functionality across all notes with intelligent categorization and tagging.',
    highlights: ['Full-text search', 'Smart categorization', 'Tag system']
  },
  {
    icon: Clock,
    title: 'Time-Saving Workflow',
    description: 'Streamlined documentation process that reduces administrative time and improves efficiency.',
    highlights: ['Quick note creation', 'Voice dictation', 'Professional formatting']
  }
]

const caseNoteStructure = [
  'CLIENT INFORMATION - Demographics and identifiers',
  'BACKGROUND/PRESENTING ISSUES - Relevant history and concerns',
  'OBSERVATIONS - What you observed during interaction',
  'CLIENT VOICE - Direct quotes and client statements',
  'ASSESSMENT/ANALYSIS - Professional analysis',
  'RISK FACTORS - Concerns and red flags',
  'PROTECTIVE FACTORS - Strengths and supports',
  'ACTIONS TAKEN - What was done during contact',
  'PLAN/NEXT STEPS - Future actions and follow-up'
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for professional case documentation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Designed specifically for social workers, counselors, and human services professionals
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="h-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-base text-gray-500 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Note Structure Section */}
        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Professional Case Note Structure
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our AI automatically organizes your dictated notes into these professional sections when relevant:
              </p>
              <div className="mt-8 space-y-3">
                {caseNoteStructure.map((section, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-600 text-sm font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{section}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Sample Output</h4>
                <div className="space-y-4 text-sm">
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-medium text-gray-900">CLIENT INFORMATION</h5>
                    <p className="text-gray-600 mt-1">Name: Sarah Johnson<br />Age: 28 years<br />Address: 456 Oak Street</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-medium text-gray-900">OBSERVATIONS</h5>
                    <p className="text-gray-600 mt-1">Client appeared anxious but cooperative. Maintained good eye contact throughout the session...</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-medium text-gray-900">PLAN/NEXT STEPS</h5>
                    <p className="text-gray-600 mt-1">Schedule follow-up appointment within 2 weeks. Provide resource list for anxiety management...</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center">
                    <Mic className="h-3 w-3 mr-1" />
                    Voice recorded
                  </span>
                  <span className="flex items-center">
                    <Brain className="h-3 w-3 mr-1" />
                    AI structured
                  </span>
                  <span className="flex items-center">
                    <FileText className="h-3 w-3 mr-1" />
                    Ready to save
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="w-8 h-8 mx-auto mb-2">📷</div>
                <h4 className="font-medium">Vision Integration</h4>
                <p className="text-sm opacity-90 mt-1">OCR text support for documents</p>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="w-8 h-8 mx-auto mb-2">🔄</div>
                <h4 className="font-medium">Cloud Sync</h4>
                <p className="text-sm opacity-90 mt-1">Secure backup and sync across devices</p>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="w-8 h-8 mx-auto mb-2">📊</div>
                <h4 className="font-medium">Analytics</h4>
                <p className="text-sm opacity-90 mt-1">Insights and reporting tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
