import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(10, 'Au moins 10 caractères')
  .regex(/[A-Z]/, 'Une lettre majuscule requise')
  .regex(/[a-z]/, 'Une lettre minuscule requise')
  .regex(/[0-9]/, 'Un chiffre requis')
  .regex(/[^A-Za-z0-9]/, 'Un caractère spécial requis (@, #, $, etc.)')

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
})

export const signupSchema = z
  .object({
    email: z.string().email('Email invalide'),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email('Email invalide'),
})

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export const profileSoloSchema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  mobilePhone: z.string().min(10, 'Numéro de téléphone invalide'),
  rsacNumber: z.string().min(1, 'Numéro de carte professionnelle requis'),
})

export const profileAgencySchema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  mobilePhone: z.string().min(10, 'Numéro de téléphone invalide'),
  agencyName: z.string().min(1, "Nom de l'agence requis"),
  siret: z.string().length(14, 'Le SIRET doit contenir 14 chiffres'),
  address: z.string().min(1, 'Adresse requise'),
  city: z.string().min(1, 'Ville requise'),
  postalCode: z.string().length(5, 'Code postal à 5 chiffres'),
})

export const inviteSchema = z.object({
  email: z.string().email('Email invalide'),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type ProfileSoloFormData = z.infer<typeof profileSoloSchema>
export type ProfileAgencyFormData = z.infer<typeof profileAgencySchema>
export type InviteFormData = z.infer<typeof inviteSchema>
