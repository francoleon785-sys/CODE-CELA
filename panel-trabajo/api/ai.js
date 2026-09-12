// POST /api/ai { provider: "openai"|"claude"|"deepseek", prompt: "..." }
// Usa solo desde backend. Nunca expongas las keys en el frontend.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { provider, prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt requerido' });

  try {
    if (provider === 'openai') {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }] })
      });
      const data = await r.json();
      return res.json({ text: data.choices?.[0]?.message?.content });
    }
    if (provider === 'claude') {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'claude-3-5-sonnet-20241022', max_tokens: 500, messages: [{ role: 'user', content: prompt }] })
      });
      const data = await r.json();
      return res.json({ text: data.content?.[0]?.text });
    }
    if (provider === 'deepseek') {
      const r = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: prompt }] })
      });
      const data = await r.json();
      return res.json({ text: data.choices?.[0]?.message?.content });
    }
    return res.status(400).json({ error: 'provider invalido. Usa openai, claude o deepseek' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
