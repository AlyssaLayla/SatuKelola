import { Transaction, TransactionSummary } from '../types/transaksi.type';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }) + ', ' + date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getCategory = (namaAkun: string): string => {
  switch (namaAkun) {
    case 'Penjualan':
      return 'Penjualan';
    case 'Kas':
      return 'Bahan baku';
    case 'Biaya Operasional':
      return 'Operasional';
    default:
      return 'Lainnya';
  }
};

export const getPaymentMethod = (keterangan: string): string => {
  if (keterangan.includes('GrabFood') || 
      keterangan.includes('ShopeeFood') || 
      keterangan.includes('GoFood')) {
    return 'QRIS';
  }
  return 'Tunai';
};

export const calculateSummary = (transactions: Transaction[]): TransactionSummary => {
  const totalPemasukan = transactions
    .filter(t => t.jenis === 'Pemasukan')
    .reduce((sum, t) => sum + t.kredit, 0);
  
  const totalPengeluaran = transactions
    .filter(t => t.jenis === 'Pengeluaran')
    .reduce((sum, t) => sum + t.debet, 0);
  
  const saldoBersih = totalPemasukan - totalPengeluaran;

  return {
    totalPemasukan,
    totalPengeluaran,
    saldoBersih,
  };
};