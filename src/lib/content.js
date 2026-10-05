// Toàn bộ nội dung trang nằm ở đây — sửa số điện thoại, giá, lịch trình... tại file này.

const img = (name) => `/${name}_n.jpg`

export const IMG = {
  roast: img('582007449_1318369340305570_2342993087102399069'),
  tugOfWar: img('599015890_1344379244371246_5244086278288389604'),
  groupPath: img('612616947_1362411415901362_4940983459143649569'),
  bonfire: img('636928467_1396537082488795_2186361809628835408'),
  groupSign: img('640449432_1403761058433064_4869839422715905176'),
  zipline: img('656556675_1428784739264029_499076971320786787'),
  muongDance: img('658128372_1429709552504881_3215632321816560114'),
  poolCrowd: img('661475983_1438142651661571_5393163635704002534'),
  poolSign: img('663290374_1438142101661626_3103307602408845476'),
  painting: img('671951104_1447936470682189_1962153436702057111'),
  inflatableHorse: img('698949158_1474610458014790_561538429231984111'),
  poolPalms: img('730503525_27299856219668617_8316038085530193563'),
  teamGame: img('775281929_1369817118699033_150235118027896219'),
  hall: img('786562262_1617639326601104_7256444514703191972'),
  inflatableRing: img('787060588_1067045036077090_733206696680996704'),
  signPines: img('797754738_1576910697784765_7870036743491608825'),
  bambooSwing: img('801284629_1757012948849297_5903687733937689565'),
  nightParty: img('801430357_1633662944878648_9096667198222349055'),
  cycling: img('801873413_1088843643675255_2033292637562162275'),
  galaLights: img('803101776_2314573029279816_1501408313838242192'),
  stage: img('813841831_1070648485958839_3995848785307515896'),
  bambooDance: img('819742812_1594724989336669_6586786425129735545'),
  selfie: img('825279413_1596829412459560_2070894234638892334'),
}

export const CONTACT = {
  name: 'Bản Mường Xanh',
  address: 'Xóm Bằng Gà, xã Lương Sơn, tỉnh Phú Thọ',
  travelTime: 'Khoảng 1 giờ di chuyển',
  hours: '08:00 – 18:30 hằng ngày',
  phones: [
    { label: '0339.813.773', tel: '0339813773' },
  ],
  zalo: 'https://zalo.me/0339813773',
  // Tên địa điểm trên Google Maps, dùng cho nút mở chỉ đường
  mapsQuery: 'Khu du lịch trải nghiệm Bản Mường Xanh',
  // Link nhúng lấy từ Google Maps (Chia sẻ > Nhúng bản đồ)
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5884.245836531224!2d105.4560618!3d20.846601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134412d2d350ead%3A0xa1020841ae695523!2zS2h1IGR1IGzhu4tjaCB0cuG6o2kgbmdoaeG7h20gQuG6o24gTcaw4budbmcgWGFuaA!5e1!3m2!1svi!2s!4v1791183619728!5m2!1svi!2s',
}

export const NAV = [
  { href: '#trai-nghiem', label: 'Trải nghiệm' },
  { href: '#lich-trinh', label: 'Lịch trình' },
  { href: '#bang-gia', label: 'Bảng giá' },
  { href: '#hinh-anh', label: 'Hình ảnh' },
  { href: '#hoi-dap', label: 'Hỏi đáp' },
]

export const HIGHLIGHTS = [
  {
    title: 'Bể bơi giữa thiên nhiên',
    text: 'Bơi giữa đồi cây, có chỗ ngồi nghỉ cho người lớn trông trẻ.',
    image: IMG.poolPalms,
  },
  {
    title: 'Không gian nghỉ dưỡng',
    text: 'Khuôn viên rộng, nhiều cây xanh, đủ chỗ cho cả đoàn đông.',
    image: IMG.signPines,
  },
  {
    title: 'Team Building',
    text: 'Trò chơi vận động theo đội, có quản trò dẫn dắt từ đầu đến cuối.',
    image: IMG.teamGame,
  },
  {
    title: 'Văn hóa Mường',
    text: 'Múa sạp, cồng chiêng và trang phục truyền thống của người Mường.',
    image: IMG.bambooDance,
  },
]

export const ABOUT_POINTS = [
  'Đi về trong ngày từ Hà Nội, không phải dậy quá sớm.',
  'Hợp với gia đình, nhóm bạn, lớp học và đoàn công ty.',
  'Bơi, chơi vận động, ăn cơm Mường và xem múa sạp trong cùng một chuyến.',
]

export const ITINERARY = [
  { time: '06:30', title: 'Đón khách tại Hà Nội', text: 'Xe đón tại điểm hẹn và khởi hành đi Lương Sơn.' },
  { time: '08:30', title: 'Nhận khu vực nghỉ', text: 'Cất đồ, nghe phổ biến lịch trình trong ngày.' },
  { time: '09:00', title: 'Team Building', text: 'Các trò chơi vận động theo đội, có quản trò dẫn dắt.' },
  { time: '11:30', title: 'Ăn trưa món địa phương', text: 'Bữa trưa với các món ăn của vùng Mường.' },
  { time: '13:30', title: 'Vui chơi và khám phá', text: 'Tắm bể bơi, tham quan bản, chụp ảnh, xem múa sạp.' },
  { time: '16:00', title: 'Lên xe về Hà Nội', text: 'Xe đưa đoàn về lại điểm đón ban đầu.' },
]

export const PLANS = [
  {
    id: 'tour-1-ngay',
    name: 'Tour 1 ngày',
    price: '560.000 – 580.000đ',
    fit: 'Cho chuyến đi trong ngày',
    features: ['Xe đưa đón', 'Ăn trưa', 'Vé tham quan'],
    cta: 'Đặt tour 1 ngày',
  },
  {
    id: 'tour-2-ngay-1-dem',
    name: 'Tour 2 ngày 1 đêm',
    price: '1.130.000 – 1.280.000đ',
    fit: 'Cho kỳ nghỉ cuối tuần',
    features: ['Ngủ lại một đêm tại bản', 'Thêm hoạt động buổi tối', 'Chương trình theo yêu cầu đoàn'],
    cta: 'Đặt tour 2 ngày 1 đêm',
    featured: true,
  },
]

export const PRICE_NOTES = [
  'Trẻ 5–8 tuổi: 50% giá tour.',
  'Trẻ dưới 5 tuổi: miễn phí.',
  'Giá thay đổi theo số khách và ngày khởi hành.',
]

export const INCLUDED = [
  { title: 'Xe đưa đón', text: 'Xe du lịch đưa đón theo lịch trình.' },
  { title: 'Bữa ăn chính', text: '01 bữa ăn chính tại bản.' },
  { title: 'Khu nghỉ trưa', text: 'Khu nghỉ trưa cộng đồng cho cả đoàn.' },
  { title: 'Vé tham quan', text: 'Vé vào cổng, tham quan và vui chơi.' },
  { title: 'Bảo hiểm du lịch', text: 'Mức 40.000.000đ/trường hợp.' },
  { title: 'Nước uống', text: 'Nước uống trên xe.' },
  { title: 'Hướng dẫn viên', text: 'Hướng dẫn viên tiếng Việt đi cùng đoàn.' },
  { title: 'Quà tặng', text: 'Tặng 01 nón cho mỗi khách.' },
  { title: 'Team Building', text: 'Âm thanh, áo đội, MC, kịch bản và đạo cụ cho đoàn từ 40 thành viên.' },
]

// Section "Dành cho ai"
export const AUDIENCE = [
  { title: 'Gia đình', text: 'Bể bơi, bãi cỏ và trò chơi cho trẻ; người lớn có chỗ ngồi nghỉ.' },
  { title: 'Nhóm bạn', text: 'Đi về trong ngày, nhiều trò chơi chung và góc chụp ảnh.' },
  { title: 'Trường học', text: 'Chuyến ngoại khóa kết hợp trải nghiệm văn hóa Mường cho học sinh.' },
  { title: 'Công ty, tổ chức', text: 'Team Building có quản trò, gala và lửa trại theo yêu cầu.' },
]

// Section "Hoạt động & tiện ích" — mỗi mục đi kèm một ảnh thực tế
export const ACTIVITIES = [
  { title: 'Đạp xe quanh bản', text: 'Đạp xe trên lối đi rợp cây trong khuôn viên.', image: IMG.cycling },
  { title: 'Đu dây giữa rừng', text: 'Trượt dây qua tán cây cho người thích cảm giác mạnh.', image: IMG.zipline },
  { title: 'Trò chơi dân gian', text: 'Đu tre, kéo co và các trò chơi tập thể.', image: IMG.bambooSwing },
  { title: 'Nhà hơi vận động', text: 'Vượt chướng ngại vật trên các trò chơi hơi cỡ lớn.', image: IMG.inflatableRing },
  { title: 'Lửa trại và gala đêm', text: 'Đốt lửa trại, giao lưu văn nghệ cho đoàn ở lại buổi tối.', image: IMG.bonfire },
  { title: 'Tô tượng, làm thủ công', text: 'Góc sáng tạo dành cho các bạn nhỏ.', image: IMG.painting },
]

// Section "Đặt tour trong 3 bước"
export const BOOKING_STEPS = [
  { title: 'Gửi yêu cầu', text: 'Điền form bên dưới hoặc gọi hotline, cho biết số khách và ngày dự kiến.' },
  { title: 'Nhận tư vấn và báo giá', text: 'Nhân viên gọi lại, gợi ý chương trình và báo giá theo đoàn.' },
  { title: 'Chốt lịch và lên đường', text: 'Xác nhận ngày đi; xe đón đoàn tại điểm hẹn ở Hà Nội.' },
]

export const GALLERY = [
  { src: IMG.galaLights, alt: 'Đêm gala dưới dàn đèn dây trên bãi cỏ', size: 'wide' },
  { src: IMG.bambooDance, alt: 'Khách cùng múa sạp với đội văn nghệ Mường' },
  { src: IMG.groupPath, alt: 'Nhóm bạn tạo dáng trên con đường trong bản', size: 'tall' },
  { src: IMG.poolSign, alt: 'Bể bơi cạnh biển chữ Bản Mường Xanh' },
  { src: IMG.bonfire, alt: 'Lửa trại buổi tối' },
  { src: IMG.zipline, alt: 'Đu dây qua rừng cây' },
  { src: IMG.muongDance, alt: 'Tiết mục múa Mường trên sân khấu' },
  { src: IMG.bambooSwing, alt: 'Trò chơi đu tre dân gian' },
  { src: IMG.groupSign, alt: 'Đoàn khách chụp ảnh trước biển Nông trại vui vẻ', size: 'wide' },
]

// Ảnh nền ở đầu trang (có hiệu ứng zoom chậm). Muốn đổi ảnh: chép file vào public/ rồi sửa đường dẫn này.
export const HERO_IMAGE = '/hero-thung-lung.webp'

// Dán link YouTube vào `youtube` (dạng nào cũng được: watch?v=..., youtu.be/..., shorts/...).
// `poster` là ảnh bìa hiện trước khi người xem bấm phát.
export const VIDEOS = [
  {
    youtube: 'https://www.youtube.com/watch?v=oQElVzauFVU',
    poster: IMG.poolCrowd,
    title: 'Một ngày ở Bản Mường Xanh',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=ItZaAaJGolk',
    poster: IMG.nightParty,
    title: 'Gala dinner cùng 1.500 học sinh',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=osrAgyEvabg',
    poster: IMG.selfie,
    title: 'Phụ huynh và học sinh kể lại chuyến đi',
  },
]

export const GROUP_FITS = [
  'Đoàn công ty, doanh nghiệp',
  'Trường học, lớp học',
  'Cơ quan, hội nhóm',
  'Team Building từ 40 người',
]

export const FAQ = [
  {
    q: 'Trẻ em đi tour tính giá thế nào?',
    a: 'Trẻ từ 5 đến 8 tuổi tính 50% giá tour, trẻ dưới 5 tuổi được miễn phí.',
  },
  {
    q: 'Tour 1 ngày gồm những gì?',
    a: 'Xe đưa đón, 01 bữa ăn chính, khu nghỉ trưa, vé tham quan và vui chơi, bảo hiểm du lịch, nước uống trên xe, hướng dẫn viên và nón tặng. Tour 2 ngày 1 đêm được tư vấn riêng theo yêu cầu của đoàn.',
  },
  {
    q: 'Đoàn công ty cần đặt trước bao lâu?',
    a: 'Thời gian đặt trước phụ thuộc vào số người và ngày đi. Hãy gọi hotline hoặc để lại thông tin ở cuối trang để được báo lịch trống.',
  },
  {
    q: 'Đoàn bao nhiêu người thì được tổ chức Team Building?',
    a: 'Gói Team Building (âm thanh, áo đội, MC, kịch bản và đạo cụ) áp dụng cho đoàn từ 40 thành viên.',
  },
  {
    q: 'Có lưu trú qua đêm không?',
    a: 'Có. Tour 2 ngày 1 đêm gồm một đêm ngủ lại tại bản, kèm các hoạt động buổi tối.',
  },
  {
    q: 'Có hỗ trợ đoàn công ty, doanh nghiệp không?',
    a: 'Có. Chương trình được dựng riêng theo số người và mục tiêu của đoàn; hãy để lại thông tin để nhận báo giá.',
  },
  {
    q: 'Bản Mường Xanh ở đâu?',
    a: `${CONTACT.address}, cách Hà Nội khoảng 42 km, đi xe mất khoảng 1 giờ.`,
  },
  {
    q: 'Có khu vui chơi cho trẻ nhỏ không?',
    a: 'Có bể bơi, bãi cỏ rộng và nhiều trò chơi hơi cho trẻ em. Trẻ nhỏ cần có người lớn đi kèm khi xuống nước.',
  },
]

export const TOUR_OPTIONS = ['Tour 1 ngày', 'Tour 2 ngày 1 đêm', 'Team Building theo đoàn']
