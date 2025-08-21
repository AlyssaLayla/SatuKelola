export interface Transaction {
  id?: string;
  tanggal: string;
  waktu?: string;
  jenis: "Pemasukan" | "Pengeluaran";
  kategori?: string;
  subkategori?: string;
  nama_akun: string;
  keterangan: string;
  kredit: number;
  debet: number;
  metode_pembayaran?: string;
  status?: "Completed" | "Pending" | "Failed";
  invoice?: string;
  pelanggan?: string;
  supplier?: string;
  catatan?: string;
}

export type FilterType = "Semua" | "Pemasukan" | "Pengeluaran";

export interface TransactionSummary {
  totalPemasukan: number;
  totalPengeluaran: number;
  saldoBersih: number;
}