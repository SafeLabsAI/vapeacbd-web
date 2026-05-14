import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { products } from '../data/products.js'

export default function LabResults() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Análisis de Laboratorio — HERBALIZER VapeaCBD</title>
        <meta name="description" content="Certificados de análisis (COA) por lote para todos los productos HERBALIZER. Transparencia total." />
      </Helmet>
      <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.5rem)', marginBottom: '0.75rem' }}>
              {t('labResults.title')}
            </h1>
            <p style={{ color: '#888', lineHeight: 1.7 }}>{t('labResults.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {products.map(p => (
              <div key={p.id} style={{
                background: '#111', border: '1px solid #1f1f1f',
                borderRadius: '0.75rem', padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '1rem', flexWrap: 'wrap',
              }}>
                <div>
                  <div style={{ color: '#F97316', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                    {p.line}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 700 }}>{p.name} — {p.subtitle}</div>
                  <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {p.concentration}% CBD · {p.terpenes} · THC 0%
                  </div>
                </div>
                <div style={{
                  background: '#1a1a1a', border: '1px solid #2a2a2a',
                  borderRadius: '0.4rem', padding: '0.5rem 1rem',
                  color: '#555', fontSize: '0.8rem', fontWeight: 600,
                }}>
                  {t('labResults.comingSoon')}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem', background: 'rgba(249,115,22,0.05)',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: '0.75rem', padding: '1.25rem 1.5rem',
          }}>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Los certificados de análisis (COA) de los primeros lotes de producción EU estarán disponibles una vez BrownRock complete el primer ciclo de fabricación. Para solicitar COAs de forma anticipada, contacta con <a href="mailto:hello@chakanna.com" style={{ color: '#F97316' }}>hello@chakanna.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
