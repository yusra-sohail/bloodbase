'use client';

import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation'

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const compatibility = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  'AB-': ['A-', 'B-', 'AB-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-'],
}

export default function CompatibilityPage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">Blood Type Compatibility Chart</h1>
        <div className="bg-pure-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border bg-blood-red text-pure-white">Recipient ↓ / Donor →</th>
                  {bloodTypes.map(type => (
                    <th key={type} className="p-4 border bg-blood-red text-pure-white">{type}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloodTypes.map(recipient => (
                  <tr key={recipient}>
                    <td className="p-4 border bg-blood-red text-pure-white font-bold">{recipient}</td>
                    {bloodTypes.map(donor => (
                      <td
                        key={donor}
                        className={`p-4 border text-center ${
                          compatibility[recipient as keyof typeof compatibility].includes(donor)
                            ? 'bg-success-green text-pure-white'
                            : 'bg-error-red/10'
                        }`}
                      >
                        {compatibility[recipient as keyof typeof compatibility].includes(donor) ? '✓' : '×'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">How to Read This Chart:</h3>
            <p className="text-gray-700">
              1. Find your blood type in the left column (Recipient)<br />
              2. Look across the row to see which blood types you can receive from (Donor)<br />
              3. ✓ means compatible, × means incompatible
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}