import TestimonialCard from "./TestimonialCard";

import img1 from '@/public/assets/imgs/William_A_Wachlin.jpeg'
import img2 from '@/public/assets/imgs/cris-m.webp'
import img3 from '@/public/assets/imgs/ben-c.webp'

const reviews = [
  {
    image: img1,
    name: "Mohamed Ali",
    role: "Frontend Developer",
    review:
      "The courses completely changed my career. The instructors explain everything clearly and the projects are amazing.",
  },
  {
    image: img2,
    name: "Emily Johnson",
    role: "UI Designer",
    review:
      "One of the best online learning platforms I've ever used. Highly recommended for beginners and professionals.",
  },
  {
    image: img3,
    name: "Ahmed Salah",
    role: "Software Engineer",
    review:
      "Excellent instructors, beautiful UI, and practical content. Worth every dollar.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold text-violet-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What Our Students Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Thousands of learners have transformed their careers with our courses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.name}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}