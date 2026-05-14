import { useTranslation } from 'react-i18next'

export default function Differentiators() {
  const { t } = useTranslation()
  const items = t('differentiators.items', { returnObjects: true })

  return (
    <section style={{
      background: '#0d0d0d', padding: '5rem 1.5rem',
      borderTop: '1px solid #1a1a1a',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 800, textAlign: 'center', marginBottom: '3rem',
        }}>
          {t('differentiators.title')}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.5rem',
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #1f1f1f',
              borderRadius: '0.75rem', padding: '1.75rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1f1f1f'}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ color: '#F97316', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
