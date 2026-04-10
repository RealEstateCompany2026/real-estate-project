import { Sidebar } from '@/components/Sidebar'
import { ToastProvider } from '@/components/ui/Toast'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-[var(--color-grey-ultra-background)]">
        <Sidebar />
        <main className="flex-1 pl-[90px]">{children}</main>
      </div>
    </ToastProvider>
  )
}
