import { Question } from '@/types/pemasaran.type';

export const marketingQuestions: Question[] = [
  {
    id: "business-type",
    title: "Jenis Produk/Jasa Apa yang Anda Tawarkan?",
    type: "single",
    options: [
      { id: "food", text: "Makanan/minuman" },
      { id: "fashion", text: "Fashion" },
      { id: "craft", text: "Kerajinan tangan" },
      { id: "creative", text: "Jasa kreatif (desain/foto)" },
      { id: "other", text: "Lainnya" }
    ]
  },
  {
    id: "target-audience",
    title: "Siapa Target Pelanggan Utama Anda?",
    type: "multiple",
    options: [
      { id: "teen", text: "Remaja (15-24 tahun)" },
      { id: "young-adult", text: "Dewasa muda (25-34 tahun)" },
      { id: "housewife", text: "Ibu rumah tangga" },
      { id: "professional", text: "Profesional" },
      { id: "all", text: "Semua kalangan" }
    ]
  },
  {
    id: "platform-mastery",
    title: "Platform Apa yang Paling Kamu Kuasai dan Nyaman Digunakan?",
    description: "Pilih 1-3 platform",
    type: "multiple",
    options: [
      { id: "instagram", text: "Instagram" },
      { id: "tiktok", text: "TikTok" },
      { id: "whatsapp", text: "WhatsApp Business" },
      { id: "facebook", text: "Facebook" },
      { id: "marketplace", text: "Marketplace (Shopee/Tokopedia)" },
      { id: "other", text: "Lainnya" }
    ]
  },
  {
    id: "content-skill",
    title: "Seberapa Mahir Anda Membuat Konten Digital?",
    type: "single",
    options: [
      { id: "basic", text: "Hanya foto produk sederhana" },
      { id: "video", text: "Bisa buat video pendek" },
      { id: "design", text: "Sudah pakai desain grafis (Canva/dll)" },
      { id: "pro", text: "Rutin buat konten edukasi/marketing" }
    ]
  },
  {
    id: "challenges",
    title: "Apa Kendala Pemasaran Terbesar Saat Ini?",
    type: "multiple",
    options: [
      { id: "new-customers", text: "Menarik pelanggan baru" },
      { id: "viral", text: "Konten kurang viral" },
      { id: "ad-cost", text: "Biaya iklan mahal" },
      { id: "analytics", text: "Tidak paham analitik" }
    ]
  },
  {
    id: "resources",
    title: "Berapa Waktu yang Bisa Dialokasikan untuk Pemasaran?",
    type: "single",
    options: [
      { id: "low", text: "< 2 jam/minggu" },
      { id: "medium", text: "2-5 jam/minggu" },
      { id: "high", text: "> 5 jam/minggu" }
    ]
  }
];