import { getCourses } from '@/lib/actions/courses'
import { getCategories } from '@/lib/actions/categories'
import CourseCard from '@/components/shared/CourseCard'
import Link from 'next/link'

type Props = {
    searchParams: { category?: string; level?: string; search?: string }
}

export default async function CoursesPage({ searchParams }: Props) {
    const [courses, categories] = await Promise.all([
        getCourses({
            category: searchParams.category,
            level: searchParams.level,
            search: searchParams.search,
            limit: 20,
        }),
        getCategories(),
    ])

    return <>
        <main className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">All Courses</h1>

            <div className="flex gap-8">
                {/* Sidebar Filters */}
                <aside className="w-56 shrink-0">
                    <div className="mb-6">
                        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">
                            Category
                        </h3>
                        <div className="space-y-2">

                            <Link href="/courses"
                                className={`block text-sm py-1 ${!searchParams.category ? 'font-semibold' : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                All
                            </Link>
                            {categories.map(cat => (

                                <Link key={cat.id}
                                    href={`/courses?category=${cat.slug}`}
                                    className={`block text-sm py-1 ${searchParams.category === cat.slug
                                        ? 'font-semibold'
                                        : 'text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {cat.icon} {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">
                            Level
                        </h3>
                        <div className="space-y-2">
                            {['beginner', 'intermediate', 'advanced'].map(level => (

                                <Link key={level}
                                    href={`/courses?level=${level}`}
                                    className={`block text-sm py-1 capitalize ${searchParams.level === level
                                        ? 'font-semibold'
                                        : 'text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {level}
                                </Link>
                            ))}
                        </div>
                    </div >
                </aside >

                {/* Courses Grid */}
                < div className="flex-1" >
                    {
                        courses.length === 0 ? (
                            <div className="text-center py-20 text-gray-400">
                                No courses found.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map(course => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        )
                    }
                </div >
            </div >
        </main >
    </>
}