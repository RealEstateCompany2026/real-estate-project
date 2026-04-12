'use client'

import type { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side — Photo */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1440&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Logo + tagline overlay */}
        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center mb-4 shadow-lg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8V24H12V18H20V24H24V8H20V14H12V8H8Z"
                fill="var(--surface-branded-action)"
              />
              <path d="M16 4L18 7H14L16 4Z" fill="var(--surface-branded-action)" opacity="0.6" />
            </svg>
          </div>
          <p className="text-white text-2xl font-light tracking-wide">
            Warm up your leads
          </p>
        </div>
      </div>

      {/* Right side — Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-[var(--surface-neutral-default)] relative">
        <div className="w-full max-w-[415px]">{children}</div>

        {/* Footer */}
        <p className="absolute bottom-6 text-xs text-[var(--text-caption)]">
          © RealAgent
        </p>
      </div>
    </div>
  )
}
