import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { wholesaleTiers } from '../data/products.js'

export default function Wholesale() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', country: '', vat: '', tier: 'micro', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/.netlify/functions/wholesale-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Mayoristas — HERBALIZER VapeaCBD</title>
        <meta name="description" content="Programa de distribución B2B para tiendas CBD, grow shops e importadores europeos." />
      </Helmet>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#F97316', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              B2B · Wholesale · Distribution
            </div>
            <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              {t('wholesale.title')}
            </h1>
            <p style={{ color: '#888', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('wholesale.subtitle')}
            </p>
          </div>

          {/* Tiers table */}
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #1f1f1f' }}>
              <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{t('wholesale.tiersTitle')}</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#0d0d0d' }}>
                    {['Tier', t('wholesale.discount'), t('wholesale.minOrder'), t('wholesale.payment'), 'Precio cartucho 1ml'].map(h => (
                      <th key={h} style={{ padding: '0.75rem 1.25rem', textAlign: 'left', color: '#555', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {wholesaleTiers.map((tier, i) => (
                    <tr key={tier.id} style={{ borderTop: '1px solid #1a1a1a', background: i % 2 === 0 ? 'transparent' : '#0d0d0d' }}>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <span style={{
                          color: tier.id === 'b2c' ? '#888' : '#F97316',
                          fontWeight: 700,
                        }}>
                          {tier.label}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: tier.discount === 0 ? '#555' : '#22c55e', fontWeight: 700 }}>
                        {tier.discount === 0 ? '—' : `-${tier.discount}%`}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#aaa' }}>{tier.minOrderLabel}</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#aaa' }}>
                        {tier.net ? `NET-${tier.net}` : t('wholesale.immediate')}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#fff', fontWeight: 700 }}>
                        {tier.id === 'b2c' ? '€29–34' : `€${tier.id === 'micro' ? '23–27' : tier.id === 'dist' ? '19–22' : '16–19'}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* COA note */}
          <div style={{
            background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: '0.75rem', padding: '1rem 1.5rem', marginBottom: '3rem',
            display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.2rem' }}>📋</span>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              {t('wholesale.certBlock')}
            </p>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#111', borderRadius: '1rem', border: '1px solid #22c55e33' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ color: '#22c55e', fontWeight: 700, marginBottom: '0.75rem' }}>{t('wholesale.successTitle')}</h3>
              <p style={{ color: '#888' }}>{t('wholesale.successBody')}</p>
            </div>
          ) : (
            <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '1rem', padding: '2rem' }}>
              <h2 style={{ color: '#fff', fontWeight: 700, marginBottom: '1.75rem' }}>{t('wholesale.formTitle')}</h2>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <Field label={t('wholesale.nameLabel')} name="name" value={form.name} onChange={handleChange} required />
                  <Field label={t('wholesale.emailLabel')} name="email" type="email" value={form.email} onChange={handleChange} required />
                  <Field label={t('wholesale.countryLabel')} name="country" value={form.country} onChange={handleChange} required />
                  <Field label={t('wholesale.vatLabel')} name="vat" value={form.vat} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ color: '#888', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                    {t('wholesale.tierLabel')}
                  </label>
                  <select name="tier" value={form.tier} onChange={handleChange} style={fieldStyle}>
                    {wholesaleTiers.filter(t => t.id !== 'b2c').map(t => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ color: '#888', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                    {t('wholesale.messageLabel')}
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    style={{ ...fieldStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" disabled={status === 'sending'} style={{
                  background: '#F97316', color: '#000', border: 'none',
                  padding: '0.85rem 2rem', borderRadius: '0.5rem',
                  fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}>
                  {status === 'sending' ? t('wholesale.submitting') : t('wholesale.submit')}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const fieldStyle = {
  width: '100%', background: '#0d0d0d', border: '1px solid #2a2a2a',
  borderRadius: '0.4rem', padding: '0.65rem 0.85rem',
  color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box',
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label style={{ color: '#888', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
        {label}{required && <span style={{ color: '#F97316' }}> *</span>}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        style={fieldStyle} />
    </div>
  )
}
