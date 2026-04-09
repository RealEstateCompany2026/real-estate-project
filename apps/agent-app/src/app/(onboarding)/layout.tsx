export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl px-6 py-12">{children}</div>
    </div>
  )
}
