'use client';

import { BackgroundAnimation } from '/workspaces/bloodbase/bloodbasefinal/components/BackgroundAnimation'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <BackgroundAnimation />
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">About Blood-Base</h1>
        <div className="bg-pure-white rounded-lg shadow-lg p-8">
          <p className="text-lg mb-6">
            Blood-Base is a cutting-edge platform dedicated to connecting blood donors with those in need. Our mission is to save lives by making the blood donation process as efficient and accessible as possible.
          </p>
          <p className="text-lg mb-6">
            Founded in 2023, our team of passionate healthcare professionals and tech experts work tirelessly to ensure that every drop of donated blood reaches those who need it most.
          </p>
          <p className="text-lg mb-6">
            We believe in the power of community and technology to make a difference. By streamlining the blood donation process and providing real-time information on blood needs, we aim to create a world where no one dies due to a lack of blood.
          </p>
          <p className="text-lg">
            Join us in our mission to save lives. Whether you're a donor, a healthcare professional, or someone in need, Blood-Base is here to support you every step of the way.
          </p>
        </div>
      </div>
    </main>
  )
}

