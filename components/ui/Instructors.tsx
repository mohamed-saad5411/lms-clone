
import InstructorCard from "./InstructorCard";

import img1 from '@/public/assets/imgs/6338239_c936_3.jpg'
import img2 from '@/public/assets/imgs/5680538_8c34_12.jpg'
import img3 from '@/public/assets/imgs/Alvin_Lim.jpeg'


const instructors = [
  {
    image: img1,
    name: "Ahmed Hassan",
    role: "Senior React Developer",
    students: "18K",
    rating: 4.9,
  },
  {
    image: img2,
    name: "Sarah Ali",
    role: "UI UX Designer",
    students: "15K",
    rating: 4.8,
  },
  {
    image: img3,
    name: "John Smith",
    role: "Python Instructor",
    students: "22K",
    rating: 4.9,
  },
  {
    image: img2,
    name: "Emily Brown",
    role: "Next.js Expert",
    students: "19K",
    rating: 5.0,
  },
];

export default function TopInstructors() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-semibold text-violet-600">
              Instructors
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Learn From Top Experts
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Meet experienced instructors trusted by thousands of students.
            </p>
          </div>

          <button className="hidden rounded-xl border px-6 py-3 font-semibold md:block">
            View All
          </button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.name}
              {...instructor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}