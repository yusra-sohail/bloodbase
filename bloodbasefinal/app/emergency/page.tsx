'use client'

import { motion } from 'framer-motion'
import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation';
import { Button } from "@/components/ui/button"

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-error-red pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-pure-white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Emergency Blood Request
        </motion.h1>
        <div className="max-w-2xl mx-auto bg-pure-white rounded-lg shadow-lg p-8">
          <p className="text-xl text-center mb-8 text-deep-red font-bold">
            This is for urgent, life-threatening situations only. If this is not an emergency, please use our standard request form.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-deep-blue mb-1">
                Blood Type Needed
              </label>
              <select
                id="bloodType"
                name="bloodType"
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
              <label htmlFor="hospital" className="block text-sm font-medium text-deep-blue mb-1">
                Hospital Name
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-deep-blue mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-red text-base"
              />
            </div>
            <Button type="submit" className="w-full bg-error-red text-pure-white font-bold py-3 px-6 rounded-md hover:bg-deep-red transition-colors duration-300">
              Submit Emergency Request
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

