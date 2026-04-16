'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { PasswordStrengthIndicator } from '@/components/auth/PasswordStrengthIndicator'
import { passwordSchema } from '@/lib/validations/auth'
import { Button } from '@real-estate/ui/button'
import { TextFieldOutlined } from '@real-estate/ui/text-field-outlined'
import { InlineMessage } from '@real-estate/ui/inline-message'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const isPasswordValid = passwordSchema.safeParse(password).success
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0
  const canSubmit = isPasswordValid && passwordsMatch

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return

    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push('/forgot-password/success')
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Nouveau mot de passe
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Choisissez un mot de passe sécurisé pour votre compte.
      </p>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-5">
        <TextFieldOutlined
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <TextFieldOutlined
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <PasswordStrengthIndicator password={password} />

        {error && (
          <InlineMessage type="error" message={error} />
        )}

        <Button
          type="submit"
          disabled={!canSubmit || isLoading}
          variant="primary"
          className="w-full"
        >
          {isLoading ? 'Réinitialisation…' : 'Réinitialiser le mot de passe'}
        </Button>
      </form>
    </div>
  )
}
