import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section style={{
      minHeight: 'calc(100vh - 60px)',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '4rem 1.5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)',
        borderRadius: '2rem', padding: '0.35rem 1rem',
        color: '#F97316', fontSize: '0.8rem', fontWeight: 600,
        marginBottom: '2rem', letterSpacing: '0.02em',
      }}>
        {t('hero.badge')}
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 900, lineHeight: 1.1,
        color: '#fff', maxWidth: '700px',
        marginBottom: '1.5rem',
      }}>
        {t('hero.headline')}
      </h1>

      {/* Subheadline */}
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: '#888', maxWidth: '560px',
        lineHeight: 1.7, marginBottom: '3rem',
      }}>
        {t('hero.sub')}
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
        <Link to="/shop" style={{
          background: '#F97316', color: '#000', padding: '0.9rem 2rem',
          borderRadius: '0.5rem', textDecoration: 'none',
          fontWeight: 800, fontSize: '1rem', letterSpacing: '0.01em',
        }}>
          {t('hero.ctaShop')}
        </Link>
        <Link to="/wholesale" style={{
          background: 'transparent', color: '#F97316', padding: '0.9rem 2rem',
          borderRadius: '0.5rem', textDecoration: 'none',
          fontWeight: 700, fontSize: '1rem',
          border: '1px solid rgba(249,115,22,0.5)',
        }}>
          {t('hero.ctaWholesale')}
        </Link>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {[
          { value: t('hero.stat1'), label: t('hero.stat1Label') },
          { value: t('hero.stat2'), label: t('hero.stat2Label') },
          { value: t('hero.stat3'), label: t('hero.stat3Label') },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ color: '#F97316', fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
