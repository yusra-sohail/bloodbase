'use client'

import { useState } from 'react'
import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function EligibilityPage() {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    lastDonation: '',
    medications: false,
    healthConditions: [] as string[],
  })

  const [result, setResult] = useState<{
    eligible: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault()
    
    const age = parseInt(formData.age)
    const weight = parseInt(formData.weight)
    
    if (age < 18 || age >= 60) {
      setResult({
        eligible: false,
        message: "You must be between 18 and 60 years old to donate blood."
      })
      return
    }

    if (weight < 45) {
      setResult({
        eligible: false,
        message: "You must weigh at least 45 kg to donate blood."
      })
      return
    }

    if (formData.medications) {
      setResult({
        eligible: false,
        message: "Please consult with our medical team about your medications before donating."
      })
      return
    }

    setResult({
      eligible: true,
      message: "Great news! You appear to be eligible to donate blood. Please visit your nearest blood bank for a complete assessment."
    })
  }

  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">Blood Donation Eligibility Checker</h1>
        <motion.div 
          className="max-w-2xl mx-auto bg-pure-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={checkEligibility} className="space-y-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-deep-blue mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
                min="0"
                max="100"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-deep-blue mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
                min="0"
                max="200"
              />
            </div>

            <div>
              <label htmlFor="lastDonation" className="block text-sm font-medium text-deep-blue mb-1">
                Last Donation Date
              </label>
              <input
                type="date"
                id="lastDonation"
                name="lastDonation"
                value={formData.lastDonation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="medications"
                name="medications"
                checked={formData.medications}
                onChange={handleChange}
                className="h-4 w-4 text-blood-red border-gray-300 rounded focus:ring-blood-red"
              />
              <label htmlFor="medications" className="ml-2 block text-sm text-deep-blue">
                Are you currently taking any medications?
              </label>
            </div>

            <Button type="submit" className="w-full bg-blood-red text-pure-white font-bold py-3 px-6 rounded-md hover:bg-deep-red transition-colors duration-300">
              Check Eligibility
            </Button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-md ${
                result.eligible ? 'bg-success-green/10 text-success-green' : 'bg-error-red/10 text-error-red'
              }`}
            >
              {result.message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}

