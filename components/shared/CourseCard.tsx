// import Link from 'next/link'
// import Image from 'next/image'

// type Props = {
//   course: {
//     id: string
//     slug: string
//     title: string
//     thumbnail_url: string | null
//     price: number
//     is_free: boolean
//     rating: number
//     total_enrollments: number
//     level: string | null
//     profiles: { full_name: string; avatar_url: string | null } | null
//   }
// }

// export default function CourseCard({ course }: Props) {
//   return (
//     <Link href={`/courses/${course.slug}`}>
//       <div className="border rounded-xl overflow-hidden hover:shadow-md transition group cursor-pointer">
//         {/* Thumbnail */}
//         <div className="relative h-44 bg-gray-100">
//           {course.thumbnail_url ? (
//             <Image
//               src={course.thumbnail_url}
//               alt={course.title}
//               fill
//               className="object-cover group-hover:scale-105 transition duration-300"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
//               No Image
//             </div>
//           )}
//         </div>

//         {/* Info */}
//         <div className="p-4">
//           <h3 className="font-semibold text-sm line-clamp-2 mb-1">
//             {course.title}
//           </h3>
//           <p className="text-xs text-gray-500 mb-2">
//             {course.profiles?.full_name}
//           </p>

//           {/* Rating */}
//           <div className="flex items-center gap-1 mb-2">
//             <span className="text-yellow-500 font-bold text-xs">
//               {course.rating?.toFixed(1) ?? '0.0'}
//             </span>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map(star => (
//                 <svg
//                   key={star}
//                   className={`w-3 h-3 ${star <= Math.round(course.rating)
//                       ? 'text-yellow-400'
//                       : 'text-gray-300'
//                     }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-xs text-gray-400">
//               ({course.total_enrollments})
//             </span>
//           </div>

//           {/* Price */}
//           <p className="font-bold text-sm">
//             {course.is_free ? (
//               <span className="text-green-600">Free</span>
//             ) : (
//               `$${course.price}`
//             )}
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

import Image from "next/image";
import { Star, Users, Clock } from "lucide-react";

interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  students: string;
  duration: string;
  price: string;
  oldPrice: string;
  badge?: string;
}

export default function CourseCard({
  image,
  title,
  instructor,
  rating,
  students,
  duration,
  price,
  oldPrice,
  badge,
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="text-sm text-violet-600 font-semibold">
          {instructor}
        </p>

        <h3 className="mt-3 line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Rating */}

        <div className="mt-5 flex items-center gap-2">
          <Star
            size={18}
            fill="#FBBF24"
            className="text-yellow-400"
          />

          <span className="font-semibold">{rating}</span>

          <span className="text-gray-400">
            ({students})
          </span>
        </div>

        {/* Info */}

        <div className="mt-5 flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {duration}
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} />
            12k+
          </div>
        </div>

        {/* Price */}

        <div className="mt-6 flex items-center gap-3">
          <span className="text-2xl font-bold text-violet-600">
            {price}
          </span>

          <span className="text-gray-400 line-through">
            {oldPrice}
          </span>
        </div>

        <button className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
          Enroll Now
        </button>
      </div>
    </div>
  );
}