/**
 * URL Dasar untuk memanggil API Laravel.
 * Pastikan server backend Anda berjalan (php artisan serve).
 */
export const API_URL = "http://127.0.0.1:8000/api";

/**
 * URL Dasar untuk mengakses file yang ada di folder storage/app/public.
 * Pastikan Anda sudah menjalankan 'php artisan storage:link' di terminal backend.
 */
export const STORAGE_URL = "http://127.0.0.1:8000/storage";

/**
 * FUNGSI HELPER GAMBAR GLOBAL
 * 
 * Fungsi ini otomatis menangani berbagai skenario gambar:
 * 1. Jika path adalah link internet (dimulai dengan http...) -> Pakai langsung (Contoh: Unsplash).
 * 2. Jika path adalah nama file lokal (Contoh: articles/foto.png) -> Tambahkan STORAGE_URL.
 * 3. Jika path kosong/null -> Menampilkan gambar cadangan (fallback) agar desain tidak rusak.
 * 
 * Mendukung semua format: .jpg, .jpeg, .png, .webp, .gif, dll.
 */
export const getImageUrl = (path: string | null | undefined): string => {
  // 1. Penanganan jika data gambar kosong atau null
  if (!path || path === "") {
    return 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop';
  }

  // 2. Penanganan jika data adalah URL lengkap dari internet (Data Dummy/SQL Unsplash)
  if (path.startsWith('http')) {
    return path;
  }

  // 3. Penanganan jika data adalah hasil upload Admin dari Laravel
  // Format: http://127.0.0.1:8000/storage/nama_file_anda.png
  return `${STORAGE_URL}/${path}`;
};