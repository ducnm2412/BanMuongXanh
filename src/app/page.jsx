import Image from 'next/image'
import Gallery from '@/components/Gallery'
import LeadForm from '@/components/LeadForm'
import ScrollReveal from '@/components/ScrollReveal'
import SiteHeader from '@/components/SiteHeader'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import {
  ABOUT_POINTS,
  ACTIVITIES,
  AUDIENCE,
  BOOKING_STEPS,
  CONTACT,
  FAQ,
  GALLERY,
  GROUP_FITS,
  HERO_IMAGE,
  HIGHLIGHTS,
  IMG,
  INCLUDED,
  ITINERARY,
  PLANS,
  PRICE_NOTES,
  VIDEOS,
} from '@/lib/content'

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero__frame">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              preload
              fetchPriority="high"
              sizes="100vw"
              className="hero__media"
            />
            <div className="hero__shade" aria-hidden="true" />

            <div className="hero__content">
              <p className="hero__place">Lương Sơn, Phú Thọ</p>
              <h1 className="hero__title">
                <span className="hero__script">Hành trình khám phá</span>{' '}
                <span className="hero__name">Bản Mường Xanh</span>
              </h1>
              <p className="hero__lede">
                Rời phố thị một ngày. Bơi giữa đồi cây, chơi cùng đồng đội, ăn cơm Mường và nhảy
                sạp với người trong bản.
              </p>
            </div>
          </div>
        </section>

        {/* Điểm nổi bật */}
        <section id="trai-nghiem" className="block">
          <div className="container">
            <div>
              <h2 className="title title--center" data-reveal>
                <span className="title__top">Có gì ở</span> Bản Mường Xanh
              </h2>
              <ul className="highlights">
                {HIGHLIGHTS.map((item, i) => (
                  <li key={item.title} className="highlight" data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                    <div className="highlight__img">
                      <Image src={item.image} alt="" fill sizes="148px" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dành cho ai */}
        <section className="block">
          <div className="container audience">
            <div className="audience__head" data-reveal="left">
              <h2 className="title">
                <span className="title__top">Chuyến đi này</span> dành cho ai
              </h2>
              <p className="lede">Đi mấy người cũng có chương trình phù hợp.</p>
            </div>
            <ul className="audience__list">
              {AUDIENCE.map((item, i) => (
                <li key={item.title} className="audience__row" data-reveal="right" style={{ '--reveal-delay': `${i * 110}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Giới thiệu */}
        <section className="block">
          <div className="about">
            <Image
              src={IMG.poolCrowd}
              alt="Khách bơi trong bể giữa đồi cây"
              fill
              sizes="100vw"
              className="about__bg"
            />
            <div className="about__shade" aria-hidden="true" />
            <div className="container">
              <div className="about__text" data-reveal="left">
                <h2 className="title">
                  <span className="title__top">Một chuyến đi,</span> nhiều trải nghiệm đáng nhớ
                </h2>
                <p>
                  Bản Mường Xanh là khu trải nghiệm ở Lương Sơn, cách trung tâm Hà Nội khoảng 42 km.
                  Một ngày ở đây đủ để cả đoàn bơi lội, chơi vận động, ăn trưa món Mường và xem múa
                  sạp.
                </p>
                <ul className="ticks">
                  {ABOUT_POINTS.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lịch trình */}
        <section id="lich-trinh" className="block">
          <span className="deco deco--leaves" aria-hidden="true" />
          <div className="container">
            <div className="route">
              <p className="route__label" data-reveal>Tour 1 ngày</p>
              <div>
                <h2 className="title" data-reveal>
                  <span className="title__top">Trải nghiệm trọn&nbsp;vẹn</span> trong một ngày
                </h2>
                <p className="lede">Lịch trình tham khảo, có thể điều chỉnh theo đoàn.</p>
                <ol className="route__steps">
                  {ITINERARY.map((step, i) => (
                    <li key={step.time} className="route__step" data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}>
                      <time className="route__time">{step.time}</time>
                      <div className="route__body">
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <a href="#dang-ky" className="btn btn--rice">
                  Đặt tour theo lịch trình này
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bảng giá */}
        <section id="bang-gia" className="block">
          <span className="deco deco--birds" aria-hidden="true" />
          <span className="deco deco--vine deco--flip deco--low" aria-hidden="true" />
          <div className="container">
            <h2 className="title title--center" data-reveal>
              <span className="title__top">Bảng giá tour</span> Chọn chuyến đi phù hợp
            </h2>
            <div className="plans">
              {PLANS.map((plan, i) => (
                <article
                  key={plan.id}
                  className={`plan${plan.featured ? ' plan--featured' : ''}`}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 110}ms` }}
                >
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="plan__price">
                    <span className="plan__amount">{plan.price}</span>
                    {' '}
                    <span className="plan__unit">/&nbsp;người</span>
                  </p>
                  <p className="plan__fit">{plan.fit}</p>
                  <ul className="ticks">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#dang-ky" className={`btn ${plan.featured ? 'btn--rice' : 'btn--dark'}`}>
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

            <h3 className="subtitle">Tour 1 ngày đã gồm</h3>
            <ul className="included">
              {INCLUDED.map((item, i) => (
                <li key={item.title} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="note">Dịch vụ của tour 2 ngày 1 đêm được tư vấn riêng theo từng đoàn.</p>
          </div>
        </section>

        {/* Hoạt động & tiện ích */}
        <section id="hoat-dong" className="block">
          <div className="container">
            <h2 className="title title--center" data-reveal>
              <span className="title__top">Hoạt động và tiện ích</span> Chơi gì ở bản
            </h2>
            <ul className="activities">
              {ACTIVITIES.map((item, i) => (
                <li key={item.title} className="activity" data-reveal style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
                  <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <div className="activity__text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hình ảnh */}
        <section id="hinh-anh" className="block">
          <div className="container">
            <h2 className="title title--center" data-reveal>
              <span className="title__top">Hình ảnh thực tế tại</span> Bản Mường Xanh
            </h2>
            <Gallery photos={GALLERY} />

            <h3 className="subtitle">Xem qua video</h3>
            <ul className="videos">
              {VIDEOS.map((video, i) => (
                <li key={video.youtube} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <YouTubeEmbed url={video.youtube} title={video.title} poster={video.poster} />
                  <p>{video.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team Building */}
        <section className="block">
          <div className="container">
            <div className="slide slide--pad teams">
              <Image
                src={IMG.tugOfWar}
                alt="Hai đội học sinh kéo co trên bãi đất trong bản"
                fill
                sizes="(max-width: 1760px) 90vw, 1600px"
                className="teams__bg"
              />
              <div className="teams__shade" aria-hidden="true" />
              <div className="teams__text" data-reveal="left">
                <h2 className="teams__title">
                  <span className="title__top">Gắn kết cùng nhau</span> Đi cùng đồng đội
                </h2>
                <p>
                  Bản đã đón nhiều đoàn trường học và doanh nghiệp, có đêm gala lên tới 1.500 học
                  sinh. Chương trình được dựng theo số người và mục tiêu của từng đoàn.
                </p>
                <ul className="ticks ticks--two">
                  {GROUP_FITS.map((fit) => (
                    <li key={fit}>{fit}</li>
                  ))}
                </ul>
                <a href="#dang-ky" className="btn btn--rice">
                  Nhận báo giá cho đoàn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hỏi đáp */}
        <section id="hoi-dap" className="block">
          <span className="deco deco--leaves deco--flip" aria-hidden="true" />
          <div className="container">
            <h2 className="title title--center" data-reveal>Câu hỏi thường gặp</h2>
            <div className="faq">
              {FAQ.map((item, i) => (
                <details key={item.q} className="faq__item" data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quy trình đặt tour */}
        <section className="block">
          <div className="container">
            <h2 className="title title--center" data-reveal>
              <span className="title__top">Đặt tour</span> trong 3 bước
            </h2>
            <ol className="steps">
              {BOOKING_STEPS.map((step, i) => (
                <li key={step.title} className="step" data-reveal style={{ '--reveal-delay': `${i * 120}ms` }}>
                  <span className="step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Đăng ký */}
        <section id="dang-ky" className="block">
          <span className="deco deco--vine" aria-hidden="true" />
          <div className="container">
            <div className="signup">
              <div className="signup__text" data-reveal="left">
                <h2 className="title">
                  <span className="title__top">Đăng ký nhận</span> tư vấn và báo giá
                </h2>
                <p>Để lại thông tin, nhân viên sẽ gọi lại để chốt lịch và báo giá cho đoàn của bạn.</p>
                <p className="signup__label">Hotline / Zalo</p>
                <ul className="signup__phones">
                  {CONTACT.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a href={`tel:${phone.tel}`}>{phone.label}</a>
                    </li>
                  ))}
                </ul>
                <a href={CONTACT.zalo} className="btn btn--line signup__btn" target="_blank" rel="noopener noreferrer">
                  Nhắn Zalo
                </a>
              </div>
              <div data-reveal="right">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <Image src="/logo-mark.png" alt="" width={100} height={72} className="footer__logo" />
            <p className="footer__brand">Bản Mường Xanh</p>
            <p>Trải nghiệm, nghỉ dưỡng và Team Building gần Hà Nội.</p>
          </div>
          <div>
            <p className="footer__heading">Liên hệ</p>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.travelTime} từ Hà Nội</p>
            <p>Mở cửa {CONTACT.hours}</p>
            <p>
              Hotline:{' '}
              {CONTACT.phones.map((phone, i) => (
                <span key={phone.tel}>
                  {i > 0 && ', '}
                  <a href={`tel:${phone.tel}`}>{phone.label}</a>
                </span>
              ))}
            </p>
            <a href={mapsSearch} className="btn btn--line footer__btn" target="_blank" rel="noopener noreferrer">
              Mở chỉ đường
            </a>
          </div>
          <div className="footer__map">
            <iframe
              title="Bản đồ đường đến Bản Mường Xanh"
              src={CONTACT.mapsEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <p className="container footer__copy">© {new Date().getFullYear()} Bản Mường Xanh</p>
      </footer>

      {/* Nút liên hệ nhanh, luôn nổi ở góc phải dưới màn hình */}
      <div className="quick-contact">
        <a
          href={CONTACT.zalo}
          className="quick-contact__btn quick-contact__btn--zalo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Nhắn Zalo ${CONTACT.phones[0].label}`}
        >
          Zalo
        </a>
        <a
          href={`tel:${CONTACT.phones[0].tel}`}
          className="quick-contact__btn quick-contact__btn--call"
          aria-label={`Gọi điện ${CONTACT.phones[0].label}`}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
            />
          </svg>
        </a>
      </div>
    </>
  )
}
