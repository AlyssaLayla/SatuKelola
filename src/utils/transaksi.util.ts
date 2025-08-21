// /utils/transaksi.util.ts

import { Transaction, TransactionSummary } from "@/types/transaksi.type";

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatDateTime = (dateString: string, timeString?: string): string => {
  const formattedDate = formatDate(dateString);
  if (timeString) {
    return `${formattedDate} ${timeString}`;
  }
  return formattedDate;
};

export const getCategory = (namaAkun: string): string => {
  // Extract category from account name
  const categoryMap: { [key: string]: string } = {
    "Penjualan": "Penjualan Produk",
    "Pembelian": "Bahan Baku",
    "Ongkos": "Operasional",
    "Catering": "Penjualan Jasa",
    "Transportasi": "Operasional",
    "Gaji": "SDM",
    "Listrik": "Utilitas",
    "Air": "Utilitas",
    "Internet": "Teknologi",
    "Marketing": "Pemasaran",
    "Iklan": "Pemasaran",
  };

  for (const [key, value] of Object.entries(categoryMap)) {
    if (namaAkun.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  return "Lainnya";
};

export const getPaymentMethod = (keterangan: string): string => {
  const keteranganLower = keterangan.toLowerCase();
  
  if (keteranganLower.includes("qris") || keteranganLower.includes("scan")) {
    return "QRIS";
  } else if (keteranganLower.includes("transfer") || keteranganLower.includes("bank")) {
    return "Transfer Bank";
  } else if (keteranganLower.includes("cash") || keteranganLower.includes("tunai")) {
    return "Cash";
  } else if (keteranganLower.includes("credit") || keteranganLower.includes("kartu")) {
    return "Credit Card";
  } else if (keteranganLower.includes("debit")) {
    return "Debit Card";
  } else if (keteranganLower.includes("ewallet") || keteranganLower.includes("gopay") || keteranganLower.includes("ovo") || keteranganLower.includes("dana")) {
    return "E-Wallet";
  }
  
  return "Cash";
};

export const calculateSummary = (transactions: Transaction[]): TransactionSummary => {
  const totalPemasukan = transactions
    .filter((transaction) => transaction.jenis === "Pemasukan")
    .reduce((sum, transaction) => sum + transaction.kredit, 0);

  const totalPengeluaran = transactions
    .filter((transaction) => transaction.jenis === "Pengeluaran")
    .reduce((sum, transaction) => sum + transaction.debet, 0);

  const saldoBersih = totalPemasukan - totalPengeluaran;

  return {
    totalPemasukan,
    totalPengeluaran,
    saldoBersih,
  };
};

export const getTransactionById = (transactions: Transaction[], id: string): Transaction | undefined => {
  return transactions.find(transaction => transaction.id === id);
};

export const filterTransactionsByDateRange = (
  transactions: Transaction[],
  startDate: Date,
  endDate: Date
): Transaction[] => {
  return transactions.filter(transaction => {
    const transactionDate = new Date(transaction.tanggal);
    return transactionDate >= startDate && transactionDate <= endDate;
  });
};

export const filterTransactionsByType = (
  transactions: Transaction[],
  type: "Pemasukan" | "Pengeluaran"
): Transaction[] => {
  return transactions.filter(transaction => transaction.jenis === type);
};

export const filterTransactionsByCategory = (
  transactions: Transaction[],
  category: string
): Transaction[] => {
  return transactions.filter(transaction => 
    getCategory(transaction.nama_akun) === category ||
    transaction.kategori === category
  );
};

export const getTopCategories = (transactions: Transaction[], limit: number = 5): Array<{category: string, amount: number, count: number}> => {
  const categoryStats: { [key: string]: { amount: number, count: number } } = {};

  transactions.forEach(transaction => {
    const category = transaction.kategori || getCategory(transaction.nama_akun);
    const amount = transaction.jenis === "Pemasukan" ? transaction.kredit : transaction.debet;

    if (!categoryStats[category]) {
      categoryStats[category] = { amount: 0, count: 0 };
    }

    categoryStats[category].amount += amount;
    categoryStats[category].count += 1;
  });

  return Object.entries(categoryStats)
    .map(([category, stats]) => ({
      category,
      amount: stats.amount,
      count: stats.count
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
};

export const getMonthlyTrend = (transactions: Transaction[]): Array<{month: string, pemasukan: number, pengeluaran: number}> => {
  const monthlyData: { [key: string]: { pemasukan: number, pengeluaran: number } } = {};

  transactions.forEach(transaction => {
    const date = new Date(transaction.tanggal);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = { pemasukan: 0, pengeluaran: 0 };
    }

    if (transaction.jenis === "Pemasukan") {
      monthlyData[monthKey].pemasukan += transaction.kredit;
    } else {
      monthlyData[monthKey].pengeluaran += transaction.debet;
    }
  });

  return Object.entries(monthlyData)
    .map(([month, data]) => ({
      month: new Date(month + '-01').toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }),
      pemasukan: data.pemasukan,
      pengeluaran: data.pengeluaran
    }))
    .sort((a, b) => a.month.localeCompare(b.month));
};

export const generateTransactionId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `TRX${String(timestamp).slice(-6)}${String(random).padStart(3, '0')}`;
};

export const validateTransaction = (transaction: Partial<Transaction>): { isValid: boolean, errors: string[] } => {
  const errors: string[] = [];

  if (!transaction.tanggal) {
    errors.push("Tanggal transaksi harus diisi");
  }

  if (!transaction.jenis) {
    errors.push("Jenis transaksi harus dipilih");
  }

  if (!transaction.nama_akun || transaction.nama_akun.trim() === "") {
    errors.push("Nama akun harus diisi");
  }

  if (!transaction.keterangan || transaction.keterangan.trim() === "") {
    errors.push("Keterangan transaksi harus diisi");
  }

  if (transaction.jenis === "Pemasukan") {
    if (!transaction.kredit || transaction.kredit <= 0) {
      errors.push("Jumlah pemasukan harus lebih dari 0");
    }
  } else if (transaction.jenis === "Pengeluaran") {
    if (!transaction.debet || transaction.debet <= 0) {
      errors.push("Jumlah pengeluaran harus lebih dari 0");
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};