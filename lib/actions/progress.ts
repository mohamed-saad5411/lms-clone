import { createClient } from '@/lib/supabase/server'

// Get progress for all lessons in a course
export async function getCourseProgress(courseId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data, error } = await supabase
        .from('lesson_progress')
        .select('lesson_id, is_completed, watched_seconds')
        .eq('student_id', user.id)
        .eq('course_id', courseId)

    if (error) throw error
    return data
}

// Mark a lesson as complete
export async function markLessonComplete(lessonId: string, courseId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const { error } = await supabase
        .from('lesson_progress')
        .upsert({
            student_id: user.id,
            lesson_id: lessonId,
            course_id: courseId,
            is_completed: true,
            completed_at: new Date().toISOString(),
        }, { onConflict: 'student_id,lesson_id' })

    if (error) throw error
}

// Update watched seconds (called every 10s while watching)
export async function updateWatchedSeconds(
    lessonId: string,
    courseId: string,
    seconds: number
) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase
        .from('lesson_progress')
        .upsert({
            student_id: user.id,
            lesson_id: lessonId,
            course_id: courseId,
            watched_seconds: seconds,
        }, { onConflict: 'student_id,lesson_id' })
}

// Calculate overall course completion percentage
export async function getCourseCompletionPercent(courseId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return 0

    const [{ count: total }, { count: completed }] = await Promise.all([
        supabase
            .from('lessons')
            .select('*', { count: 'exact', head: true })
            .eq('course_id', courseId),
        supabase
            .from('lesson_progress')
            .select('*', { count: 'exact', head: true })
            .eq('course_id', courseId)
            .eq('student_id', user.id)
            .eq('is_completed', true),
    ])

    if (!total || total === 0) return 0
    return Math.round(((completed ?? 0) / total) * 100)
}