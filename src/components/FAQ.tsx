'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Mail } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Casenotepro?',
        answer: 'Casenotepro is a professional case note management app designed specifically for social workers, counselors, and human services professionals. It uses AI-powered speech recognition to help you create structured, professional case notes quickly and efficiently.'
      },
      {
        question: 'How does the voice recording work?',
        answer: 'Simply tap the record button and speak naturally about your client interaction. The app converts your speech to text, then uses AI to structure it into professional case note format with sections like client information, observations, and next steps.'
      },
      {
        question: 'Do I need an internet connection?',
        answer: 'No! All speech recognition and AI processing happens directly on your device. You can record and create case notes even without an internet connection, ensuring you can work anywhere, anytime.'
      },
      {
        question: 'What types of case notes can I create?',
        answer: 'The app includes 15+ templates for various scenarios including home visits, office visits, phone calls, assessments, court reports, crisis interventions, treatment planning, and more. You can also create custom templates for your specific needs.'
      }
    ]
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        question: 'Is my data secure and private?',
        answer: 'Yes, your data is kept private. Case notes are stored securely on your device and we don\'t collect or store your personal information. Our privacy-first approach ensures your client information remains confidential.'
      },
      {
        question: 'Is the app compliant with professional standards?',
        answer: 'Yes, the app is designed to meet international professional standards including HIPAA (USA), Privacy Act (Australia/New Zealand), and professional ethics codes from NASW, AASW, and ANZASW. Case notes are stored securely on your device with no data collection or external transmission of client information.'
      },
      {
        question: 'Can other people access my notes?',
        answer: 'No. Your case notes are stored locally on your device with encryption. Only you have access to your notes, and they are protected by your device\'s security features (Face ID, Touch ID, or passcode).'
      },
      {
        question: 'What happens if I lose my device?',
        answer: 'Your notes are stored locally and protected by device encryption. However, we recommend regular backups through your device\'s backup system. Future versions will include secure cloud backup options.'
      }
    ]
  },
  {
    category: 'Professional Use',
    questions: [
      {
        question: 'Is this suitable for court documentation?',
        answer: 'Yes! The AI structures notes according to professional standards and includes all necessary sections for court-ready documentation. The consistent format and professional language make reports suitable for legal proceedings.'
      },
      {
        question: 'Can I customize the note templates?',
        answer: 'Absolutely. While the app comes with 15+ pre-built templates, you can create custom templates and prompts to match your agency\'s specific requirements and documentation standards.'
      },
      {
        question: 'How accurate is the speech recognition?',
        answer: 'Very accurate! The app uses advanced speech recognition technology optimized for professional terminology commonly used in social work and human services. The AI is specifically trained to understand case note language and structure.'
      },
      {
        question: 'Can I edit the AI-generated notes?',
        answer: 'Of course! The AI provides a professional starting point, but you have complete control to edit, modify, and customize every note. You can also provide additional instructions to the AI for specific formatting needs.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What devices are supported?',
        answer: 'Currently, Casenotepro is designed for iOS devices (iPhone and iPad) running iOS 15.0 or later. Android and web versions are planned for future releases.'
      },
      {
        question: 'How much storage does the app use?',
        answer: 'The app itself is relatively small. Storage usage depends on how many case notes you create, but text-based notes are very efficient. Voice recordings are processed and converted to text, so audio files don\'t accumulate.'
      },
      {
        question: 'Do I need special permissions?',
        answer: 'The app requires microphone access for voice recording and speech recognition permissions. These are standard permissions that you\'ll be prompted to grant when first using the app.'
      },
      {
        question: 'How often is the app updated?',
        answer: 'We regularly update the app based on user feedback and to maintain compatibility with the latest iOS versions. Updates include new features, template additions, and performance improvements.'
      }
    ]
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I get started?',
        answer: 'Once the app is available, simply download it from the App Store, grant the necessary permissions, and start with the built-in tutorial. You can begin creating case notes immediately using the provided templates.'
      },
      {
        question: 'Is there training available?',
        answer: 'The app is designed to be intuitive, but we provide comprehensive help documentation, video tutorials, and best practice guides. Many users find they can start creating professional notes within minutes.'
      },
      {
        question: 'Can I import existing case notes?',
        answer: 'Currently, the app is designed for creating new notes. However, you can copy and paste existing text into the app and use the AI to restructure it according to professional standards.'
      },
      {
        question: 'What if I need help or support?',
        answer: 'We provide comprehensive support through in-app help, email support, and detailed documentation. Our support team understands the unique needs of human services professionals.'
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to know about Casenotepro
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="mt-16 space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-primary-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-primary-900">{category.category}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleItem(itemId)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-lg text-white opacity-90 mb-6">
            Our support team is here to help with any questions about using Casenotepro effectively in your practice.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <a
              href="mailto:Support@casenotepro.com"
              className="inline-flex items-center px-6 py-3 bg-[#2B7A78] text-white rounded-lg hover:bg-[#225f5d] transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-medium text-gray-900 mb-2">💡 Pro Tip</h4>
            <p className="text-gray-600">Record your notes while driving back from appointments when details are fresh in your memory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-medium text-gray-900 mb-2">🎯 Best Practice</h4>
            <p className="text-gray-600">Use the custom prompt feature to align notes with your agency's specific documentation requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-medium text-gray-900 mb-2">🔒 Privacy Note</h4>
            <p className="text-gray-600">All processing happens on your device - your client information never leaves your phone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
