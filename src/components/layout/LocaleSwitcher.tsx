'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (next: string) => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      padding: '3px',
      opacity: isPending ? 0.6 : 1,
      transition: 'opacity 0.2s',
    }}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          disabled={isPending}
          style={{
            padding: '4px 10px',
            borderRadius: '4px',
            background: locale === l ? 'rgba(0,180,216,0.15)' : 'transparent',
            border: locale === l ? '1px solid rgba(0,180,216,0.3)' : '1px solid transparent',
            color: locale === l ? 'var(--accent-primary)' : 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 500,
            cursor: locale === l || isPending ? 'default' : 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.2s ease',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
