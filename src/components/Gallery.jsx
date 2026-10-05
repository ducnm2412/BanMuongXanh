'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Lưới ảnh; bấm vào ảnh nào thì mở ảnh đó ở cỡ lớn (lightbox).
// Dùng thẻ <dialog> của trình duyệt: tự có phím Esc để đóng và giữ tiêu điểm bàn phím bên trong.
export default function Gallery({ photos }) {
  const dialog = useRef(null)
  const [index, setIndex] = useState(null)
  const open = index !== null
  const photo = open ? photos[index] : null

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
    // Không cho trang phía sau cuộn khi đang xem ảnh lớn
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const step = (delta) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  return (
    <>
      <ul className="gallery">
        {photos.map((item, i) => (
          <li
            key={item.src}
            className={`gallery__item${item.size ? ` gallery__item--${item.size}` : ''}`}
            data-reveal="zoom"
            style={{ '--reveal-delay': `${(i % 4) * 70}ms` }}
          >
            <button
              type="button"
              className="gallery__btn"
              onClick={() => setIndex(i)}
              aria-label={`Xem ảnh lớn: ${item.alt}`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 720px) 50vw, (max-width: 1760px) 45vw, 800px" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Xem ảnh lớn"
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        // Bấm ra vùng tối bên ngoài ảnh thì đóng
        onClick={(event) => {
          if (event.target === event.currentTarget) setIndex(null)
        }}
      >
        {photo && (
          <div className="lightbox__body">
            <div className="lightbox__frame">
              <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="92vw" className="lightbox__img" />
            </div>
            <p className="lightbox__caption">
              {photo.alt}
              <span>
                {index + 1} / {photos.length}
              </span>
            </p>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Ảnh trước">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Ảnh sau">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="lightbox__close" onClick={() => setIndex(null)} aria-label="Đóng">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
