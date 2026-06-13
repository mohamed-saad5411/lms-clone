import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// npx supabase gen types typescript --project-id wlmreidmbngbnhvoqogf > types/database.types.ts