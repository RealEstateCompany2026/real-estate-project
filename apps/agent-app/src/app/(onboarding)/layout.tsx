import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Not authenticated → login
  if (!user) {
    redirect('/login')
  }

  // Resolve User.id from auth user (3-identity architecture: auth.users → User → Agent)
  const { data: appUser } = await supabase
    .from('User')
    .select('id')
    .eq('supabase_id', user.id)
    .single()

  // Check if onboarding is already completed → skip to dashboard
  const { data: agent } = appUser
    ? await supabase
        .from('Agent')
        .select('onboardingCompleted')
        .eq('userId', appUser.id)
        .single()
    : { data: null }

  if (agent?.onboardingCompleted) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl px-6 py-12">{children}</div>
    </div>
  )
}
