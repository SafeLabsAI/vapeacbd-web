import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
]

export default function Nav() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  function switchLang(code) {
    i18n.changeLanguage(code)
    setMenuOpen(false)
  }

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#F97316' : '#ccc',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  })

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1f1f1f',
      padding: '0 1.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '60px',
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ color: '#F97316', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          HERBALIZER
        </span>
        <span style={{ color: '#555', fontSize: '0.7rem', fontWeight: 400 }}>× VapeaCBD</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
        <Link to="/shop" style={linkStyle('/shop')}>{t('nav.shop')}</Link>
        <Link to="/wholesale" style={linkStyle('/wholesale')}>{t('nav.wholesale')}</Link>
        <Link to="/lab-results" style={linkStyle('/lab-results')}>{t('nav.labResults')}</Link>
        <Link to="/about" style={linkStyle('/about')}>{t('nav.about')}</Link>
      </div>

      {/* Lang + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {LANGS.map(l => (
            <button key={l.code} onClick={() => switchLang(l.code)} style={{
              background: i18n.language === l.code ? '#F97316' : 'transparent',
              color: i18n.language === l.code ? '#000' : '#666',
              border: 'none', borderRadius: '0.25rem',
              padding: '0.2rem 0.4rem', cursor: 'pointer',
              fontSize: '0.75rem', fontWeight: 700,
            }}>
              {l.label}
            </button>
          ))}
        </div>
        <Link to="/shop" style={{
          background: '#F97316', color: '#000', padding: '0.45rem 1rem',
          borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 700,
          fontSize: '0.85rem',
        }}>
          Shop
        </Link>
      </div>
    </nav>
  )
}
