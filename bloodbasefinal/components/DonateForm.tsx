'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export const DonateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    lastDonation: '',
    medicalConditions: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //i have to work here
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-pure-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gradient">Donate Blood</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-deep-blue mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-deep-blue mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-deep-blue mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="bloodType" className="block text-sm font-medium text-deep-blue mb-1">
            Blood Type
          </label>
          <select
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
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
        <div className="md:col-span-2">
          <label htmlFor="medicalConditions" className="block text-sm font-medium text-deep-blue mb-1">
            Medical Conditions (if any)
          </label>
          <textarea
            id="medicalConditions"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          ></textarea>
        </div>
      </div>
      <Button
        type="submit"
        className="mt-6 w-full bg-blood-red text-pure-white font-bold py-3 px-6 rounded-md hover:bg-deep-red transition-colors duration-300"
      >
        Submit Donation Request
      </Button>
    </motion.form>
  )
}

