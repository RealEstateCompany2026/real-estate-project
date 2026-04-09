import { redirect } from "next/navigation"

// Root page redirects to /login (middleware handles auth-based routing)
export default function HomePage() {
  redirect('/login')
}
