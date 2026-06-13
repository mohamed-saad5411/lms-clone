
// import { getCourseBySlug } from '@/lib/actions/courses'
// import { isEnrolled } from '@/lib/actions/enrollments'
// import { notFound } from 'next/navigation'
// import EnrollButton from './EnrollButton'
// import Image from 'next/image'

// type Props = { params: { slug: string } }

// export default async function CourseDetailPage({ params }: Props) {
//     const [course, enrolled] = await Promise.all([
//         getCourseBySlug(params.slug).catch(() => null),
//         isEnrolled('').catch(() => false),
//     ])

//     if (!course) notFound()

//     const alreadyEnrolled = await isEnrolled(course.id)

//     const totalLessons = course.sections?.reduce(
//         (acc, s) => acc + (s.lessons?.length ?? 0), 0
//     ) ?? 0

//     const totalMinutes = course.sections?.reduce(
//         (acc, s) => acc + s.lessons?.reduce((a, l) => a + (l.duration_minutes ?? 0), 0),
//         0
//     ) ?? 0

//     return (
//         <main className="max-w-6xl mx-auto px-6 py-10">
//             <div className="flex flex-col lg:flex-row gap-10">

//                 {/* Left — Course Info */}
//                 <div className="flex-1">
//                     <p className="text-sm text-gray-500 mb-2 capitalize">{course.level}</p>
//                     <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
//                     <p className="text-gray-600 mb-4">{course.short_description}</p>

//                     {/* Stats */}
//                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
//                         <span>⭐ {course.rating?.toFixed(1)}</span>
//                         <span>👥 {course.total_enrollments} students</span>
//                         <span>🎬 {totalLessons} lessons</span>
//                         <span>⏱ {totalMinutes} min</span>
//                     </div>

//                     {/* Instructor */}
//                     <div className="flex items-center gap-3 mb-8">
//                         <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
//                             {course.profiles?.avatar_url && (
//                                 <Image
//                                     src={course.profiles.avatar_url}
//                                     alt={course.profiles.full_name}
//                                     fill className="object-cover"
//                                 />
//                             )}
//                         </div>
//                         <div>
//                             <p className="text-xs text-gray-400">Instructor</p>
//                             <p className="text-sm font-medium">{course.profiles?.full_name}</p>
//                         </div>
//                     </div>

//                     {/* Curriculum */}
//                     <div>
//                         <h2 className="text-xl font-bold mb-4">Course Content</h2>
//                         <div className="space-y-3">
//                             {course.sections?.sort((a, b) => a.position - b.position).map(section => (
//                                 <div key={section.id} className="border rounded-lg overflow-hidden">
//                                     <div className="bg-gray-50 px-4 py-3 font-semibold text-sm">
//                                         {section.title}
//                                     </div>
//                                     <div className="divide-y">
//                                         {section.lessons?.sort((a, b) => a.position - b.position).map(lesson => (
//                                             <div key={lesson.id} className="px-4 py-3 flex items-center justify-between text-sm">
//                                                 <div className="flex items-center gap-2">
//                                                     <span>{lesson.is_preview ? '▶️' : '🔒'}</span>
//                                                     <span className={lesson.is_preview ? '' : 'text-gray-400'}>
//                                                         {lesson.title}
//                                                     </span>
//                                                 </div>
//                                                 <span className="text-gray-400 text-xs">
//                                                     {lesson.duration_minutes}m
//                                                 </span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right — Buy Card */}
//                 <div className="lg:w-80 shrink-0">
//                     <div className="border rounded-xl overflow-hidden shadow-lg sticky top-6">
//                         <div className="relative h-48 bg-gray-100">
//                             {course.thumbnail_url && (
//                                 <Image
//                                     src={course.thumbnail_url}
//                                     alt={course.title}
//                                     fill className="object-cover"
//                                 />
//                             )}
//                         </div>
//                         <div className="p-6">
//                             <p className="text-3xl font-bold mb-4">
//                                 {course.is_free ? (
//                                     <span className="text-green-600">Free</span>
//                                 ) : (
//                                     `$${course.price}`
//                                 )}
//                             </p>
//                             <EnrollButton
//                                 courseId={course.id}
//                                 courseSlug={course.slug}
//                                 price={course.price}
//                                 isFree={course.is_free}
//                                 alreadyEnrolled={alreadyEnrolled}
//                             />
//                             <p className="text-xs text-center text-gray-400 mt-3">
//                                 30-Day Money-Back Guarantee
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </main>
//     )
// }