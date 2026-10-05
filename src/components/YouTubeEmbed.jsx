'use client'

import Image from 'next/image'
import { useState } from 'react'
import { getYouTubeId } from '@/lib/youtube'

// Ban đầu chỉ hiện ảnh bìa + nút phát; trình phát YouTube chỉ được tải khi người xem bấm.
export default function YouTubeEmbed({ url, title, poster }) {
  const [active, setActive] = useState(false)
  const id = getYouTubeId(url)

  if (!id) return null

  return (
    <div className="yt">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="yt__facade" onClick={() => setActive(true)} aria-label={`Phát video: ${title}`}>
          <Image src={poster} alt="" fill sizes="(max-width: 820px) 100vw, 380px" />
          <span className="yt__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
