import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{
      background: '#080808', borderTop: '1px solid #1a1a1a',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <div style={{ color: '#F97316', fontWeight: 900, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              HERBALIZER
            </div>
            <p style={{ color: '#555', fontSize: '0.85rem', maxWidth: '260px', lineHeight: 1.6 }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: '#888', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Menu
              </div>
              {[
                { to: '/shop', label: t('nav.shop') },
                { to: '/wholesale', label: t('nav.wholesale') },
                { to: '/lab-results', label: t('nav.labResults') },
                { to: '/about', label: t('nav.about') },
              ].map(l => (
                <div key={l.to} style={{ marginBottom: '0.4rem' }}>
                  <Link to={l.to} style={{ color: '#666', textDecoration: 'none', fontSize: '0.875rem' }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <div style={{ color: '#888', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Legal
              </div>
              {[
                { to: '/legal/aviso', label: t('footer.legal') },
                { to: '/legal/privacidad', label: t('footer.privacy') },
                { to: '/legal/terminos', label: t('footer.terms') },
                { to: '/legal/envios', label: t('footer.shipping') },
              ].map(l => (
                <div key={l.to} style={{ marginBottom: '0.4rem' }}>
                  <Link to={l.to} style={{ color: '#666', textDecoration: 'none', fontSize: '0.875rem' }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem' }}>
          <p style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.4rem' }}>
            ⚠ {t('footer.age')}
          </p>
          <p style={{ color: '#444', fontSize: '0.75rem', marginBottom: '0.75rem', lineHeight: 1.5 }}>
            {t('footer.thc')}
          </p>
          <p style={{ color: '#333', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
            {t('footer.company')}
          </p>
          <p style={{ color: '#2a2a2a', fontSize: '0.75rem' }}>
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
