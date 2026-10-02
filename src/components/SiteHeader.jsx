'use client'

import { useEffect, useState } from 'react'
import { NAV } from '@/lib/content'

export default function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${solid || open ? ' is-solid' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" onClick={close}>
          Bản Mường Xanh
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Đóng' : 'Menu'}
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Điều hướng chính">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#dang-ky" className="btn btn--ochre btn--sm" onClick={close}>
            Nhận báo giá
          </a>
        </nav>
      </div>
    </header>
  )
}
