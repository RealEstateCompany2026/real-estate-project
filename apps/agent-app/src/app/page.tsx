import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Resolve User.id from auth user (3-identity architecture: auth.users → User → Agent)
  const { data: appUser } = await supabase
    .from('User')
    .select('id')
    .eq('supabase_id', user.id)
    .single()

  // Check onboarding status
  const { data: agent } = appUser
    ? await supabase
        .from('Agent')
        .select('onboardingCompleted')
        .eq('userId', appUser.id)
        .single()
    : { data: null }

  if (!agent?.onboardingCompleted) {
    redirect('/tour')
  }

  redirect('/dashboard')
}
