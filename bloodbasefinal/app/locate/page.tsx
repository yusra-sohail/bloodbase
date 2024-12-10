'use client';

import { useState } from 'react'; 
import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation';
import { MapPin, Phone, Clock } from 'lucide-react';

type BloodBank = {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
};

const bloodBanks: BloodBank[] = [
  {
    id: 1,
    name: 'A.O. Clinic Hospital Blood Bank',
    address: '4-F, 15/6 Dr Muhammad Ali Shah Rd, Nazimabad, Karachi, Sindh 74700',
    phone: '(+92) 8255453111',
    hours: 'Mon-Sun: 8:00 AM - 8:00 PM',
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  {
    id: 2,
    name: 'Sindh Government Hospital Liaquatabad Blood Bank',
    address: 'Sharifabad Block 1 Gulberg Town, Karachi, Karachi City, Sindh',
    phone: '(+92) 335385-1031',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    coordinates: { lat: 40.7589, lng: -73.9851 },
  },
  {
    id: 3,
    name: 'Community Blood Services',
    address: '3-C 1/7, Nazimabad Bus Stop NO.7, Nazimabad Bridge Karachi',
    phone: '(021)-11124-4622',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    coordinates: { lat: 40.7549, lng: -73.9840 },
  },
];

export default function LocatePage() {
  const [selectedBank, setSelectedBank] = useState<BloodBank | null>(null);

  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">Locate Blood Banks</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-pure-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Nearby Blood Banks</h2>
              <div className="space-y-4">
                {bloodBanks.map((bank) => (
                  <div
                    key={bank.id}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blood-red cursor-pointer transition-colors"
                    onClick={() => setSelectedBank(bank)}
                  >
                    <h3 className="font-bold text-lg mb-2">{bank.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {bank.address}
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        {bank.phone}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {bank.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-pure-white rounded-lg shadow-lg p-6 h-[600px]">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                {selectedBank ? (
                  <div>
                    <h3 className="font-bold text-lg mb-2">{selectedBank.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {selectedBank.address}
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        {selectedBank.phone}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {selectedBank.hours}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Map will be displayed here</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
