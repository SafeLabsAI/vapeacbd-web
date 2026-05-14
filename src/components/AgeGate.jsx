import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function AgeGate({ onVerified }) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const verified = sessionStorage.getItem('age_verified')
    if (!verified) setVisible(true)
    else onVerified()
  }, [onVerified])

  function handleConfirm() {
    sessionStorage.setItem('age_verified', '1')
    setVisible(false)
    onVerified()
  }

  function handleDeny() {
    window.location.href = 'https://www.google.com'
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div style={{
        background: '#111', border: '1px solid #F97316',
        borderRadius: '1rem', padding: '2.5rem',
        maxWidth: '420px', width: '100%', textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
        <h2 style={{ color: '#F97316', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {t('ageGate.title')}
        </h2>
        <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '0.95rem' }}>
          {t('ageGate.subtitle')}
        </p>
        <button onClick={handleConfirm} style={{
          display: 'block', width: '100%', padding: '0.85rem',
          background: '#F97316', color: '#000', fontWeight: 700,
          borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
          fontSize: '1rem', marginBottom: '0.75rem',
        }}>
          {t('ageGate.confirm')}
        </button>
        <button onClick={handleDeny} style={{
          display: 'block', width: '100%', padding: '0.85rem',
          background: 'transparent', color: '#666', fontWeight: 500,
          borderRadius: '0.5rem', border: '1px solid #333', cursor: 'pointer',
          fontSize: '0.9rem',
        }}>
          {t('ageGate.deny')}
        </button>
        <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '1.5rem', lineHeight: 1.5 }}>
          {t('ageGate.legal')}
        </p>
      </div>
    </div>
  )
}
