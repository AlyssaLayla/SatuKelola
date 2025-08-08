export interface Transaction {
  kode_akun: string;
  nama_akun: string;
  tanggal: string;
  keterangan: string;
  jenis: "Pemasukan" | "Pengeluaran";
  debet: number;
  kredit: number;
}

export interface TransactionSummary {
  totalPemasukan: number;
  totalPengeluaran: number;
  saldoBersih: number;
}

export type FilterType = "Semua" | "Pemasukan" | "Pengeluaran";
