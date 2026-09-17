export default async function handler(req, res) {
  const token = req.query.token;
  const wantImg = req.query.img === '1';
  const SB = 'https://izqoardhwxxmshjnwduh.supabase.co';
  const ANON = 'sb_publishable_Lq5KfOO6ejN3rbJ2cF9AMA_D_tYStZ7';
  if (!token) { res.status(400).json({ error: 'bad request' }); return; }

  const r = await fetch(SB + '/rest/v1/cards?token=eq.' + encodeURIComponent(token) + '&select=*', {
    headers: { apikey: ANON, Authorization: 'Bearer ' + ANON }
  });
  const rows = await r.json();
  const row = Array.isArray(rows) ? rows[0] : null;
  if (!row) { res.status(404).json({ error: 'not found' }); return; }

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const base = proto + '://' + req.headers.host + '/api/card/' + token;

  if (wantImg) {
    const b64 = String(row.image_b64 || '').split(',')[1] || '';
    if (!b64) { res.status(404).json({ error: 'no image' }); return; }
    const buf = Buffer.from(b64, 'base64');
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.status(200).send(buf);
    return;
  }

  const imgUrl = base + '?img=1';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  const html = '<!DOCTYPE html><html><head><meta charset="utf-8">'
    + '<title>' + esc(row.title) + '</title>'
    + '<meta name="description" content="' + esc(row.description) + '">'
    + '<meta property="og:type" content="website">'
    + '<meta property="og:site_name" content="CatálogoYa">'
    + '<meta property="og:title" content="' + esc(row.title) + '">'
    + '<meta property="og:description" content="' + esc(row.description) + '">'
    + '<meta property="og:image" content="' + imgUrl + '">'
    + '<meta property="og:image:width" content="1200">'
    + '<meta property="og:image:height" content="630">'
    + '<meta property="og:url" content="' + base + '">'
    + '<meta name="twitter:card" content="summary_large_image">'
    + '</head><body style="margin:0;background:#0e453a;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif">'
    + '<img src="' + imgUrl + '" style="max-width:92vw;max-height:70vh;border-radius:16px" alt="">'
    + (row.redirect_url ? '<a href="' + esc(row.redirect_url) + '" style="margin-top:16px;color:#fff;background:#25D366;padding:12px 22px;border-radius:12px;text-decoration:none;font-weight:700">Abrir catálogo / completar compra</a>' : '')
    + '</body></html>';
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
