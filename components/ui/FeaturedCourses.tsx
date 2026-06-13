// import { getFeaturedCourses } from '@/lib/actions/courses'
// import { getCategories } from '@/lib/actions/categories'
// import Link from 'next/link'
// import CourseCard from '../shared/CourseCard'


// export default async function FeaturedCourses() {
//   const [courses, categories] = await Promise.all([
//     getFeaturedCourses(),
//     getCategories(),
//   ])

//   return <>
//     <section className="py-12 px-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Most Popular Courses</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {courses.map(course => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </section>
//   </>
// }


import CourseCard from "../shared/CourseCard";
import img1 from '@/public/assets/imgs/ai-agents.png'
import img2 from '@/public/assets/imgs/prompt-engineering.png'
import img3 from '@/public/assets/imgs/data-science.png'
import img4 from '@/public/assets/imgs/machine-learning.png'
const courses = [
  {
    image: img1,
    title: "React.js Complete Bootcamp From Zero To Hero",
    instructor: "John Anderson",
    rating: 4.9,
    students: "2,540",
    duration: "18 Hours",
    price: "$29",
    oldPrice: "$89",
    badge: "Best Seller",
  },

  {
    image: img2,
    title: "Master Next.js 15 & Full Stack Development",
    instructor: "Sarah Smith",
    rating: 4.8,
    students: "1,920",
    duration: "22 Hours",
    price: "$35",
    oldPrice: "$99",
    badge: "New",
  },

  {
    image: img3,
    title: "Complete UI UX Design Bootcamp 2026",
    instructor: "Emma Brown",
    rating: 4.7,
    students: "980",
    duration: "14 Hours",
    price: "$22",
    oldPrice: "$70",
  },

  {
    image: img4,
    title: "Python for Beginners & Data Science",
    instructor: "Michael Lee",
    rating: 4.9,
    students: "4,300",
    duration: "25 Hours",
    price: "$39",
    oldPrice: "$110",
    badge: "Hot",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-semibold text-violet-600">
              Featured Courses
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Learn From The Best
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Explore our most popular courses taught by experienced
              instructors.
            </p>
          </div>

          <button className="hidden rounded-xl border px-6 py-3 font-semibold transition hover:border-violet-600 hover:text-violet-600 md:block">
            View All Courses
          </button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}