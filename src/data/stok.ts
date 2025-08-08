import { 
  Circle, 
  Egg, 
  Wheat, 
  Refrigerator, 
  ChefHat, 
  Table,
  Package,
  Soup
} from 'lucide-react';

// Data untuk stok dan inventori
export interface StokItem {
  id: string;
  namaBarang: string;
  jenis: 'Pemasukan' | 'Pengeluaran';
  kategori: string;
  jumlah: number;
  deskripsi: string;
  stok: number;
  status: 'rendah' | 'normal' | 'tinggi';
  iconComponent: any;
}

export const stokItemsData: StokItem[] = [
  {
    id: '1',
    namaBarang: 'Bakso Cuanki',
    jenis: 'Pengeluaran',
    kategori: 'Bahan baku',
    jumlah: 150000,
    deskripsi: 'Belanja telur dan kerupuk di Pasar Depok',
    stok: 20,
    status: 'rendah',
    iconComponent: Circle
  },
  {
    id: '2',
    namaBarang: 'Telur',
    jenis: 'Pemasukan',
    kategori: 'Penjualan',
    jumlah: 20670,
    deskripsi: 'GrabFood #GF-2387-XYQK',
    stok: 50,
    status: 'normal',
    iconComponent: Egg
  },
  {
    id: '3',
    namaBarang: 'Bumbu Instan',
    jenis: 'Pemasukan',
    kategori: 'Penjualan',
    jumlah: 36510,
    deskripsi: 'ShopeeFood #SPFD-8413-7712',
    stok: 10,
    status: 'rendah',
    iconComponent: Package
  },
  {
    id: '4',
    namaBarang: 'Lengkuas',
    jenis: 'Pemasukan',
    kategori: 'Penjualan',
    jumlah: 17210,
    deskripsi: 'ShopeeFood #SPFD-7651-1111',
    stok: 19,
    status: 'rendah',
    iconComponent: Wheat
  },
  {
    id: '5',
    namaBarang: 'Wajan',
    jenis: 'Pengeluaran',
    kategori: 'Operasional',
    jumlah: 200000,
    deskripsi: 'Beli tambahan wajan',
    stok: 2,
    status: 'rendah',
    iconComponent: ChefHat
  },
  {
    id: '6',
    namaBarang: 'Mie Instan',
    jenis: 'Pemasukan',
    kategori: 'Penjualan',
    jumlah: 41850,
    deskripsi: 'GoFood #GO-A3X9L0',
    stok: 30,
    status: 'normal',
    iconComponent: Soup
  }
];

// Data untuk section Stok (kiri)
export interface StokSectionItem {
  name: string;
  quantity: string;
  status: 'red' | 'yellow' | 'green';
  iconComponent: any;
}

export const stokSectionData: StokSectionItem[] = [
  { name: 'Bakso Cuanki', quantity: '50 gr', status: 'red', iconComponent: Circle },
  { name: 'Telur', quantity: '1 butir', status: 'red', iconComponent: Egg },
  { name: 'Lengkuas', quantity: '75 gr', status: 'red', iconComponent: Wheat }
];

// Data untuk section Inventaris (kanan)
export interface InventarisSectionItem {
  name: string;
  quantity: string;
  status: 'red' | 'yellow' | 'green';
  iconComponent: any;
}

export const inventarisSectionData: InventarisSectionItem[] = [
  { name: 'Kulkas', quantity: '1 buah', status: 'red', iconComponent: Refrigerator },
  { name: 'Wajan', quantity: '2 buah', status: 'red', iconComponent: ChefHat },
  { name: 'Meja', quantity: '3 buah', status: 'red', iconComponent: Table }
];

export interface OrderStats {
  label: string;
  count: number;
  color: string;
  percentage: number;
}

export const orderStatsData: OrderStats[] = [
  { label: 'Baru', count: 10, color: '#fb923c', percentage: 15 },
  { label: 'Diproses', count: 35, color: '#fbbf24', percentage: 52 },
  { label: 'Dikirim', count: 10, color: '#3b82f6', percentage: 15 },
  { label: 'Selesai', count: 26, color: '#10b981', percentage: 38 }
];