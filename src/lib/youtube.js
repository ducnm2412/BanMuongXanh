// Lấy ID video từ mọi dạng link YouTube (watch?v=, youtu.be/, shorts/, embed/, live/)
// hoặc từ chính ID 11 ký tự. Trả về null nếu không nhận ra.
export function getYouTubeId(input) {
  const value = String(input ?? '').trim()
  if (/^[\w-]{11}$/.test(value)) return value

  try {
    const url = new URL(value)
    const host = url.hostname.replace(/^(www\.|m\.)/, '')

    if (host === 'youtu.be') return url.pathname.slice(1, 12) || null
    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      const fromQuery = url.searchParams.get('v')
      if (fromQuery) return fromQuery
      const match = url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]{11})/)
      if (match) return match[1]
    }
  } catch {
    // không phải URL hợp lệ
  }
  return null
}
