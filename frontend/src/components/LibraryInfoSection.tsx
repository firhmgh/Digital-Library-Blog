import { Clock, Mail, Phone, MapPin, AlertCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface LibraryInfoProps {
  data: any[]; // Menerima data dari API melalui HomePage.tsx
}

export function LibraryInfoSection({ data }: LibraryInfoProps) {
  // 1. Mencari data spesifik berdasarkan Slug yang ada di Database
  const announcement = data.find(item => item.slug === 'pengumuman' || item.title.toLowerCase().includes('pengumuman'));
  const operational = data.find(item => item.slug === 'jam-operasional');
  const contact = data.find(item => item.slug === 'kontak-lokasi');

  // Helper untuk memproses teks jam operasional agar tetap memiliki desain "per baris"
  const operationalLines = operational?.content ? operational.content.split('\n') : [];

  return (
    <div className="space-y-6">
      {/* Announcement Banner - Muncul jika ada data pengumuman */}
      {announcement && (
        <div className="glass-card rounded-2xl p-5 border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-500 rounded-lg flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{announcement.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {announcement.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Opening Hours */}
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {operational?.title || 'Jam Operasional'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Waktu Indonesia Barat (WIB)</p>
            </div>
          </div>
          
          <div className="space-y-1">
            {/* Render baris jam operasional secara dinamis dari database */}
            {operationalLines.length > 0 ? (
              operationalLines.map((line: string, index: number) => {
                const [day, time] = line.split(': ');
                return (
                  <div key={index} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${line.toLowerCase().includes('tutup') ? 'bg-red-500' : 'bg-green-500'}`}></div>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{day}</span>
                    </div>
                    <span className={`font-bold ${line.toLowerCase().includes('tutup') ? 'text-red-600' : 'text-blue-900 dark:text-blue-300'} text-lg`}>
                      {time || ''}
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 italic p-4">Data jam operasional belum tersedia.</p>
            )}
          </div>

          {/* Digital Access Note */}
          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-lg">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                  Layanan Digital 24/7
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Akses perpustakaan digital, e-book, dan jurnal online dapat dilakukan kapan saja tanpa batasan waktu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact & Location */}
        <div className="glass-card rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-xl shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {contact?.title || 'Kontak & Lokasi'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hubungi kami untuk informasi</p>
            </div>
          </div>

          {/* Map Placeholder - Tetap Desain Sama */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-300 dark:bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-indigo-300 dark:bg-indigo-600 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative animate-bounce">
                  <MapPin className="w-12 h-12 text-blue-900 dark:text-blue-400 fill-blue-900/20 dark:fill-blue-400/20" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <span className="text-sm font-semibold text-blue-900 dark:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik untuk buka di Maps
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details from API */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-xl bg-blue-50/30 dark:bg-blue-900/5 border border-blue-100/50 dark:border-blue-800/50">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-900 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Detail Alamat & Kontak</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100 whitespace-pre-line leading-relaxed">
                  {contact?.content || 'Data kontak belum tersedia.'}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media - Desain Tetap */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Ikuti Kami</p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <button key={idx} className="p-2.5 glass-card rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 transition-all group">
                  <Icon className="w-5 h-5 text-blue-900 dark:text-blue-400 group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}