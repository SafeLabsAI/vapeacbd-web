import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import Differentiators from '../components/Differentiators.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()
  const featured = products.filter(p => p.featured)

  return (
    <>
      <Helmet>
        <title>HERBALIZER — VapeaCBD.com | El vape CBD más puro de Europa</title>
        <meta name="description" content="95% extracto puro, terpenos vivos, 0% THC, sin diluyentes. Producido en Europa. HERBALIZER por Chakannabis." />
      </Helmet>
      <Hero />
      <Differentiators />

      {/* Featured products */}
      <section style={{ background: '#0a0a0a', padding: '5rem 1.5rem', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)' }}>
              {t('shop.title')}
            </h2>
            <Link to="/shop" style={{ color: '#F97316', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Ver todos →
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* B2B CTA banner */}
      <section style={{
        background: 'linear-gradient(135deg, #111 0%, #1a0f00 100%)',
        padding: '4rem 1.5rem',
        borderTop: '1px solid #2a1500',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ color: '#F97316', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            B2B · Grow Shops · Importadores
          </div>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>
            {t('wholesale.title')}
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            {t('wholesale.subtitle')}
          </p>
          <Link to="/wholesale" style={{
            background: '#F97316', color: '#000', padding: '0.9rem 2.5rem',
            borderRadius: '0.5rem', textDecoration: 'none',
            fontWeight: 800, fontSize: '1rem',
          }}>
            {t('hero.ctaWholesale')}
          </Link>
        </div>
      </section>
    </>
  )
}
