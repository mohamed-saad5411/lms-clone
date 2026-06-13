// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { createClient } from '@/lib/supabase/client'
// import { enrollInCourse } from '@/lib/actions/enrollments'

// type Props = {
//   courseId: string
//   courseSlug: string
//   price: number
//   isFree: boolean
//   alreadyEnrolled: boolean
// }

// export default function EnrollButton({
//   courseId, courseSlug, price, isFree, alreadyEnrolled
// }: Props) {
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)

//   async function handleEnroll() {
//     setLoading(true)

//     const supabase = createClient()
//     const { data: { user } } = await supabase.auth.getUser()

//     if (!user) {
//       router.push('/login')
//       return
//     }

//     if (isFree) {
//       await enrollInCourse(courseId)
//       router.push(`/learn/${courseId}`)
//       return
//     }

//     // Paid → go to Stripe (Step 6)
//     router.push(`/checkout/${courseId}`)
//     setLoading(false)
//   }

//   if (alreadyEnrolled) {
//     return (
//       <button
//         onClick={() => router.push(`/learn/${courseId}`)}
//         className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//       >
//         Go to Course →
//       </button>
//     )
//   }

//   return (
//     <button
//       onClick={handleEnroll}
//       disabled={loading}
//       className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 transition"
//     >
//       {loading ? 'Loading...' : isFree ? 'Enroll for Free' : `Buy for $${price}`}
//     </button>
//   )
// }