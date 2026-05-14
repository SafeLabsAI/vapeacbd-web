import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

export default function Shop() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? products
    : products.filter(p => p.line.toLowerCase().includes(filter.toLowerCase()))

  const filters = [
    { id: 'all', label: t('shop.filterAll') },
    { id: 'HERBALIZER', label: t('shop.filterHerbalizer') },
    { id: 'ZenBD', label: t('shop.filterZenBD') },
  ]

  return (
    <>
      <Helmet>
        <title>Catálogo — HERBALIZER VapeaCBD</title>
        <meta name="description" content="Cartuchos 510 de CBD puro al 95% sin diluyentes. Terpenos vivos. Producción EU certificada." />
      </Helmet>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>
              {t('shop.title')}
            </h1>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              Cartuchos 510 · 1ml · THC 0% · Sin diluyentes · Producido EU
            </p>
          </div>

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                background: filter === f.id ? '#F97316' : '#111',
                color: filter === f.id ? '#000' : '#888',
                border: filter === f.id ? 'none' : '1px solid #2a2a2a',
                borderRadius: '2rem', padding: '0.4rem 1rem',
                cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                transition: 'all 0.2s',
              }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {/* Info block */}
          <div style={{
            marginTop: '4rem', background: '#111', border: '1px solid #1f1f1f',
            borderRadius: '1rem', padding: '2rem',
          }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <InfoItem icon="🔬" title="510 Thread" body="Compatible con baterías estándar 510. Rosca universal." />
              <InfoItem icon="🌿" title="Terpenos vivos" body="Extraídos sin solventes. Perfil botánico auténtico." />
              <InfoItem icon="📋" title="COA por lote" body="Analítica independiente disponible para cada lote." />
              <InfoItem icon="🇪🇺" title="Made in EU" body="Producido en República Checa bajo norma europea." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function InfoItem({ icon, title, body }) {
  return (
    <div style={{ flex: '1 1 180px' }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{icon}</div>
      <div style={{ color: '#F97316', fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{title}</div>
      <div style={{ color: '#666', fontSize: '0.85rem' }}>{body}</div>
    </div>
  )
}
