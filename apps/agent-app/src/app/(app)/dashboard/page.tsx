import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="p-10 max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-bold text-[var(--color-anthracite-textes)]">
        Bonjour{user?.email ? `, ${user.email.split('@')[0]}` : ''} !
      </h1>
      <p className="mt-2 text-[var(--color-grey-bold-textes)]">
        Bienvenue sur votre espace Agent Immobilier.
      </p>

      {/* Placeholder dashboard — sera enrichi avec les vrais widgets */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Clients actifs', 'Biens en portefeuille', 'Affaires en cours'].map((label) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-[var(--color-grey-light-couleur-primaire)] p-6"
          >
            <p className="text-sm text-[var(--color-grey-bold-textes)]">{label}</p>
            <p className="mt-2 text-3xl font-bold text-[var(--color-anthracite-textes)]">—</p>
          </div>
        ))}
      </div>
    </div>
  )
}
