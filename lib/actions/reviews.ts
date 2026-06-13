import { createClient } from '@/lib/supabase/server'

export async function addReview(
  courseId: string,
  rating: number,
  comment: string
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const { error } = await supabase
    .from('reviews')
    .upsert({
      student_id: user.id,
      course_id: courseId,
      rating,
      comment,
    }, { onConflict: 'student_id,course_id' })

  if (error) throw error
}