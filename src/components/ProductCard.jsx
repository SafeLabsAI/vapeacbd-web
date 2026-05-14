import { useTranslation } from 'react-i18next'

export default function ProductCard({ product }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language in { es: 1, fr: 1, en: 1 } ? i18n.language : 'es'

  return (
    <div style={{
      background: '#111', border: '1px solid #1f1f1f',
      borderRadius: '1rem', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      transition: 'transform 0.2s, border-color 0.2s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = '#1f1f1f'
      }}
    >
      {/* Image placeholder */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a, #222)',
        height: '220px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative',
      }}>
        {product.image ? (
          <img src={product.image} alt={product.name}
            style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }}
            onError={e => { e.target.style.display = 'none' }}
          />
        ) : (
          <div style={{ color: '#333', fontSize: '3rem' }}>🌿</div>
        )}
        {/* Effect badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          background: product.effectColor + '22',
          border: `1px solid ${product.effectColor}55`,
          color: product.effectColor,
          borderRadius: '2rem', padding: '0.2rem 0.6rem',
          fontSize: '0.7rem', fontWeight: 700,
        }}>
          {product.effectLabel[lang]}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Line */}
        <div style={{ color: '#555', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          {product.line}
        </div>

        {/* Name + subtitle */}
        <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', marginBottom: '0.1rem' }}>
          {product.name}
        </h3>
        <div style={{ color: '#F97316', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
          {product.subtitle}
        </div>

        {/* Specs row */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <Chip>{product.concentration}% CBD</Chip>
          <Chip>{product.terpenes}</Chip>
          <Chip>{product.puffs} puffs</Chip>
        </div>

        {/* No-additives badges */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <Badge>✓ {t('shop.thcFree')}</Badge>
          <Badge>✓ {t('shop.noAdditives')}</Badge>
        </div>

        {/* Keywords */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem', marginTop: 'auto' }}>
          {(product.keywords[lang] || []).map(k => (
            <span key={k} style={{
              background: 'rgba(249,115,22,0.08)', color: '#F97316',
              borderRadius: '2rem', padding: '0.15rem 0.6rem',
              fontSize: '0.75rem', fontWeight: 600,
            }}>{k}</span>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 900 }}>€{product.price}</span>
            <span style={{ color: '#555', fontSize: '0.75rem', marginLeft: '0.3rem' }}>/ 1ml 510</span>
          </div>
          <button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-name={`${product.name} — ${product.subtitle}`}
            data-item-description={product.terpenes}
            data-item-image={product.image}
            data-item-url={`/shop`}
            style={{
              background: '#F97316', color: '#000',
              border: 'none', borderRadius: '0.4rem',
              padding: '0.6rem 1.1rem',
              fontWeight: 800, fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            {t('shop.addToCart')}
          </button>
        </div>
      </div>
    </div>
  )
}

function Chip({ children }) {
  return (
    <span style={{
      background: '#1a1a1a', color: '#aaa', border: '1px solid #2a2a2a',
      borderRadius: '0.3rem', padding: '0.2rem 0.5rem', fontSize: '0.75rem',
    }}>
      {children}
    </span>
  )
}

function Badge({ children }) {
  return (
    <span style={{
      background: 'rgba(34,197,94,0.08)', color: '#22c55e',
      border: '1px solid rgba(34,197,94,0.2)',
      borderRadius: '0.3rem', padding: '0.15rem 0.5rem', fontSize: '0.7rem', fontWeight: 600,
    }}>
      {children}
    </span>
  )
}
