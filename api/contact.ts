export const config = { runtime: 'edge' };

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(msg: string, detail?: object) {
  return new Response(JSON.stringify({ ok: false, error: msg, ...detail }), {
    status: 400,
    headers: { 'content-type': 'application/json' },
  });
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Read inputs from JSON or form-data
  let data: Payload = {};
  const ctype = req.headers.get('content-type') || '';
  try {
    if (ctype.includes('application/json')) {
      data = (await req.json()) as Payload;
    } else {
      const form = await req.formData();
      data = {
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        subject: String(form.get('subject') || ''),
        message: String(form.get('message') || ''),
        website: String(form.get('website') || ''),
      };
    }
  } catch (e) {
    return badRequest('Invalid request body');
  }

  // Honeypot: if filled, drop politely
  if (data.website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const subject = (data.subject || 'Portfolio contact').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return badRequest('Missing required fields', { fields: { name: !!name, email: !!email, message: !!message } });
  }
  if (!emailRegex.test(email)) {
    return badRequest('Invalid email');
  }
  if (message.length > 5000) {
    return badRequest('Message too long');
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO = process.env.CONTACT_TO || process.env.CONTACT_EMAIL;
  const CONTACT_FROM = process.env.CONTACT_FROM || 'portfolio@vercel.app';
  if (!RESEND_API_KEY || !CONTACT_TO) {
    return new Response(JSON.stringify({ ok: false, error: 'Server not configured' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const html = `
    <div style="font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
      <h2 style="margin:0 0 8px 0">New portfolio message</h2>
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr style="border:none;border-top:1px solid #ddd;margin:12px 0" />
      <pre style="white-space:pre-wrap;font:inherit">${escapeHtml(message)}</pre>
    </div>
  `;
  const text = `New portfolio message\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`;

  const body = {
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    subject: `Portfolio: ${subject}`,
    reply_to: email,
    html,
    text,
  } as any;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ ok: false, error: 'Email failed', detail: err }), {
        status: 502,
        headers: { 'content-type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'Network error' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
