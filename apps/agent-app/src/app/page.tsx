import { db } from "@real-estate/database";
import { PropertyCard } from "@real-estate/ui/property-card";

export default async function AgentDashboard() {
  // Query to find the Agent User and all available properties
  const agentUser = await db.user.findFirst({
    where: { email: 'agent@realestate.com' }
  });

  if (!agentUser) {
    return <div>Pas d'agent trouvé. Veuillez jouer le script de seed.</div>;
  }

  const properties = await db.property.findMany({
    include: {
      deals: {
        include: {
          saleAnalyses: true
        }
      },
      owner: true,
      maintenanceLogs: true,
      documents: true,
      triggers: true
    }
  });

  return (
    <div className="min-h-screen bg-background text-neutral-anthracite p-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold font-sans">Bonjour, {agentUser.name}</h1>
        <p className="text-neutral-grey-bold mt-2">Bienvenue sur votre espace Agent Immobilier.</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6 font-sans">Biens Immobiliers disponibles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((prop) => {
            // Find active Sale Analysis to render estimated values for Agent view
            const activeSaleDeal = prop.deals.find(d => d.type === 'VENTE');
            const saleAnalysis = activeSaleDeal?.saleAnalyses[0];

            // Normalize triggers from Prisma to PropertyCard UI
            const formattedTriggers = prop.triggers.map(t => ({
              id: t.id,
              type: t.type,
              description: t.description
            }));

            // For Agent view, PropertyCard expects estimatedValue from db
            return (
              <PropertyCard
                key={prop.id}
                variant="agent"
                property={{
                  address: prop.address,
                  estimatedValue: saleAnalysis?.estimatedValue || undefined,
                  triggers: formattedTriggers,
                }}
              />
            )
          })}
        </div>
      </section>
    </div>
  );
}
