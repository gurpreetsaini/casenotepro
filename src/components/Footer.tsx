'use client'

import { Shield, Lock, Eye, Database, Download, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your case notes are processed with privacy in mind. Notes are stored securely on your device and we don\'t collect your personal data.'
    },
    {
      icon: Database,
      title: 'Local Storage Only',
      description: 'Case notes are stored securely on your device using Core Data encryption. No data is transmitted to external servers or cloud storage.'
    },
    {
      icon: Eye,
      title: 'No Data Collection',
      description: 'We do not collect, store, or analyze your personal information or case note content. Your privacy is completely protected.'
    },
    {
      icon: Shield,
      title: 'Professional Compliance',
      description: 'Designed to meet HIPAA requirements and professional ethics standards for social work and human services.'
    }
  ]

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Privacy Statement Section */}
          <div id="privacy" className="mb-16 p-8 bg-gray-800 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Privacy Commitment</h2>
              <p className="text-gray-300 text-lg">
                Your client data privacy is our highest priority. We've built Casenotepro with privacy-by-design principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                      <principle.icon className="h-5 w-5" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium">{principle.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                <Shield className="mr-2 h-5 w-5" />
                Read Full Privacy Policy
              </button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Casenotepro</h3>
              <p className="text-gray-300 mb-4">
                Professional case note management for social workers, counselors, and human services professionals.
              </p>
              <div className="flex space-x-4">
                <div className="bg-primary-600 p-2 rounded">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">iOS App</p>
                  <p className="text-sm text-gray-400">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#who-its-for" className="hover:text-white transition-colors">Who It's For</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="mailto:Support@casenotepro.com" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="mailto:Support@casenotepro.com" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Professional Resources</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary-500" />
                  <a href="mailto:info@casenotepro.com" className="hover:text-white transition-colors">
                    info@casenotepro.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary-500" />
                  <a href="mailto:Support@casenotepro.com" className="hover:text-white transition-colors">
                    Support@casenotepro.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary-500 mt-0.5" />
                  <div>
                    <p>Built for professionals</p>
                    <p className="text-sm text-gray-400">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Standards */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Professional Standards Compliance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div>
                  <p className="font-medium text-white">NASW Code of Ethics</p>
                  <p>Confidentiality and documentation standards</p>
                </div>
                <div>
                  <p className="font-medium text-white">HIPAA Compliance</p>
                  <p>Privacy and security requirements</p>
                </div>
                <div>
                  <p className="font-medium text-white">Professional Standards</p>
                  <p>Built for human services professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Casenotepro. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Professional Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Privacy-First Approach</h3>
                <p>
                  Casenotepro is built with privacy-by-design principles specifically for human services professionals 
                  who handle sensitive client information. We understand the critical importance of confidentiality 
                  in your work and have designed our app to ensure complete privacy protection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We use secure AI services to process your speech and organize case notes</li>
                  <li>We don't store or retain your voice recordings or case note content</li>
                  <li>Case notes are stored securely on your device only</li>
                  <li>Privacy-first approach with minimal data handling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Storage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Case notes are stored locally on your device using Core Data encryption</li>
                  <li>Data is protected by your device's security features (Face ID, Touch ID, passcode)</li>
                  <li>No backup to cloud servers unless explicitly enabled by you</li>
                  <li>You maintain complete control over your data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What We Don't Collect</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal client information or case note content</li>
                  <li>Voice recordings or audio data</li>
                  <li>Usage analytics that could identify specific cases or clients</li>
                  <li>Location data or device identifiers linked to case content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Compliance</h3>
                <p>
                  Our app is designed to meet the privacy requirements of professional standards including:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>NASW Code of Ethics confidentiality requirements</li>
                  <li>HIPAA privacy and security standards</li>
                  <li>Professional licensing board requirements</li>
                  <li>Agency-specific privacy policies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Complete ownership and control of your case note data</li>
                  <li>Right to delete all data from the app</li>
                  <li>No vendor lock-in or data portability restrictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Measures</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>End-to-end encryption for all stored data</li>
                  <li>No network transmission of sensitive content</li>
                  <li>Regular security updates and patches</li>
                  <li>Compliance with mobile security best practices</li>
                </ul>
              </div>

              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">Questions About Privacy?</h4>
                <p className="text-primary-800">
                  If you have any questions about our privacy practices or need clarification for your agency's 
                  compliance requirements, please contact us at <strong>Support@casenotepro.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
