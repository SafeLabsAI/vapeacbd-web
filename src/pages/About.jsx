import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Nosotros — HERBALIZER VapeaCBD</title>
        <meta name="description" content="Chakannabis BV. Historia de HERBALIZER: de Perú a Europa. Producción en República Checa con BrownRock." />
      </Helmet>
      <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ color: '#F97316', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Chakannabis BV
          </div>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginBottom: '2rem' }}>
            {t('about.title')}
          </h1>
          {[t('about.body1'), t('about.body2'), t('about.body3')].map((para, i) => (
            <p key={i} style={{ color: '#888', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              {para}
            </p>
          ))}

          {/* Timeline */}
          <div style={{ marginTop: '3rem', borderTop: '1px solid #1a1a1a', paddingTop: '2.5rem' }}>
            {[
              { year: '2018', text: 'Chakannabis nace en Lima, Perú. Primera formulación HERBALIZER sin diluyentes.' },
              { year: '2022', text: 'Primeros clientes europeos. Catálogo ZenBD AIR con terpenos botánicos.' },
              { year: '2024', text: 'Chakannabis BV registrada en Ámsterdam. Inicio partnership con BrownRock (CZ).' },
              { year: '2026', text: 'Lanzamiento VapeaCBD.com. Producción 100% EU. Cartuchos 510 de 95% sin diluyentes.' },
            ].map(item => (
              <div key={item.year} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div style={{ color: '#F97316', fontWeight: 900, fontSize: '0.9rem', minWidth: '40px', paddingTop: '0.1rem' }}>
                  {item.year}
                </div>
                <div style={{ color: '#888', lineHeight: 1.6 }}>{item.text}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            marginTop: '3rem', background: '#111', border: '1px solid #1f1f1f',
            borderRadius: '1rem', padding: '2rem',
          }}>
            <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>{t('about.contact')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:hello@chakanna.com" style={{ color: '#F97316', textDecoration: 'none', fontSize: '0.95rem' }}>
                hello@chakanna.com
              </a>
              <span style={{ color: '#555', fontSize: '0.85rem' }}>
                Chakannabis BV · VAT NL0022508774B88
              </span>
              <span style={{ color: '#555', fontSize: '0.85rem' }}>
                Dr. H. Colijnstraat 630, 1067 CP Amsterdam, Netherlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
