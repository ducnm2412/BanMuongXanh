import Image from 'next/image'
import Brocade from '@/components/Brocade'
import HeroVideo from '@/components/HeroVideo'
import LeadForm from '@/components/LeadForm'
import SiteHeader from '@/components/SiteHeader'
import {
  ABOUT_POINTS,
  CONTACT,
  FAQ,
  GALLERY,
  GROUP_FITS,
  HIGHLIGHTS,
  IMG,
  INCLUDED,
  ITINERARY,
  PLANS,
  PRICE_NOTES,
  VIDEOS,
} from '@/lib/content'

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <HeroVideo src="/videos/welcome.mp4" poster={IMG.poolPalms} />
          <div className="hero__shade" aria-hidden="true" />

          <div className="container hero__content">
            <p className="hero__place">Lương Sơn, Phú Thọ</p>
            <h1 className="hero__title">
              <span>Tour khám phá</span> <span>Bản Mường Xanh</span>
            </h1>
            <p className="hero__lede">
              Rời phố thị một ngày. Bơi giữa đồi cây, chơi cùng đồng đội, ăn cơm Mường và nhảy sạp
              với người trong bản.
            </p>
            <div className="hero__actions">
              <a href="#dang-ky" className="btn btn--ochre">
                Đặt tour ngay
              </a>
              <a href="#lich-trinh" className="btn btn--ghost">
                Xem lịch trình
              </a>
            </div>
          </div>

          <div className="hero__facts">
            <ul className="container">
              <li>
                <strong>42 km</strong> từ Hà Nội
              </li>
              <li>
                <strong>Khoảng 1 giờ</strong> đi xe
              </li>
              <li>
                <strong>Mở cửa</strong> {CONTACT.hours}
              </li>
            </ul>
          </div>
          <Brocade id="hero" className="hero__brocade" />
        </section>

        {/* Điểm nổi bật */}
        <section id="trai-nghiem" className="section section--paper">
          <div className="container">
            <h2 className="section__title">Có gì ở Bản Mường Xanh</h2>
            <ul className="highlights">
              {HIGHLIGHTS.map((item) => (
                <li key={item.title} className="highlight">
                  <div className="highlight__img">
                    <Image src={item.image} alt="" fill sizes="(max-width: 720px) 50vw, 280px" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Giới thiệu */}
        <section className="section section--sage">
          <div className="container about">
            <div className="about__collage">
              <div className="about__img about__img--main">
                <Image
                  src={IMG.poolSign}
                  alt="Bể bơi ngay dưới biển chữ Bản Mường Xanh"
                  fill
                  sizes="(max-width: 860px) 90vw, 520px"
                />
              </div>
              <div className="about__img about__img--inset">
                <Image
                  src={IMG.cycling}
                  alt="Học sinh đạp xe trên lối đi trong bản"
                  fill
                  sizes="(max-width: 860px) 45vw, 260px"
                />
              </div>
            </div>
            <div className="about__text">
              <h2 className="section__title">Một chuyến đi, nhiều trải nghiệm đáng nhớ</h2>
              <p>
                Bản Mường Xanh là khu trải nghiệm ở Lương Sơn, cách trung tâm Hà Nội khoảng 42 km.
                Một ngày ở đây đủ để cả đoàn bơi lội, chơi vận động, ăn trưa món Mường và xem múa sạp.
              </p>
              <ul className="ticks">
                {ABOUT_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Lịch trình */}
        <section id="lich-trinh" className="section section--paper">
          <div className="container">
            <h2 className="section__title">Trải nghiệm trọn vẹn trong một ngày</h2>
            <p className="section__lede">Lịch trình tham khảo của tour 1 ngày, có thể điều chỉnh theo đoàn.</p>
            <ol className="timeline">
              {ITINERARY.map((step) => (
                <li key={step.time} className="timeline__step">
                  <time className="timeline__time">{step.time}</time>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <a href="#dang-ky" className="btn btn--forest">
              Đặt tour theo lịch trình này
            </a>
          </div>
        </section>

        {/* Bảng giá */}
        <section id="bang-gia" className="section section--sage">
          <div className="container">
            <h2 className="section__title">Chọn chuyến đi phù hợp</h2>
            <div className="plans">
              {PLANS.map((plan) => (
                <article key={plan.id} className={`plan${plan.featured ? ' plan--featured' : ''}`}>
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="plan__price">
                    {plan.price}
                    <span> / người</span>
                  </p>
                  <p className="plan__fit">{plan.fit}</p>
                  <ul className="ticks">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#dang-ky" className={`btn ${plan.featured ? 'btn--ochre' : 'btn--forest'}`}>
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
            <ul className="price-notes">
              {PRICE_NOTES.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <h3 className="subhead">Tour 1 ngày đã gồm</h3>
            <ul className="included">
              {INCLUDED.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="note">Dịch vụ của tour 2 ngày 1 đêm được tư vấn riêng theo từng đoàn.</p>
          </div>
        </section>

        {/* Hình ảnh */}
        <section id="hinh-anh" className="section section--paper">
          <div className="container">
            <h2 className="section__title">Hình ảnh thực tế tại Bản Mường Xanh</h2>
            <ul className="gallery">
              {GALLERY.map((photo) => (
                <li key={photo.src} className={`gallery__item${photo.size ? ` gallery__item--${photo.size}` : ''}`}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 50vw, 400px" />
                </li>
              ))}
            </ul>

            <h3 className="subhead">Xem qua video</h3>
            <ul className="videos">
              {VIDEOS.map((video) => (
                <li key={video.src}>
                  <video src={video.src} poster={video.poster} controls preload="none" playsInline />
                  <p>{video.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team Building */}
        <section className="teams">
          <Brocade id="teams" />
          <div className="container teams__inner">
            <div className="teams__text">
              <h2 className="section__title">Đi cùng đồng đội, gắn kết cùng nhau</h2>
              <p>
                Bản đã đón nhiều đoàn trường học và doanh nghiệp, có đêm gala lên tới 1.500 học sinh.
                Chương trình được dựng theo số người và mục tiêu của từng đoàn.
              </p>
              <ul className="ticks ticks--two">
                {GROUP_FITS.map((fit) => (
                  <li key={fit}>{fit}</li>
                ))}
              </ul>
              <a href="#dang-ky" className="btn btn--ochre">
                Nhận báo giá cho đoàn
              </a>
            </div>
            <div className="teams__img">
              <Image
                src={IMG.tugOfWar}
                alt="Hai đội học sinh kéo co trên bãi đất trong bản"
                fill
                sizes="(max-width: 860px) 100vw, 560px"
              />
            </div>
          </div>
        </section>

        {/* Địa điểm */}
        <section className="section section--paper">
          <div className="container location">
            <div>
              <h2 className="section__title">Đường đến Bản Mường Xanh</h2>
              <dl className="facts">
                <dt>Địa chỉ</dt>
                <dd>{CONTACT.address}</dd>
                <dt>Khoảng cách</dt>
                <dd>{CONTACT.distance}</dd>
                <dt>Di chuyển</dt>
                <dd>{CONTACT.travelTime}</dd>
                <dt>Giờ mở cửa</dt>
                <dd>{CONTACT.hours}</dd>
              </dl>
              <a href={mapsSearch} className="btn btn--forest" target="_blank" rel="noopener noreferrer">
                Mở chỉ đường trên Google Maps
              </a>
            </div>
            <div className="location__map">
              <iframe
                title="Bản đồ đường đến Bản Mường Xanh"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Hỏi đáp */}
        <section id="hoi-dap" className="section section--sage">
          <div className="container">
            <h2 className="section__title">Câu hỏi thường gặp</h2>
            <div className="faq">
              {FAQ.map((item) => (
                <details key={item.q} className="faq__item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Đăng ký */}
        <section id="dang-ky" className="signup">
          <Image src={IMG.muongDance} alt="" fill sizes="100vw" className="signup__bg" />
          <div className="container signup__inner">
            <div className="signup__text">
              <h2 className="section__title">Đăng ký nhận tư vấn và báo giá</h2>
              <p>Để lại thông tin, nhân viên sẽ gọi lại để chốt lịch và báo giá cho đoàn của bạn.</p>
              <p className="signup__label">Hotline / Zalo</p>
              <ul className="signup__phones">
                {CONTACT.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`}>{phone.label}</a>
                  </li>
                ))}
              </ul>
              <a href={CONTACT.zalo} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Nhắn Zalo
              </a>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <Brocade id="footer" />
        <div className="container footer__inner">
          <div>
            <p className="footer__brand">Bản Mường Xanh</p>
            <p>Trải nghiệm, nghỉ dưỡng và Team Building cách Hà Nội 42 km.</p>
          </div>
          <div>
            <p className="footer__heading">Liên hệ</p>
            <p>{CONTACT.address}</p>
            <p>
              Hotline:{' '}
              {CONTACT.phones.map((phone, i) => (
                <span key={phone.tel}>
                  {i > 0 && ', '}
                  <a href={`tel:${phone.tel}`}>{phone.label}</a>
                </span>
              ))}
            </p>
            <p>Mở cửa {CONTACT.hours}</p>
          </div>
        </div>
        <p className="container footer__copy">© {new Date().getFullYear()} Bản Mường Xanh</p>
      </footer>
    </>
  )
}
