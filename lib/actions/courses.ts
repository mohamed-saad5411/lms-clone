import { createClient } from '@/lib/supabase/server'

// Get all published courses (with optional filters)
export async function getCourses({
    category,
    level,
    search,
    limit = 12,
}: {
    category?: string
    level?: string
    search?: string
    limit?: number
} = {}) {
    const supabase = await createClient()

    let query = supabase
        .from('courses')
        .select(`
      *,
      profiles ( id, full_name, avatar_url ),
      categories ( id, name, slug )
    `)
        .eq('status', 'published')
        .order('total_enrollments', { ascending: false })
        .limit(limit)

    if (category) query = query.eq('categories.slug', category)
    if (level) query = query.eq('level', level)
    if (search) query = query.ilike('title', `%${search}%`)

    const { data, error } = await query
    if (error) throw error
    return data
}

// Get single course by slug
export async function getCourseBySlug(slug: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('courses')
        .select(`
      *,
      profiles ( id, full_name, avatar_url, bio ),
      categories ( id, name, slug ),
      sections (
        id, title, position,
        lessons ( id, title, duration_minutes, position, is_preview )
      ),
      reviews (
        id, rating, comment,
        profiles ( full_name, avatar_url )
      )
    `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

    if (error) throw error
    return data
}

// Get instructor's own courses
export async function getInstructorCourses() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Unauthorized')

    const { data, error } = await supabase
        .from('courses')
        .select(`
      *,
      categories ( name )
    `)
        .eq('instructor_id', user.id)
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

// Get featured courses (top 8 by enrollment)
export async function getFeaturedCourses() {
    return getCourses({ limit: 8 })
}