'use client'

import { Users, Heart, Scale, GraduationCap, Building, UserCheck } from 'lucide-react'

const targetAudience = [
  {
    icon: Users,
    title: 'Social Workers',
    description: 'Child protection, family services, community outreach, and case management professionals who need efficient documentation',
    benefits: [
      'Dictate observations while fresh in memory',
      'AI structures notes to compliance standards',
      'Professional case note formatting',
      'Reduced documentation time'
    ]
  },
  {
    icon: Heart,
    title: 'Counselors & Therapists',
    description: 'Mental health professionals, marriage and family therapists, substance abuse counselors who need session documentation',
    benefits: [
      'Voice record session notes immediately',
      'AI organizes into treatment planning format',
      'Progress tracking documentation',
      'Confidential note management'
    ]
  },
  {
    icon: Scale,
    title: 'Legal Advocates',
    description: 'Legal aid workers, victim advocates, court liaisons, and legal case managers who need precise documentation',
    benefits: [
      'Dictate detailed interaction notes',
      'AI formats for court documentation',
      'Evidence tracking and organization',
      'Professional legal compliance'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Social Work Students',
    description: 'BSW and MSW students in field placements and internships learning professional documentation',
    benefits: [
      'Practice dictating case notes professionally',
      'AI teaches proper documentation structure',
      'Learn while creating real case notes',
      'Build confidence in field work'
    ]
  },
  {
    icon: Building,
    title: 'Agency Supervisors',
    description: 'Team leaders, program directors, and clinical supervisors who need consistent documentation standards',
    benefits: [
      'Voice record supervision notes quickly',
      'AI ensures team documentation consistency',
      'Standardized note formatting across staff',
      'Quality assurance through structured notes'
    ]
  },
  {
    icon: UserCheck,
    title: 'Case Managers',
    description: 'Healthcare case managers, disability services, elderly care coordinators who manage multiple clients',
    benefits: [
      'Dictate care coordination notes efficiently',
      'AI organizes multi-service documentation',
      'Track progress across multiple clients',
      'Professional communication records'
    ]
  }
]

const useCases = [
  {
    scenario: 'Home Visits',
    description: 'Document observations, interactions, and assessments during client home visits',
    example: 'Dictate your observations while driving back - AI organizes into professional format'
  },
  {
    scenario: 'Court Reports',
    description: 'Create comprehensive, professional reports for court proceedings',
    example: 'Dictate case details - AI structures into court-appropriate documentation'
  },
  {
    scenario: 'Treatment Planning',
    description: 'Document treatment goals, interventions, and progress notes',
    example: 'Track client progress with consistent, detailed documentation'
  },
  {
    scenario: 'Crisis Intervention',
    description: 'Quickly document crisis situations and emergency responses',
    example: 'Voice record critical details immediately - AI formats for proper documentation'
  },
  {
    scenario: 'Team Meetings',
    description: 'Document multidisciplinary team decisions and action plans',
    example: 'Record meeting outcomes and assign follow-up tasks'
  },
  {
    scenario: 'Supervision Notes',
    description: 'Document supervisory meetings and professional development',
    example: 'Track learning objectives and supervision discussions'
  }
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Who It's For</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Built for Human Services Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Casenotepro is designed specifically for professionals who need efficient, compliant, and secure case documentation
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <audience.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{audience.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{audience.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {audience.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900">Common Use Cases</h3>
            <p className="mt-4 text-lg text-gray-500">
              See how Casenotepro fits into your daily workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-2">{useCase.scenario}</h4>
                <p className="text-gray-600 mb-3">{useCase.description}</p>
                <div className="bg-primary-50 p-3 rounded-md">
                  <p className="text-sm text-primary-700 italic">"{useCase.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Standards */}
        <div className="mt-16 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Global Professional Standards Compliance</h3>
            <p className="text-lg opacity-90 mb-6">
              Designed with international professional social work standards and ethics in mind
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Professional Ethics Codes</h4>
                  <p className="text-sm opacity-90">NASW (USA), AASW (Australia), ANZASW (NZ)</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Privacy Compliance</h4>
                  <p className="text-sm opacity-90">HIPAA, Privacy Act compliance</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Agency Standards</h4>
                  <p className="text-sm opacity-90">Customizable to meet agency requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student & New Professional Focus */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Perfect for Learning</h3>
              <p className="mt-3 text-lg text-gray-500">
                Ideal for social work students and new professionals learning documentation best practices
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Learn professional documentation structure</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Practice with guided templates</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Build confidence in field placements</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Prepare for professional practice</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Student Feedback</h4>
                <blockquote className="text-gray-700 italic">
                  "Casenotepro helped me learn proper documentation structure during my field placement. 
                  The AI templates taught me what to include and how to organize my thoughts professionally."
                </blockquote>
                <footer className="mt-3 text-sm text-gray-600">
                  — MSW Student, Field Placement
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
