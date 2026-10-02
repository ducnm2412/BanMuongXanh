'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroVideo({ src, poster }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

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
      <video
        ref={ref}
        className="hero__media"
        src={src}
        poster={poster}
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
