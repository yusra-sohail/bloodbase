

import { Hero } from '/workspaces/bloodbase/bloodbasefinal/components/Hero'
import { BloodRequestCards } from '/workspaces/bloodbase/bloodbasefinal/components/BloodRequestCards'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Urgent Blood Requests</h2>
        <BloodRequestCards />
        <div className="mt-12 text-center">
          <Link href="/donate" className="bg-blood-red text-pure-white text-xl px-8 py-4 rounded-full font-bold inline-block hover:bg-deep-red transition-colors duration-300">
            Donate Blood Now
          </Link>
        </div>
      </section>
    </main>
  )
}

