export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  const { name, email, country, vat, tier, message } = body
  if (!name || !email || !country) {
    return { statusCode: 400, body: 'Missing required fields' }
  }

  // Trigger Zapier webhook (set ZAPIER_WHOLESALE_WEBHOOK in Netlify env vars)
  const zapierWebhook = process.env.ZAPIER_WHOLESALE_WEBHOOK
  if (zapierWebhook) {
    await fetch(zapierWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'vapeacbd-wholesale-form',
        name, email, country, vat, tier, message,
        timestamp: new Date().toISOString(),
      }),
    })
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  }
}
