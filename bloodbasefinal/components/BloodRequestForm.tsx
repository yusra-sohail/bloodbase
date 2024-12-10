'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function BloodRequestForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    unitsNeeded: '',
    hospital: '',
    contactName: '',
    contactPhone: '',
    urgency: '',
    additionalInfo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to server)
    console.log('Blood request submitted:', formData)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-pure-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gradient">Request Blood</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-deep-blue mb-1">
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="bloodType" className="block text-sm font-medium text-deep-blue mb-1">
            Blood Type Needed
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
          <label htmlFor="unitsNeeded" className="block text-sm font-medium text-deep-blue mb-1">
            Units Needed
          </label>
          <input
            type="number"
            id="unitsNeeded"
            name="unitsNeeded"
            value={formData.unitsNeeded}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="hospital" className="block text-sm font-medium text-deep-blue mb-1">
            Hospital
          </label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-deep-blue mb-1">
            Contact Name
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-deep-blue mb-1">
            Contact Phone
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          />
        </div>
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-deep-blue mb-1">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
          >
            <option value="">Select Urgency</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-deep-blue mb-1">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
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
        Submit Blood Request
      </Button>
    </motion.form>
  )
}

