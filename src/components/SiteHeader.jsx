'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { NAV } from '@/lib/content'

export default function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  // Theo dõi một mốc 40px ở đầu trang thay vì đọc scrollY mỗi lần cuộn
  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.setAttribute('aria-hidden', 'true')
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:40px;pointer-events:none'
    document.body.prepend(sentinel)

    const observer = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting))
    observer.observe(sentinel)
    return () => {
      observer.disconnect()
      sentinel.remove()
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${solid || open ? ' is-solid' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="site-header__brand" onClick={close}>
          <Image src="/logo-mark.png" alt="" width={64} height={46} className="site-header__logo" />
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
          <a href="#dang-ky" className="site-header__cta" onClick={close}>
            Nhận báo giá
          </a>
        </nav>
      </div>
    </header>
  )
}
