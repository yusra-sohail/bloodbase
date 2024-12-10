'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplet, MapPin, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface BloodRequest {
  id: string
  bloodType: string
  hospital: string
  address: string
  urgency: 'low' | 'medium' | 'high'
  timeRemaining: string
}

const bloodRequests: BloodRequest[] = [
  {
    id: '1',
    bloodType: 'A+',
    hospital: 'A.O. Clinic Hospital Blood Bank',
    address: '4-F, 15/6 Dr Muhammad Ali Shah Rd, Nazimabad, Karachi, Sindh 74700',
    urgency: 'high',
    timeRemaining: '2 hours left'
  },
  {
    id: '2',
    bloodType: 'O-',
    hospital: 'Sindh Government Hospital Liaquatabad Blood Bank',
    address: 'Sharifabad Block 1 Gulberg Town, Karachi',
    urgency: 'medium',
    timeRemaining: '5 hours left'
  },
  {
    id: '3',
    bloodType: 'B+',
    hospital: 'Memorial Hospital',
    address: 'ST -1, Block- 2, F.B Area, Azizabad, Karachi, Karachi City, Sindh, Pakistan',
    urgency: 'low',
    timeRemaining: '12 hours left'
  },
]

export function BloodRequestCards() {
  const router = useRouter()

  const handleDonateBlood = () => {
    router.push('/donate') // Redirect to donate form instead of request form
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bloodRequests.map((request) => (
        <BloodRequestCard key={request.id} request={request} onDonateBlood={handleDonateBlood} />
      ))}
    </div>
  )
}

function BloodRequestCard({ request, onDonateBlood }: { request: BloodRequest, onDonateBlood: () => void }) {
  const urgencyColors = {
    low: 'bg-success-green',
    medium: 'bg-alert-yellow',
    high: 'bg-error-red',
  }

  return (
    <motion.div
      className="bg-pure-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Droplet className="text-blood-red" size={24} />
            <span className="text-2xl font-bold text-black">{request.bloodType}</span> {/* Changed text color to black */}
          </div>
          <span className={`px-3 py-1 rounded-full text-pure-white text-sm font-semibold ${urgencyColors[request.urgency]}`}>
            {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)} Urgency
          </span>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">{request.hospital}</h3> {/* Changed text color to black */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-black">{request.address}</span> {/* Changed text color to black */}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock size={16} className="mr-1" />
          <span className="text-black">{request.timeRemaining}</span> {/* Changed text color to black */}
        </div>
        <button
          onClick={onDonateBlood}
          className="mt-auto w-full bg-blood-red text-pure-white py-2 rounded-lg font-semibold hover:bg-deep-red transition-colors duration-300"
        >
          Donate Blood
        </button>
      </div>
    </motion.div>
  )
}
