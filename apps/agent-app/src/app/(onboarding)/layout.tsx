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

  // Check if onboarding is already completed → skip to dashboard
  const { data: agent } = await supabase
    .from('Agent')
    .select('onboardingCompleted')
    .eq('userId', user.id)
    .single()

  if (agent?.onboardingCompleted) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl px-6 py-12">{children}</div>
    </div>
  )
}
