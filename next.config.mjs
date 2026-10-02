/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Nhúng CSS thẳng vào HTML để trình duyệt không phải chờ tải file CSS riêng
    inlineCss: true,
  },
}

export default nextConfig
