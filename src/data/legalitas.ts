import { OSSProcess } from "@/types/legalitas.type";

export const ossProcessData: OSSProcess[] = [
  {
    id: 1,
    title: "Pengembangan Perizinan Berusaha",
    description: "Proses untuk mengembangkan dan memperluas perizinan usaha yang sudah ada sesuai dengan kebutuhan bisnis Anda.",
    requirements: ["KTP", "NPWP", "Nomor Ponsel"],
    illustration: "🚀" 
  },
  {
    id: 2,
    title: "Perpanjangan Perizinan Berusaha", 
    description: "Perpanjang masa berlaku perizinan berusaha Anda agar tetap dapat beroperasi secara legal.",
    requirements: ["KTP", "NPWP", "Nomor Ponsel"],
    illustration: "🔄" 
  },
  {
    id: 3,
    title: "Permohonan Pembatalan Perizinan Berusaha (UMK)",
    description: "Ajukan permohonan pembatalan perizinan berusaha untuk Usaha Mikro Kecil (UMK) jika diperlukan.",
    requirements: ["KTP", "NPWP", "Nomor Ponsel"],
    illustration: "❌"
  },
  {
    id: 4,
    title: "Perubahan Perizinan Berusaha - Data Pelaku Usaha (Orang Perseorangan)",
    description: "Lakukan perubahan data pelaku usaha perorangan pada perizinan berusaha yang sudah ada.",
    requirements: ["KTP", "NPWP", "Nomor Ponsel"],
    illustration: "✏️"   }
];