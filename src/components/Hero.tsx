'use client'

import { useState } from 'react'
import { Mic, FileText, Brain, Shield, Download, Menu, X } from 'lucide-react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Casenotepro</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#who-its-for" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Who It's For
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </a>
              <a href="#privacy" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Privacy
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
              <a href="#features" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#who-its-for" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Who It's For
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <a href="#privacy" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Privacy
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-40 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-primary-600">
                  Professional Case Management
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Transform Your</span>
                  <span className="block text-primary-600">Case Notes</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Advanced case note management app designed specifically for social workers, counselors, and human services professionals. 
                Dictate your case notes naturally and let AI organize them into professional documentation.
              </p>

              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <Mic className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-2 text-sm text-gray-600">Voice Recording</span>
                </div>
                <div className="flex items-center">
                  <Brain className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-2 text-sm text-gray-600">AI Processing</span>
                </div>
                <div className="flex items-center">
                  <FileText className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-2 text-sm text-gray-600">Smart Templates</span>
                </div>
                <div className="flex items-center">
                  <Shield className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-2 text-sm text-gray-600">Privacy Focused</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors">
                    <Download className="mr-2 h-5 w-5" />
                    Coming Soon - iOS App
                  </button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">AI Templates</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">Privacy</div>
                  <div className="text-sm text-gray-500">Focused</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">Professional</div>
                  <div className="text-sm text-gray-500">Grade</div>
                </div>
              </div>
            </div>

            {/* Right side - App mockup */}
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Case Note - John Doe</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Home Visit
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">CLIENT INFORMATION</h4>
                      <p className="text-sm text-gray-600">Name: John Doe<br />Age: 35 years<br />Address: 123 Main St</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">OBSERVATIONS</h4>
                      <p className="text-sm text-gray-600">Client appeared calm and cooperative during the visit. Home environment was clean and organized...</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">PLAN/NEXT STEPS</h4>
                      <p className="text-sm text-gray-600">Follow up visit scheduled for next week. Continue monitoring progress...</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Mic className="h-4 w-4 mr-1" />
                      Voice recorded
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Brain className="h-4 w-4 mr-1" />
                      AI structured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 -mt-24 pr-6 hidden lg:block">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-24 pl-6 hidden lg:block">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-secondary-200 to-primary-200 opacity-20"></div>
      </div>
    </div>
  )
}
