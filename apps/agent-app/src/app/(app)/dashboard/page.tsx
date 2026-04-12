import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="p-10 max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-bold text-content-headings">
        Bonjour{user?.email ? `, ${user.email.split('@')[0]}` : ''} !
      </h1>
      <p className="mt-2 text-content-subtle">
        Bienvenue sur votre espace Agent Immobilier.
      </p>

      {/* Placeholder dashboard — sera enrichi avec les vrais widgets */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Clients actifs', 'Biens en portefeuille', 'Affaires en cours'].map((label) => (
          <div
            key={label}
            className="bg-surface-neutral-default rounded-xl border border-edge-default p-6"
          >
            <p className="text-sm text-content-subtle">{label}</p>
            <p className="mt-2 text-3xl font-bold text-content-headings">—</p>
          </div>
        ))}
      </div>
    </div>
  )
}
