'use client';

import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation'
import { BloodRequestForm } from '/workspaces/bloodbase/bloodbasefinal/components/BloodRequestForm'

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">Request Blood</h1>
        <BloodRequestForm />
      </div>
    </main>
  )
}

