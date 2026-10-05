'use client'

import { useState } from 'react'
import { TOUR_OPTIONS } from '@/lib/content'

export default function LeadForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/dang-ky', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('idle')
      setError(err.message || 'Chưa gửi được thông tin. Hãy thử lại hoặc gọi hotline.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="lead-form lead-form--done" role="status">
        <h3>Đã gửi thông tin</h3>
        <p>Nhân viên tư vấn sẽ gọi lại theo số điện thoại bạn để lại.</p>
        <button type="button" className="btn btn--line-dark" onClick={() => setStatus('idle')}>
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="f-name">Họ và tên</label>
        <input id="f-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Số điện thoại</label>
        <input
          id="f-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9 .+]{9,15}"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="f-guests">Số lượng khách</label>
        <input id="f-guests" name="guests" type="number" min="1" inputMode="numeric" />
      </div>
      <div className="field">
        <label htmlFor="f-date">Ngày dự kiến đi</label>
        <input id="f-date" name="date" type="date" />
      </div>
      <div className="field field--full">
        <label htmlFor="f-tour">Loại tour</label>
        <select id="f-tour" name="tour" defaultValue={TOUR_OPTIONS[0]}>
          {TOUR_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="f-note">Ghi chú thêm</label>
        <textarea id="f-note" name="note" rows={2} placeholder="Ví dụ: đoàn có 10 trẻ em, cần xe đón ở Cầu Giấy" />
      </div>

      {error && (
        <p className="lead-form__error field--full" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn--rice field--full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Đang gửi…' : 'Nhận tư vấn và báo giá'}
      </button>
    </form>
  )
}
