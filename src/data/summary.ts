// Data untuk dashboard summary
export interface PerformanceData {
  month: string;
  value: number;
}

export const performanceData: PerformanceData[] = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 35 }, // highlighted bar
  { month: 'Apr', value: 15 },
  { month: 'May', value: 28 },
  { month: 'Jun', value: 12 },
  { month: 'Jul', value: 18 },
  { month: 'Aug', value: 32 },
  { month: 'Sep', value: 20 },
  { month: 'Oct', value: 14 },
  { month: 'Nov', value: 16 },
];

export interface DigitalStore {
  name: string;
  subtitle: string;
  status: 'active' | 'inactive';
}

export const digitalStoresData: DigitalStore[] = [
  { name: 'GrabFood', subtitle: 'Seblak BarBar Depok', status: 'active' },
  { name: 'GoFood', subtitle: 'Seblak BarBar Depok', status: 'active' },
  { name: 'Shopee', subtitle: 'Seblak BarBar Depok', status: 'inactive' }
];

export interface KeuanganData {
  saldo: number;
  profit: number;
  profitPercentage: number;
  pemasukan: number;
  pemasukanPercentage: number;
  pengeluaran: number;
  pengeluaranPercentage: number;
  piutang: number;
}

export const keuanganData: KeuanganData = {
  saldo: 4500000,
  profit: 40000,
  profitPercentage: 8,
  pemasukan: 935000,
  pemasukanPercentage: 6,
  pengeluaran: 924000,
  pengeluaranPercentage: -4,
  piutang: 3000000
};