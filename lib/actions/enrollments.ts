import { createClient } from '@/lib/supabase/server'

// Check if student is enrolled in a course
export async function isEnrolled(courseId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return false

    const { data } = await supabase
        .from('enrollments')
        .select('id')
        .eq('student_id', user.id)
        .eq('course_id', courseId)
        .single()

    return !!data
}

// Enroll student in a free course
export async function enrollInCourse(courseId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const { error } = await supabase
        .from('enrollments')
        .insert({ student_id: user.id, course_id: courseId })

    if (error) throw error
}

// Get all courses the student is enrolled in
export async function getMyLearning() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const { data, error } = await supabase
        .from('enrollments')
        .select(`
      *,
      courses (
        id, title, slug, thumbnail_url, total_lessons,
        profiles ( full_name )
      )
    `)
        .eq('student_id', user.id)
        .order('enrolled_at', { ascending: false })

    if (error) throw error
    return data
}