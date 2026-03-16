import { db } from "@real-estate/database"
import { PropertyCard } from "@real-estate/ui/property-card"
import { Button } from "@real-estate/ui/button"
import { Plus } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function AgentDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // The middleware should handle this, but double-check for safety
  if (!user) {
    redirect('/auth/login')
  }

  // Resolve the agent from our DB using the authenticated user's email
  const agentUser = await db.user.findUnique({
    where: { email: user.email! },
  })

  if (!agentUser) {
    // First-time login: account exists in Supabase Auth but not yet in our DB.
    // The Supabase trigger (see supabase/migrations) should handle this automatically.
    // If it hasn't fired yet, show a graceful waiting screen.
    return (
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="text-center">
          <p className="text-neutral-anthracite font-semibold mb-2">
            Initialisation de votre compte…
          </p>
          <p className="text-neutral-grey-bold text-sm">
            Actualisez la page dans quelques instants. Si le problème persiste,
            contactez votre administrateur.
          </p>
        </div>
      </div>
    )
  }

  const properties = await db.property.findMany({
    include: {
      deals: {
        include: { saleAnalyses: true },
      },
      owner: true,
      maintenanceLogs: true,
      documents: true,
      triggers: true,
    },
  })

  return (
    <div className="w-full text-neutral-anthracite p-10 max-w-[1600px] mx-auto">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sans">
            Bonjour, {agentUser.name ?? agentUser.email.split('@')[0]}
          </h1>
          <p className="text-neutral-grey-bold mt-2">
            Bienvenue sur votre espace Agent Immobilier.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Générer Rapport</Button>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Nouveau Dossier
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6 font-sans">Biens Immobiliers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((prop) => {
            const activeSaleDeal = prop.deals.find((d) => d.type === 'VENTE')
            const saleAnalysis   = activeSaleDeal?.saleAnalyses[0]
            const formattedTriggers = prop.triggers.map((t) => ({
              id: t.id,
              type: t.type,
              description: t.description,
            }))

            return (
              <PropertyCard
                key={prop.id}
                variant="agent"
                property={{
                  address: prop.address,
                  estimatedValue: saleAnalysis?.estimatedValue ?? undefined,
                  triggers: formattedTriggers,
                }}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
