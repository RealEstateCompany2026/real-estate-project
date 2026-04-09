import { Sidebar } from '@/components/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--color-grey-ultra-background)]">
      <Sidebar />
      <main className="flex-1 pl-[90px]">{children}</main>
    </div>
  )
}
