// Nhận yêu cầu tư vấn từ form cuối trang.
// TODO: chuyển tiếp dữ liệu tới nơi đội tư vấn đọc được (email, Google Sheet, Zalo OA...).
// Hiện tại yêu cầu chỉ được ghi vào log của server.

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Dữ liệu gửi lên không hợp lệ.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const phone = String(body.phone ?? '').replace(/[^\d+]/g, '')

  if (!name) {
    return Response.json({ error: 'Hãy nhập họ và tên.' }, { status: 400 })
  }
  if (phone.length < 9 || phone.length > 15) {
    return Response.json({ error: 'Số điện thoại cần có 9 đến 15 chữ số.' }, { status: 400 })
  }

  const lead = {
    name,
    phone,
    guests: String(body.guests ?? '').trim(),
    date: String(body.date ?? '').trim(),
    tour: String(body.tour ?? '').trim(),
    note: String(body.note ?? '').trim().slice(0, 1000),
    receivedAt: new Date().toISOString(),
  }

  console.log('[dang-ky]', lead)

  return Response.json({ ok: true })
}
