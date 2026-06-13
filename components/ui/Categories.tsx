// import { getFeaturedCourses } from '@/lib/actions/courses'
// import { getCategories } from '@/lib/actions/categories'
// import Link from 'next/link'

// export default async function Categories() {
//   const [courses, categories] = await Promise.all([
//     getFeaturedCourses(),
//     getCategories(),
//   ])

//   return <>
//     <section className="py-12 px-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
//       <div className="flex gap-3 flex-wrap">
//         {categories.map(cat => (

//           <Link key={cat.id}
//             href={`/courses?category=${cat.slug}`}
//             className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition"
//           >
//             <span>{cat.icon}</span>
//             <span>{cat.name}</span>
//           </Link>
//         ))}
//       </div>
//     </section >
//   </>
// }

import {
  Code2,
  Palette,
  Briefcase,
  Camera,
  Cpu,
  ChartColumn,
  Music4,
  HeartPulse,
} from "lucide-react";

const categories = [
  {
    title: "Development",
    courses: "420 Courses",
    icon: Code2,
  },
  {
    title: "Design",
    courses: "210 Courses",
    icon: Palette,
  },
  {
    title: "Business",
    courses: "180 Courses",
    icon: Briefcase,
  },
  {
    title: "Photography",
    courses: "95 Courses",
    icon: Camera,
  },
  {
    title: "AI & Data",
    courses: "165 Courses",
    icon: Cpu,
  },
  {
    title: "Marketing",
    courses: "140 Courses",
    icon: ChartColumn,
  },
  {
    title: "Music",
    courses: "75 Courses",
    icon: Music4,
  },
  {
    title: "Health",
    courses: "120 Courses",
    icon: HeartPulse,
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <span className="font-semibold text-violet-600">
            Categories
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Explore Top Categories
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500">
            Discover thousands of expert-led courses across the
            world's most in-demand skills.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group cursor-pointer rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {category.courses}
                </p>

                <button className="mt-8 font-semibold text-violet-600 transition group-hover:translate-x-2">
                  Explore →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}