import { TrendingUp } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  count: number;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  category: string;
  publishedAt: string;
  likes: number;
  views: number;
  comments: number;
  isPopular?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: "manajemen-bisnis",
    name: "Manajemen Bisnis",
    color: "#FDD741",
    icon: TrendingUp,
    count: 25
  },
  {
    id: "keuangan-umkm",
    name: "Keuangan UMKM",
    color: "#FDD741",
    icon: TrendingUp,
    count: 18
  },
  {
    id: "strategi-pemasaran",
    name: "Strategi Pemasaran",
    color: "#FDD741",
    icon: TrendingUp,
    count: 32
  },
];

export const DISCUSSIONS: Discussion[] = [
  {
    id: "1",
    title: "Cara viralkan produk UMKM di TikTok dengan modal Rp 100 ribu",
    content: "Saya berhasil jual 500 pcs keripek singkong dalam 3 hari hanya dari 1 video TikTok! Rahasianya: gunakan audio trending, buka 'live' jam 8 malam, dan pakai strategi giveaway sederhana...",
    author: "Budi Martono",
    avatar: "/api/placeholder/40/40",
    category: "Strategi Pemasaran",
    publishedAt: "2024-08-07",
    likes: 13,
    views: 342,
    comments: 12,
    isPopular: true
  },
  {
    id: "2",
    title: "Selamatkan usaha dari kebangkrutan: tips atur cash flow di masa sulit",
    content: "Bulan lalu saya hampir gulung tikar karena utang menumpuk. Berbagi pengalaman: cara negosiasi dengan supplier, restrukturisasi utang, dan trik jual stok lama tanpa rugi...",
    author: "Anonim",
    avatar: "/api/placeholder/40/40",
    category: "Krisis & Solusi",
    publishedAt: "2024-08-06",
    likes: 13,
    views: 342,
    comments: 12
  },
  {
    id: "3",
    title: "Mitra produksi found! Pengalaman kolab dengan pengrajin Bali",
    content: "Dari cari mitra di forum ini sampai ekspor pertama ke Jepang: bagaimana membangun trust, bagi hasil adil, dan handle custom order lintas provinsi...",
    author: "Siti Rahayu",
    avatar: "/api/placeholder/40/40",
    category: "Jaringan Kolaborasi",
    publishedAt: "2024-08-05",
    likes: 13,
    views: 342,
    comments: 12
  },
  {
    id: "4",
    title: "Stok kedaluwarsa turun 80% dengan sistem FIFO ala warung",
    content: "Tak perlu aplikasi mahal! Cukup pakai kode warna stiker dan penataan rak sederhana. Simak foto-foto implementasi di usaha kue saya...",
    author: "Fauzi Ahmad",
    avatar: "/api/placeholder/40/40",
    category: "Manajemen Stok",
    publishedAt: "2024-08-04",
    likes: 13,
    views: 342,
    comments: 12
  }
];

export const FILTER_OPTIONS = ["Recently active", "Most popular", "Most viewed", "Most liked"];

export const PAGINATION_CONFIG = {
  totalPages: 78,
  itemsPerPage: 4
};