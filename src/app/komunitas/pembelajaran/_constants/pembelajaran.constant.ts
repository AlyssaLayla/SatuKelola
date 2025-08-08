import { Comment, Course, FeaturedCourse } from '../_types/pembelajaran.type';

export const FEATURED_COURSE: FeaturedCourse = {
  title: "Strategi Pemasaran Untuk Akun Tiktokmu!",
  description:
    "Course ini dirancang untuk membekali peserta dengan pemahaman dan keterampilan praktis dalam merancang strategi pemasaran yang efektif di platform TikTok. Peserta akan mempelajari cara mengidentifikasi target audiens, menciptakan konten yang menarik, memanfaatkan algoritma TikTok, serta mengaplikasi taktik pertumbuhan organik dan berbayar. Cocok untuk pelaku UMKM, content creator, maupun pemasar digital yang ingin memperluas jangkauan brand melalui media sosial berbasis video pendek.",
  instructor: "Ahmad Rizki",
  duration: "2.5 jam",
  students: 1250,
  rating: 4.8,
  thumbnail: "/video-thumbnail.png",
};

export const RECOMMENDED_COURSES: Course[] = [
  {
    id: "1",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Sarah Johnson",
    duration: "1.5 jam",
    students: 890,
    rating: 4.7,
    thumbnail: "/course-thumbnail.png",
    isPopular: true,
    level: "beginner",
  },
  {
    id: "2",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Budi Santoso",
    duration: "2 jam",
    students: 654,
    rating: 4.6,
    thumbnail: "/course-thumbnail.png",
    level: "intermediate",
  },
  {
    id: "3",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Maya Putri",
    duration: "3 jam",
    students: 432,
    rating: 4.9,
    thumbnail: "/course-thumbnail.png",
    level: "advanced",
  },
  {
    id: "4",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Andi Pratama",
    duration: "1.8 jam",
    students: 723,
    rating: 4.5,
    thumbnail: "/course-thumbnail.png",
    level: "beginner",
  },
  {
    id: "5",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Dewi Lestari",
    duration: "2.2 jam",
    students: 567,
    rating: 4.8,
    thumbnail: "/course-thumbnail.png",
    level: "intermediate",
  },
  {
    id: "6",
    title: "Strategi Pemasaran Dari Rumah Saja!",
    description:
      "Strategi pemasaran dari rumah saja yang praktis dan efektif, cukup modal kreativitas, konsistensi, dan koneksi internet!",
    instructor: "Rudi Hermawan",
    duration: "2.7 jam",
    students: 398,
    rating: 4.4,
    thumbnail: "/course-thumbnail.png",
    level: "advanced",
  },
];

export const COMMENTS: Comment[] = [
  {
    id: "1",
    author: "Budi Martono",
    avatar: "/api/placeholder/40/40",
    content:
      "Saya berhasil jual 500 pcs keripik singkong dalam 3 hari hanya dari 1 video TikTok! Rahasianya: gunakan audio trending, buka 'live' jam 8 malam, dan pakai strategi giveaway sederhana...",
    likes: 13,
    views: 342,
    replies: 12,
    timestamp: "2 hari lalu",
  },
  {
    id: "2",
    author: "Andi Haryanto",
    avatar: "/api/placeholder/40/40",
    content:
      "Aku pernah coba eksperimen upload 3 video sehari selama 7 hari. Hari ke-4, satu video yang pakai audio trending langsung meledak - view nya tembus 500K. Ternyata konsistensi dan riset audio itu penting banget di TikTok. Sejak itu aku belajar bikin konten yang tetap relevan tapi dikemas dengan cara yang lagi trend.",
    likes: 13,
    views: 342,
    replies: 12,
    timestamp: "3 hari lalu",
  },
];