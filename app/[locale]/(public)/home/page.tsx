// app/[locale]/(public)/home/page.tsx
'use client'
import { useLocale } from '@/lib/useLocale'

export default function HomePage() {
  const { t } = useLocale()

  return (
    <div>
      <h1>{t('hpg.home')}</h1>
      <h2>{t('hpg.page')}</h2>
    </div>
  )
}
