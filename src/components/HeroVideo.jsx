'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HeroVideo({ src, poster }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  // Video chỉ hiện ra khi đã có khung hình đầu tiên; trước đó ảnh poster là nội dung LCP
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
  }, [])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPlaying(true), () => {})
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="hero__media"
      />
      <video
        ref={ref}
        className={`hero__media hero__video${started ? ' is-started' : ''}`}
        src={src}
        onPlaying={() => setStarted(true)}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <button type="button" className="hero__video-toggle" onClick={toggle}>
        {playing ? 'Tạm dừng video' : 'Phát video'}
      </button>
    </>
  )
}
