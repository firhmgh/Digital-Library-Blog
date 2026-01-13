export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: 'Fiksi',
    slug: 'fiksi',
    description: 'Koleksi karya sastra fiksi pilihan dari berbagai genre',
    icon: 'book-open',
    count: 48
  },
  {
    name: 'Non-Fiksi',
    slug: 'non-fiksi',
    description: 'Buku pengetahuan, biografi, dan esai faktual',
    icon: 'library',
    count: 62
  },
  {
    name: 'Jurnal Ilmiah',
    slug: 'jurnal-ilmiah',
    description: 'Publikasi penelitian dan artikel akademis terkini',
    icon: 'microscope',
    count: 35
  },
  {
    name: 'Anak-anak',
    slug: 'anak-anak',
    description: 'Bacaan edukatif dan cerita untuk usia muda',
    icon: 'sparkles',
    count: 27
  },
  {
    name: 'Sejarah',
    slug: 'sejarah',
    description: 'Dokumentasi dan narasi peristiwa masa lampau',
    icon: 'landmark',
    count: 41
  },
  {
    name: 'Teknologi',
    slug: 'teknologi',
    description: 'Perkembangan teknologi dan inovasi digital',
    icon: 'cpu',
    count: 53
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Menyelami Kedalaman Literatur Klasik: Warisan Abadi Sastra Indonesia',
    excerpt: 'Eksplorasi mendalam tentang pengaruh karya-karya sastra klasik Indonesia terhadap perkembangan budaya literasi modern dan identitas bangsa.',
    content: `<p>Literatur klasik Indonesia memiliki tempat istimewa dalam khazanah budaya nusantara. Karya-karya monumental seperti "Sitti Nurbaya", "Layar Terkembang", dan "Atheis" tidak hanya menjadi tonggak sejarah kesusastraan, tetapi juga cerminan perjalanan bangsa dalam menemukan jati dirinya.</p>

<h3>Akar Sejarah Sastra Indonesia</h3>

<p>Perkembangan sastra Indonesia modern dimulai pada awal abad ke-20, bertepatan dengan kebangkitan nasional. Para pelopor seperti Marah Rusli, Sutan Takdir Alisjahbana, dan Achdiat K. Mihardja menggunakan bahasa Melayu-Indonesia sebagai medium untuk menyuarakan pemikiran progresif dan kritik sosial.</p>

<blockquote>"Sastra adalah cermin kehidupan masyarakat, refleksi dari pergulatan jiwa dan pikiran suatu bangsa dalam menemukan identitasnya."</blockquote>

<h3>Tema Universal dalam Konteks Lokal</h3>

<p>Yang membuat literatur klasik Indonesia begitu kuat adalah kemampuannya mengangkat tema-tema universal—cinta, kebebasan, konflik tradisi versus modernitas—dengan sangat kuat berakar pada konteks budaya lokal. "Sitti Nurbaya" misalnya, bukan sekadar kisah cinta tragis, tetapi juga kritik terhadap sistem feodalisme dan perkawinan paksa yang masih kuat pada masanya.</p>

<h3>Relevansi di Era Digital</h3>

<p>Di era digital ini, karya-karya klasik menghadapi tantangan baru. Generasi muda lebih terbiasa dengan konten visual dan naratif cepat. Namun, nilai-nilai yang terkandung dalam literatur klasik—kedalaman karakter, kompleksitas plot, dan keindahan bahasa—tetap relevan dan bahkan sangat dibutuhkan sebagai counterbalance terhadap budaya instant gratification.</p>

<p>Perpustakaan digital memiliki peran krusial dalam melestarikan dan membuat karya-karya ini lebih accessible. Dengan digitalisasi, generasi baru dapat mengakses warisan literatur dengan lebih mudah, di mana pun dan kapan pun.</p>

<h3>Kesimpulan</h3>

<p>Literatur klasik Indonesia bukan hanya artefak sejarah, tetapi living heritage yang terus berbicara kepada setiap generasi. Tugas kita adalah memastikan suara-suara ini tetap terdengar, dipahami, dan dihargai dalam konteks kehidupan modern.</p>`,
    author: {
      name: 'Dr. Anindya Kartika',
      bio: 'Dosen Sastra Indonesia di Universitas Indonesia dan peneliti budaya literasi. Aktif menulis tentang sastra klasik dan modern Indonesia.',
      avatar: 'library books'
    },
    category: 'Fiksi',
    tags: ['Sastra', 'Klasik', 'Budaya', 'Indonesia'],
    date: '2026-01-10',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjgxODUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: '2',
    title: 'Revolusi Perpustakaan Digital: Transformasi Akses Pengetahuan di Era 5G',
    excerpt: 'Bagaimana teknologi 5G dan AI mengubah landscape perpustakaan modern menjadi ekosistem pembelajaran yang lebih inklusif dan interaktif.',
    content: `<p>Perpustakaan telah berevolusi jauh dari sekadar gudang buku. Di era 5G dan kecerdasan buatan, institusi pengetahuan ini bertransformasi menjadi hub pembelajaran interaktif yang menghubungkan jutaan pembelajar di seluruh dunia.</p>

<h3>Dari Fisik ke Digital: Sebuah Paradigma Baru</h3>

<p>Pandemi COVID-19 menjadi katalis yang mempercepat adopsi teknologi digital di perpustakaan. Namun, transformasi ini bukan sekadar memindahkan buku fisik ke format PDF. Ini tentang menciptakan pengalaman pembelajaran yang lebih rich, personal, dan accessible.</p>

<blockquote>"Perpustakaan digital bukan pengganti perpustakaan fisik, tetapi evolusi natural yang memperluas jangkauan pengetahuan tanpa batas geografis."</blockquote>

<h3>Teknologi Pendukung Transformasi</h3>

<ul>
<li><strong>5G Network:</strong> Memungkinkan streaming konten multimedia berkualitas tinggi tanpa lag</li>
<li><strong>AI & Machine Learning:</strong> Personalisasi rekomendasi bacaan dan analisis pola pembelajaran</li>
<li><strong>AR/VR:</strong> Pengalaman immersive dalam eksplorasi koleksi dan virtual reading rooms</li>
<li><strong>Blockchain:</strong> Digital rights management dan sertifikasi kredensial pembelajaran</li>
</ul>

<h3>Democratization of Knowledge</h3>

<p>Dampak paling signifikan dari perpustakaan digital adalah demokratisasi akses pengetahuan. Seorang pelajar di daerah terpencil kini memiliki akses yang sama ke koleksi jurnal ilmiah internasional seperti mahasiswa di universitas top dunia.</p>

<p>Ini bukan hanya tentang equity, tetapi juga about unlocking potensi kolektif masyarakat. Ketika pengetahuan dapat diakses oleh siapa saja, inovasi bisa datang dari mana saja.</p>`,
    author: {
      name: 'Prof. Budi Santoso, Ph.D',
      bio: 'Pakar teknologi informasi perpustakaan dan konsultan digital transformation untuk berbagai perpustakaan nasional.',
      avatar: 'modern technology'
    },
    category: 'Teknologi',
    tags: ['Digital', 'Teknologi', 'Inovasi', '5G'],
    date: '2026-01-08',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1537202108838-e7072bad1927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGlicmFyeXxlbnwxfHx8fDE3NjgyNzkzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: '3',
    title: 'Psikologi Membaca: Bagaimana Buku Membentuk Kepribadian dan Empati',
    excerpt: 'Penelitian terkini mengungkap dampak mendalam aktivitas membaca terhadap perkembangan kognitif, emosional, dan sosial manusia.',
    content: `<p>Membaca bukan sekadar aktivitas mengonsumsi informasi. Penelitian neuroscience modern menunjukkan bahwa membaca, terutama fiksi naratif, secara literal mengubah struktur dan fungsi otak kita.</p>

<h3>Neuroplasticity dan Membaca</h3>

<p>Ketika kita membaca, area otak yang berbeda teraktivasi secara simultan: visual cortex untuk memproses kata, language centers untuk memahami makna, dan yang paling menarik, motor cortex dan sensory areas yang seolah kita sendiri mengalami apa yang dibaca.</p>

<p>Fenomena ini disebut "grounded cognition" - otak kita meng-simulate pengalaman karakter dalam buku, menciptakan semacam virtual reality mental.</p>

<h3>Membangun Empati Melalui Naratif</h3>

<p>Studi longitudinal menunjukkan korelasi kuat antara kebiasaan membaca fiksi dengan tingkat empati yang lebih tinggi. Dengan "menjalani" kehidupan berbagai karakter dari latar belakang berbeda, pembaca mengembangkan kemampuan perspective-taking yang superior.</p>

<blockquote>"Membaca adalah latihan empati terbaik yang bisa kita lakukan. Setiap buku adalah kesempatan untuk menjalani kehidupan yang bukan milik kita."</blockquote>`,
    author: {
      name: 'Dr. Sari Wijaya',
      bio: 'Psikolog klinis dan peneliti cognitive science dengan fokus pada literasi dan perkembangan sosio-emosional.',
      avatar: 'psychology books'
    },
    category: 'Non-Fiksi',
    tags: ['Psikologi', 'Penelitian', 'Kognitif', 'Empati'],
    date: '2026-01-05',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1592693281721-67ad5dcfa91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwcGVyc29ufGVufDF8fHx8MTc2ODI3OTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: '4',
    title: 'Dongeng Nusantara: Melestarikan Kearifan Lokal untuk Generasi Alpha',
    excerpt: 'Mengapa cerita rakyat dan dongeng tradisional tetap penting dalam mendidik anak-anak di era digital, dan bagaimana menghadirkannya dengan cara yang menarik.',
    content: `<p>Di tengah dominasi konten digital asing, dongeng nusantara menyimpan kearifan lokal yang sangat berharga untuk perkembangan karakter anak Indonesia.</p>

<h3>Nilai-Nilai Universal dalam Bungkus Lokal</h3>

<p>Cerita seperti "Bawang Merah Bawang Putih", "Malin Kundang", atau "Timun Mas" mengajarkan nilai-nilai universal seperti kejujuran, kebaikan, dan tanggung jawab, tetapi dengan konteks budaya yang dekat dengan kehidupan anak Indonesia.</p>

<h3>Adaptasi untuk Era Digital</h3>

<p>Bukan berarti dongeng tradisional harus disampaikan dengan cara tradisional. Perpustakaan digital modern menghadirkan dongeng nusantara dalam format interaktif: e-book dengan ilustrasi animasi, audiobook dengan sound effects immersive, bahkan AR storytelling yang membuat karakter "hidup" di ruang anak.</p>`,
    author: {
      name: 'Putri Ramadhani, M.Pd',
      bio: 'Pendidik anak usia dini dan penulis buku anak. Aktif dalam gerakan literasi nasional.',
      avatar: 'children books'
    },
    category: 'Anak-anak',
    tags: ['Dongeng', 'Anak', 'Budaya', 'Pendidikan'],
    date: '2026-01-03',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmd8ZW58MXx8fHwxNzY4Mjc5MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: '5',
    title: 'Jejak Peradaban: Manuskrip Kuno dan Preservasi Digital Heritage',
    excerpt: 'Upaya digitalisasi manuskrip dan naskah kuno Indonesia sebagai bagian dari preservasi warisan budaya untuk generasi mendatang.',
    content: `<p>Indonesia memiliki ribuan manuskrip kuno yang tersebar di berbagai museum, perpustakaan, dan koleksi pribadi. Banyak dari dokumen berharga ini menghadapi ancaman kerusakan karena usia dan kondisi penyimpanan yang kurang ideal.</p>

<h3>Digitalisasi sebagai Solusi Preservasi</h3>

<p>Proyek digitalisasi manuskrip bukan hanya tentang membuat salinan digital. Ini tentang menggunakan teknologi imaging canggih untuk merekam setiap detail, bahkan tinta yang telah pudar, menggunakan multispectral imaging dan AI-enhanced restoration.</p>

<blockquote>"Setiap manuskrip yang hilang adalah jendela ke masa lalu yang tertutup selamanya. Digitalisasi adalah investasi untuk pengetahuan generasi masa depan."</blockquote>

<h3>Membuka Akses untuk Penelitian</h3>

<p>Dengan digitalisasi, peneliti dari seluruh dunia dapat mengakses dan mempelajari manuskrip Indonesia tanpa harus datang langsung. Ini membuka peluang kolaborasi penelitian internasional dan menempatkan heritage Indonesia di panggung akademis global.</p>`,
    author: {
      name: 'Dr. Ahmad Fauzi',
      bio: 'Sejarawan dan kurator koleksi manuskrip Nusantara di Perpustakaan Nasional Indonesia.',
      avatar: 'historical manuscripts'
    },
    category: 'Sejarah',
    tags: ['Sejarah', 'Manuskrip', 'Preservasi', 'Digital'],
    date: '2025-12-28',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1643609873467-15cfffe782be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFudXNjcmlwdHN8ZW58MXx8fHwxNzY4MjM0Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '6',
    title: 'Machine Learning dalam Katalogisasi: Masa Depan Manajemen Koleksi Perpustakaan',
    excerpt: 'Bagaimana kecerdasan buatan membantu perpustakaan mengelola jutaan item koleksi dengan lebih efisien dan akurat.',
    content: `<p>Katalogisasi manual untuk jutaan buku dan dokumen adalah pekerjaan yang sangat time-consuming dan prone to human error. Machine learning menawarkan solusi yang mengubah cara perpustakaan mengelola koleksinya.</p>

<h3>Automated Metadata Generation</h3>

<p>AI modern dapat menganalisis konten buku, mengekstrak informasi bibliografis, menentukan subject headings, dan bahkan menghasilkan summary secara otomatis dengan akurasi tinggi.</p>

<h3>Personalized Discovery</h3>

<p>Recommendation engine yang powered by ML dapat memahami preferensi pengguna dengan lebih nuanced, tidak hanya based on genre tetapi juga writing style, themes, dan complexity level.</p>`,
    author: {
      name: 'Rina Kusuma, S.Kom, M.T',
      bio: 'Data scientist specializing in library information systems and machine learning applications.',
      avatar: 'tech professional'
    },
    category: 'Teknologi',
    tags: ['AI', 'Machine Learning', 'Katalog', 'Otomasi'],
    date: '2025-12-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2ODIyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '7',
    title: 'Filosofi Membaca Lambat: Melawan Budaya Speed Reading di Era Digital',
    excerpt: 'Mengapa membaca dengan tempo lambat dan deliberate justru lebih bermanfaat untuk pemahaman mendalam dan retensi pengetahuan.',
    content: `<p>Di era di mana semua orang berlomba membaca lebih banyak buku per tahun, gerakan "slow reading" menawarkan perspektif yang berbeda: quality over quantity.</p>

<h3>Deep Reading vs Shallow Reading</h3>

<p>Neuroscientist Maryanne Wolf membedakan antara "deep reading" yang melibatkan analisis, refleksi, dan emotional engagement, dengan "shallow reading" yang sekadar mengonsumsi informasi superficial.</p>

<blockquote>"Kecepatan membaca bukanlah tujuan. Pemahaman, retensi, dan transformasi personal adalah hasil yang sesungguhnya berharga dari aktivitas membaca."</blockquote>

<h3>Praktik Slow Reading</h3>

<p>Slow reading bukan berarti membaca setiap kata dengan sangat pelan. Ini tentang memberikan waktu untuk merenungkan ide, membuat koneksi dengan pengetahuan existing, dan membiarkan teks "berbicara" kepada kita.</p>`,
    author: {
      name: 'Dian Sastro, M.A',
      bio: 'Filsuf dan essayist. Menulis tentang fenomenologi membaca dan hermeneutika.',
      avatar: 'philosopher'
    },
    category: 'Non-Fiksi',
    tags: ['Filosofi', 'Membaca', 'Literasi', 'Mindfulness'],
    date: '2025-12-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1583691880320-b1e704fd3df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG93JTIwcmVhZGluZ3xlbnwxfHx8fDE3NjgyNzk2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '8',
    title: 'Cerita Rakyat Sebagai Terapi: Bibliotherapy untuk Kesehatan Mental Anak',
    excerpt: 'Eksplorasi penggunaan cerita dan dongeng sebagai medium terapi untuk mengatasi kecemasan dan trauma pada anak-anak.',
    content: `<p>Bibliotherapy, atau terapi melalui membaca, adalah metode yang semakin recognized dalam psikologi anak. Cerita rakyat dengan struktur naratifnya yang khas sangat efektif untuk tujuan therapeutic.</p>

<h3>Kenapa Cerita Rakyat Efektif untuk Terapi?</h3>

<p>Cerita rakyat biasanya memiliki struktur yang jelas: protagonis menghadapi masalah, berjuang mengatasinya, dan akhirnya berhasil. Pola ini memberikan sense of predictability dan hope yang therapeutic untuk anak yang sedang menghadapi kesulitan.</p>

<h3>Kasus Aplikasi</h3>

<p>Untuk anak yang mengalami separation anxiety, cerita seperti "Timun Mas" (yang harus meninggalkan rumah tetapi akhirnya selamat) bisa membantu anak memproses ketakutan mereka dalam konteks yang aman dan symbolic.</p>`,
    author: {
      name: 'Dr. Linda Permata',
      bio: 'Psikolog anak dan play therapist. Menggunakan bibliotherapy dalam praktik klinisnya.',
      avatar: 'child psychologist'
    },
    category: 'Anak-anak',
    tags: ['Terapi', 'Psikologi', 'Anak', 'Cerita'],
    date: '2025-12-15',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1616292627662-59c77913ec38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwYm9va3N8ZW58MXx8fHwxNzY4Mjc5NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '9',
    title: 'Arsitektur Perpustakaan: Desain Ruang yang Menginspirasi Pembelajaran',
    excerpt: 'Bagaimana desain fisik perpustakaan modern mempengaruhi behavior dan produktivitas pengunjung, dari perspective arsitektur dan psikologi environmental.',
    content: `<p>Perpustakaan bukan sekadar tempat menyimpan buku. Arsitektur dan desain interior perpustakaan memiliki dampak signifikan terhadap bagaimana orang berinteraksi dengan pengetahuan.</p>

<h3>Prinsip Desain Perpustakaan Modern</h3>

<p>Perpustakaan kontemporer menggabungkan berbagai jenis ruang: quiet zones untuk deep focus, collaborative spaces untuk diskusi kelompok, casual reading corners, dan tech labs. Diversitas ini mengakomodasi berbagai learning styles dan kebutuhan.</p>

<h3>Natural Light dan Produktivitas</h3>

<p>Penelitian menunjukkan bahwa akses ke natural light meningkatkan mood, konsentrasi, dan mengurangi eye strain. Perpustakaan modern mengintegrasikan large windows dan skylights dalam desainnya.</p>

<blockquote>"Ruang membentuk aktivitas. Perpustakaan yang dirancang dengan baik tidak hanya menyimpan pengetahuan, tetapi actively menginspirasi pencarian pengetahuan."</blockquote>`,
    author: {
      name: 'Arif Budiman, S.Ars, M.Arch',
      bio: 'Arsitek spesialis desain perpustakaan dan ruang publik edukatif. Partner di Studio Arsitektur Nusantara.',
      avatar: 'architect'
    },
    category: 'Non-Fiksi',
    tags: ['Arsitektur', 'Desain', 'Perpustakaan', 'Ruang'],
    date: '2025-12-10',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1554896541-dff010081afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5fGVufDF8fHx8MTc2ODIxNDMyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '10',
    title: 'Dari Lontar ke Cloud: Evolusi Media Penyimpanan Pengetahuan Indonesia',
    excerpt: 'Perjalanan panjang media penyimpanan informasi di Indonesia, dari daun lontar hingga cloud storage, dan apa yang bisa kita pelajari dari evolusi ini.',
    content: `<p>Sejarah penyimpanan pengetahuan di Indonesia adalah cermin dari evolusi teknologi dan budaya literasi nusantara. Dari lontar yang elegant hingga data centers yang sophisticated, setiap era memiliki challengesnya sendiri.</p>

<h3>Era Lontar dan Manuskrip</h3>

<p>Daun lontar adalah medium yang remarkable - sustainable, durable (bisa bertahan ratusan tahun jika dirawat), dan renewable. Namun, proses pembuatannya labor-intensive dan tidak scalable.</p>

<h3>Revolusi Percetakan</h3>

<p>Masuknya teknologi cetak ke Nusantara pada abad ke-19 mengubah landscape literasi. Buku menjadi lebih accessible, meskipun masih menjadi privilege untuk kelas tertentu.</p>

<h3>Era Digital dan Cloud</h3>

<p>Hari ini, dengan cloud storage, kita bisa menyimpan entire perpustakaan dalam device yang muat di saku. Namun, kita menghadapi tantangan baru: digital preservation, format obsolescence, dan digital divide.</p>`,
    author: {
      name: 'Prof. Dr. Bambang Setiawan',
      bio: 'Sejarawan teknologi dan kurator Museum Sejarah Informasi Indonesia.',
      avatar: 'history professor'
    },
    category: 'Sejarah',
    tags: ['Sejarah', 'Teknologi', 'Evolusi', 'Media'],
    date: '2025-12-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1632038585992-fecf8a0cf59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwYm9va3N8ZW58MXx8fHwxNzY4Mjc5NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '11',
    title: 'Open Access Movement: Demokratisasi Jurnal Ilmiah di Indonesia',
    excerpt: 'Gerakan open access dalam publikasi ilmiah dan bagaimana ini mengubah landscape penelitian di Indonesia.',
    content: `<p>Selama dekade, akses ke jurnal ilmiah berkualitas menjadi privilege dari institusi yang mampu membayar subscription mahal. Open Access Movement mengubah paradigma ini.</p>

<h3>Barrier to Knowledge</h3>

<p>Paywall journal subscriptions menciptakan ketimpangan akses pengetahuan. Peneliti di negara berkembang dan institusi kecil kesulitan mengakses literatur terkini yang essential untuk penelitian mereka.</p>

<h3>Model Open Access</h3>

<p>Ada berbagai model OA: Gold OA (langsung open), Green OA (self-archiving), dan Diamond OA (tanpa biaya untuk penulis maupun pembaca). Masing-masing memiliki pro dan cons.</p>

<h3>Impact di Indonesia</h3>

<p>Indonesia telah meluncurkan beberapa platform OA seperti Garuda (Garba Rujukan Digital) yang mengindeks ribuan jurnal lokal. Ini meningkatkan visibility penelitian Indonesia di level global.</p>`,
    author: {
      name: 'Dr. Ratna Sari, S.Si, M.Sc',
      bio: 'Research librarian dan advokat open science. Ketua Indonesian Open Access Initiative.',
      avatar: 'researcher'
    },
    category: 'Jurnal Ilmiah',
    tags: ['Open Access', 'Penelitian', 'Akademik', 'Jurnal'],
    date: '2025-12-01',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNofGVufDF8fHx8MTc2ODI3OTYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: '12',
    title: 'Gamifikasi Literasi: Membuat Membaca Menyenangkan untuk Generasi Z dan Alpha',
    excerpt: 'Strategi gamifikasi yang efektif untuk meningkatkan engagement dan motivasi membaca pada generasi digital native.',
    content: `<p>Generasi Z dan Alpha tumbuh dengan games dan interactive media. Gamifikasi literasi bukan tentang "memanipulasi" mereka untuk membaca, tetapi tentang merancang reading experience yang resonates dengan nature digital mereka.</p>

<h3>Elemen Gamifikasi yang Efektif</h3>

<p>Points, badges, dan leaderboards adalah basic, tetapi gamifikasi yang sophisticated goes beyond. Progress visualization, personalized challenges, collaborative quests, dan narrative-driven reading paths lebih engaging.</p>

<h3>Studi Kasus: Reading Quest App</h3>

<p>Beberapa perpustakaan digital mengimplementasikan sistem "Reading Quest" di mana setiap buku yang diselesaikan membuka "chapter" dalam adventure story yang lebih besar. Users collect virtual artifacts dan unlock special content.</p>

<h3>Balance Intrinsic dan Extrinsic Motivation</h3>

<p>Kunci sukses gamifikasi adalah tidak membunuh intrinsic motivation untuk membaca. External rewards harus gradually mendorong appreciation terhadap reading itu sendiri.</p>`,
    author: {
      name: 'Maya Angelina, M.Pd',
      bio: 'Educational game designer dan literasi consultant. Founder startup edtech Baca.id.',
      avatar: 'game designer'
    },
    category: 'Anak-anak',
    tags: ['Gamifikasi', 'Pendidikan', 'Teknologi', 'Literasi'],
    date: '2025-11-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1728571195314-5979a49acd12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pZmljYXRpb258ZW58MXx8fHwxNzY4Mjc5NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function searchArticles(query: string): Article[] {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    article.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getRelatedArticles(currentArticle: Article, limit: number = 3): Article[] {
  return articles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category === currentArticle.category ||
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
}