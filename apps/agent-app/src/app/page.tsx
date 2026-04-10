import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check onboarding status
  const { data: agent } = await supabase
    .from('Agent')
    .select('onboardingCompleted')
    .eq('userId', user.id)
    .single()

  if (!agent?.onboardingCompleted) {
    redirect('/tour')
  }

  redirect('/dashboard')
}
