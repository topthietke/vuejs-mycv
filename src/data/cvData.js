// Dữ liệu CV - có thể chỉnh sửa tại đây
export const cvData = {
  personal: {
    name: 'Trần Ngọc Tú',
    title: 'Lập trình viên PHP Laravel',
    dob: '23/04/1986',
    phone: '0765132999',
    email: 'tranngoctu.it@gmail.com',
    address: 'Tây Mỗ - Nam Từ Liêm - Hà Nội',
    avatar: '/avatar.jpg',
  },
  objective: 'Với 5 năm trong nghề lập trình, triển khai trực tiếp nhiều dự án lớn nhỏ, tôi mong muốn ứng tuyển vào vị trí Lập trình PHP của Công ty để có thể áp dụng những kiến thức, kinh nghiệm lập trình của bản thân để nâng cấp sản phẩm và mang lại những giá trị hữu ích cho doanh nghiệp. Đồng thời, mục tiêu phát triển trong vòng 2 năm tới của tôi sẽ trở thành một Trưởng nhóm hoặc Quản lý dự án giỏi.',
  education: [
    { school: 'Trường Đại học Thái Nguyên', major: 'Công nghệ thông tin', grade: 'Khá', period: '09/2017 - 05/2019' },
    { school: 'Trường Cao Đăng Sư phạm', major: 'Công nghệ thông tin', grade: 'Khá', period: '09/2006 - 05/2008' },
    { school: 'Trường Điện tử Điện lạnh', major: 'Công nghệ thông tin', grade: 'Khá', period: '09/2024 - 05/2006' },
  ],
  skills: [
    { id: 1, tech: 'PHP: Laravel, Lumen, Thuần, MVC, Wordpress, OOP, Design Pattern', level: 'Thành thạo' },
    { id: 2, tech: 'Resful API, VueJS, HTML, CSS, JS, Bootstrap, Docker', level: 'Thành thạo' },
    { id: 3, tech: 'Linux, Windows, Nginx, Apache, XAMPP, WinSCP, Putty, Gitlab, GitHub', level: 'Thành thạo' },
    { id: 4, tech: 'CI/CD, NextJS, NuxtJS, ReactJS, NodeJS, Flutter Dart, Liferay (CMS - Java)', level: 'Cơ bản, Tìm hiểu' },
    { id: 5, tech: 'MySQL, MariaDB, MongoDB, SQL Server', level: 'Hiểu biết' },
  ],
  workExperience: [
    {
      company: 'Công ty Cổ phần Công nghệ HTECOM',
      position: 'Chuyên viên lập trình',
      period: '07/2024 - nay',
      tech: 'PHP (Laravel), MySQL, HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, Queue, Docker',
      projects: [
        { name: 'Dự án tuyển sinh du học Vangunu', url: 'https://vangunu.com', label: 'vangunu.com' },
        { name: 'Dự án Booking Spa cho khách hàng Châu Âu', url: 'https://cicireluxe.com.au', label: 'cicireluxe.com.au' },
        { name: 'Dự án Hệ thống CRM tuyển sinh của ĐH Mở HCM', url: 'https://crm.elolms.edu.vn', label: 'crm.elolms.edu.vn' },
        { name: 'Dự án mạng xã hội thanh thiếu niên', url: 'https://vlingai.com', label: 'vlingai.com' },
        { name: 'Dự án Liferay (CMS Java) Đường cao tốc Việt Nam', url: 'http://portal.tctvec.vn/web/guest', label: 'portal.tctvec.vn' },
      ],
      tasks: [
        'Phân tích yêu cầu, thiết kế giải pháp và kiến trúc phần mềm cho dự án.',
        'Triển khai các chức năng chính của dự án (Backend, Frontend).',
        'Review code và đảm bảo chất lượng.',
        'Deploy ứng dụng lên server.',
        'Debug và khắc phục lỗi.',
      ],
    },
    {
      company: 'Tập đoàn Omigroup',
      position: 'Chuyên viên lập trình',
      period: '06/2022 đến 06/2024',
      tech: 'PHP (Laravel), MySQL, HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, Queue, Docker',
      projects: [
        { name: 'Hệ thống bán hàng dược phẩm trực tuyến', url: 'http://vangunu.com', label: 'Bán hàng Omipharma' },
        { name: 'Hệ thống Quản lý bán hàng nội bộ (Ominext)', url: 'https://omi-pos.ominext.dev/xadmin/login', label: 'Omi-pos Ominext' },
      ],
      tasks: [
        'Phối hợp các thành viên trong nhóm, tham gia phát triển và nâng cấp hệ thống API từ phiên bản PHP thuần sang PHP Lumen.',
        'Tham gia nghiên cứu, thiết kế và tối ưu database: MySQL, MongoDB.',
        'Tham gia nghiên cứu, phát triển, tích hợp các sàn TMĐT: Shopee, Lazada về hệ thống Omipos.',
        'Phối hợp với nhóm Kiểm thử kiểm tra và sửa lỗi.',
      ],
    },
    {
      company: 'Công ty trực tuyến Hoàng Kim',
      position: 'Chuyên viên lập trình PHP Laravel',
      period: '03/2020 đến 04/2022',
      tech: 'PHP Laravel, MySQL, HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, Queue, Docker, Gitlab, GitHub',
      projects: [
        { name: 'Phần mềm quản lý bán hàng POD nội bộ', url: null, label: null },
        { name: 'Website bán hàng POD trên shopify', url: null, label: null },
        { name: 'Website bán hàng POD trên wordpress', url: null, label: null },
      ],
      tasks: [
        'Phát triển, tối ưu code, maintain và xây dựng các module hệ thống quản trị bán hàng của Công ty.',
        'Cắt chuyển giao diện HTML sang PHP Laravel, tối ưu hiệu suất và khả năng tái sử dụng code.',
        'Phát triển và nâng cấp các tính năng trên web bán hàng trên nền tảng Shopify, Wordpress, đảm bảo trải nghiệm người dùng tốt.',
        'Thiết kế và tích hợp API, kết nối hệ thống với bên thứ ba (cổng thanh toán, vận chuyển...).',
        'Quản lý cơ sở dữ liệu MySQL, tối ưu câu lệnh SQL và cải thiện hiệu năng hệ thống.',
        'Sử dụng GitLab để quản lý source code và làm việc nhóm hiệu quả.',
      ],
    },
    {
      company: 'Dự án cá nhân',
      position: 'Freelance',
      period: '05/2018 đến 01/2022',
      tech: 'PHP Laravel, Wordpress, MySQL, HTML5, CSS3, Bootstrap 5, Js, Gitlab',
      projects: [
        { name: 'Dự án quản lý bán hàng TMAS', url: 'http://tmas.vn', label: 'tmas.vn' },
        { name: 'Dự án xây dựng HVHome', url: 'https://hvhomevn.com/', label: 'hvhomevn.com' },
        { name: 'Dự án thực phẩm sạch', url: '#', label: 'halofoods.vn' },
        { name: 'Dự án năng lượng mặt trời', url: '#', label: 'tctsolar.com' },
      ],
      tasks: [
        'Phối hợp các thành viên trong nhóm, tham gia phát triển và nâng cấp hệ thống API từ phiên bản PHP thuần sang PHP Lumen.',
        'Tham gia nghiên cứu, thiết kế và tối ưu database: MySQL, MongoDB.',
        'Tham gia nghiên cứu, phát triển, tích hợp các sàn TMĐT: Shopee, Lazada về hệ thống Omipos.',
        'Phối hợp với nhóm Kiểm thử kiểm tra và sửa lỗi.',
      ],
    },
  ],
  activities: [
    {
      org: 'Tại Tập đoàn Omigroup',
      detail: 'Tham gia giải bóng đá thường niên của Omigroup, nâng cao tinh thần và gắn kết đồng đội.',
      items: [],
    },
    {
      org: 'Tổng công ty sản xuất thiết bị Viettel (Tên cũ: Công ty Thông tin M1)',
      detail: null,
      items: [
        'Tham gia Ngày hội sáng kiến ý tưởng để tạo ra những cách làm mới nâng cao hiệu quả trong trong việc.',
        'Tham gia huấn luyện quân sự và đội phòng cháy chữa cháy (PCCC), rèn luyện tinh thần kỷ luật, tác phong sẵn sàng ứng phó tình huống.',
      ],
    },
  ],
  languages: [
    { lang: 'Tiếng Việt', desc: 'Thành thạo ngôn ngữ mẹ đẻ, có khả năng giao tiếp và viết lách tốt, sử dụng thành thạo trong công việc và cuộc sống hàng ngày.' },
    { lang: 'Tiếng Anh', desc: 'Đọc hiểu tài liệu chuyên ngành, Có thể giao tiếp qua Chat Messenger, Email, Zalo với đồng nghiệp và khách hàng nước ngoài. Đang trong quá trình học tập để nâng cao kỹ năng giao tiếp và viết lách tiếng Anh.' },
  ],
}
