'use client';

import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation'
import { DonateForm } from '/workspaces/bloodbase/bloodbasefinal/components/DonateForm'

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">Donate Blood, Save Lives</h1>
        <DonateForm />
      </div>
    </main>
  )
}

