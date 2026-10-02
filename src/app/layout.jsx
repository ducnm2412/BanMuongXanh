import { Be_Vietnam_Pro, Fraunces } from 'next/font/google'
import './globals.css'

const display = Fraunces({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
  display: 'swap',
})

const body = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Tour Bản Mường Xanh — Trải nghiệm, nghỉ dưỡng, Team Building gần Hà Nội',
  description:
    'Tour 1 ngày và 2 ngày 1 đêm tại Bản Mường Xanh, Lương Sơn, Phú Thọ: bể bơi giữa thiên nhiên, Team Building, múa sạp và ẩm thực Mường. Cách Hà Nội 42 km.',
  icons: { icon: '/favicon.svg' },
}

export const viewport = {
  themeColor: '#1D3A2A',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
