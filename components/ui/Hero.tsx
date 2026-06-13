// import { getFeaturedCourses } from '@/lib/actions/courses'
// import { getCategories } from '@/lib/actions/categories'
// import Link from 'next/link'

// export default async function Hero() {
//   const [courses, categories] = await Promise.all([
//     getFeaturedCourses(),
//     getCategories(),
//   ])

//   return <>

//     <section className="bg-gray-900 text-white py-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-5xl font-bold mb-4">
//           Learn Without Limits
//         </h1>
//         <p className="text-gray-400 text-lg mb-8">
//           Start, switch, or advance your career with thousands of courses.
//         </p>

//         <Link
//           href="/courses"
//           className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//         >
//           Explore Courses
//         </Link>
//       </div>
//     </section >
//   </>
// }


"use client";

import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import img1 from '@/public/assets/imgs/429a98e1-1c34-4727-8839-e307d632c391.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-100">
      {/* Background Blur */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            <Star size={16} fill="currentColor" />
            Trusted by 30,000+ students
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Learn New Skills
            <br />
            Build Your Future.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover thousands of online courses taught by industry experts.
            Learn at your own pace and grow your career with real-world skills.
          </p>

          {/* Search */}

          <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl md:flex-row">
            <input
              type="text"
              placeholder="Search for courses..."
              className="h-14 flex-1 rounded-xl border border-gray-200 px-5 outline-none transition focus:border-violet-500"
            />

            <button className="flex h-14 items-center justify-center rounded-xl bg-violet-600 px-8 font-semibold text-white transition hover:bg-violet-700">
              Search
            </button>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold text-white transition hover:bg-violet-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold transition hover:border-violet-600 hover:text-violet-600">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl font-bold">30K+</h2>
              <p className="mt-2 text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">850+</h2>
              <p className="mt-2 text-gray-500">Courses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">120+</h2>
              <p className="mt-2 text-gray-500">Instructors</p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          {/* Main Image */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={img1}
              alt="Student Learning"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Floating Card 1 */}

          <div className="absolute -left-10 top-12 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm text-gray-500">Course Progress</p>

            <h3 className="mt-1 text-2xl font-bold">85%</h3>

            <div className="mt-3 h-2 w-40 rounded-full bg-gray-200">
              <div className="h-2 w-[85%] rounded-full bg-violet-600" />
            </div>
          </div>

          {/* Floating Card 2 */}

          <div className="absolute -bottom-8 right-5 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm text-gray-500">
              Certificates Earned
            </p>

            <h3 className="mt-2 text-3xl font-bold text-violet-600">
              25+
            </h3>
          </div>

          {/* Floating Card 3 */}

          <div className="absolute right-[-20px] top-16 rounded-2xl bg-violet-600 p-5 text-white shadow-xl">
            <p className="text-sm opacity-90">Student Rating</p>

            <div className="mt-2 flex items-center gap-2">
              <Star fill="white" size={18} />
              <span className="text-xl font-bold">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}