// import React from 'react'

// export default function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-violet-400">
              LearnHub
            </h2>

            <p className="mt-6 text-gray-400">
              Learn new skills, advance your career, and achieve
              your goals through high-quality online education.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Courses
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Development</Link></li>
              <li><Link href="#">Design</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="#">Marketing</Link></li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Terms</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 LearnHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}