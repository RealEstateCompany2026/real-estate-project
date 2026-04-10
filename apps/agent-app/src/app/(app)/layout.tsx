import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Sidebar } from '@/components/Sidebar'
import { ToastProvider } from '@/components/ui/Toast'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
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

  // Onboarding not completed → redirect to tour
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

  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-[var(--color-grey-ultra-background)]">
        <Sidebar />
        <main className="flex-1 pl-[90px]">{children}</main>
      </div>
    </ToastProvider>
  )
}
