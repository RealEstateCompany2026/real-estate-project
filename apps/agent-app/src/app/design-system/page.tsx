import { notFound } from 'next/navigation'
import { DesignSystemClient } from './DesignSystemClient'

export const dynamic = 'force-dynamic'

export default function DesignSystemPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound()
  }
  return <DesignSystemClient />
}
