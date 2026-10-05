'use client'

import { useEffect } from 'react'

// Hiệu ứng hiện dần khi cuộn tới, cho mọi phần tử có thuộc tính data-reveal,
// và cho vạch nối giữa các section (lớp .block: vạch vẽ dần, chấm tròn bật ra).
// Dùng IntersectionObserver (mọi trình duyệt hiện đại đều hỗ trợ). Nội dung mặc định luôn hiển thị:
// chỉ khi trình duyệt hỗ trợ và người xem không tắt chuyển động thì mới bật hiệu ứng,
// nên nếu JavaScript lỗi hoặc trình duyệt quá cũ, trang vẫn hiện đầy đủ.
export default function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const items = Array.from(document.querySelectorAll('[data-reveal], .block'))

    // Phần tử đang nằm sẵn trong màn hình thì giữ nguyên, không ẩn rồi hiện lại (tránh nháy)
    const viewport = window.innerHeight
    const pending = items.filter((el) => {
      if (el.getBoundingClientRect().top < viewport) {
        el.classList.add('is-visible')
        return false
      }
      return true
    })

    root.classList.add('reveal-on')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    pending.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-on')
    }
  }, [])

  return null
}
