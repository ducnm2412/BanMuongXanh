import { Dancing_Script, Montserrat, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Một họ chữ duy nhất cho cả trang: tiêu đề in hoa đậm 800, nội dung 400–600
const body = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-body',
  display: 'swap',
})

// Chữ viết tay, chỉ dùng cho dòng "Hành trình khám phá" ở hero
const script = Dancing_Script({
  subsets: ['latin', 'vietnamese'],
  weight: ['700'],
  variable: '--font-script',
  display: 'swap',
})

// Chữ có chân, dùng cho tên "Bản Mường Xanh" và câu mô tả ở hero
const serif = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
  display: 'swap',
})

// Font cho nút bấm: hình học, hiện đại, đọc rõ ở cỡ nhỏ
const ui = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['600', '700'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata = {
  title: 'Tour Bản Mường Xanh — Trải nghiệm, nghỉ dưỡng, Team Building gần Hà Nội',
  description:
    'Tour 1 ngày và 2 ngày 1 đêm tại Bản Mường Xanh, Lương Sơn, Phú Thọ: bể bơi giữa thiên nhiên, Team Building, múa sạp và ẩm thực Mường. Cách Hà Nội 42 km.',
}

export const viewport = {
  themeColor: '#1E3B17',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${body.variable} ${script.variable} ${serif.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  )
}
