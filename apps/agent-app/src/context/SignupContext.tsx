'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type PersonaType = 'solo' | 'agency' | null

interface SignupState {
  email: string
  persona: PersonaType
  setEmail: (email: string) => void
  setPersona: (persona: PersonaType) => void
}

const SignupContext = createContext<SignupState | null>(null)

export function SignupProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState('')
  const [persona, setPersona] = useState<PersonaType>(null)

  return (
    <SignupContext.Provider value={{ email, persona, setEmail, setPersona }}>
      {children}
    </SignupContext.Provider>
  )
}

export function useSignup() {
  const ctx = useContext(SignupContext)
  if (!ctx) throw new Error('useSignup must be used within SignupProvider')
  return ctx
}
