import { Clock, Mail, Phone, MapPin, AlertCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function LibraryInfoSection() {
  return (
    <div className="space-y-6">
      {/* Announcement Banner */}
      <div className="glass-card rounded-2xl p-5 border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-orange-500 rounded-lg flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Pengumuman Penting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Perpustakaan akan tutup pada tanggal 20-21 Januari 2026 untuk pemeliharaan sistem. 
              Layanan digital tetap dapat diakses 24/7.
            </p>
          </div>
        </div>
      </div>

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
                Jam Operasional
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Waktu Indonesia Barat (WIB)</p>
            </div>
          </div>
          
          <div className="space-y-1">
            {/* Weekdays */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Senin - Jumat</span>
              </div>
              <span className="font-bold text-blue-900 dark:text-blue-300 text-lg">08:00 - 20:00</span>
            </div>

            {/* Saturday */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Sabtu</span>
              </div>
              <span className="font-bold text-blue-900 dark:text-blue-300 text-lg">09:00 - 17:00</span>
            </div>

            {/* Sunday */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Minggu</span>
              </div>
              <span className="font-bold text-blue-900 dark:text-blue-300 text-lg">10:00 - 15:00</span>
            </div>

            {/* National Holiday */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Hari Libur Nasional</span>
              </div>
              <span className="font-bold text-red-600 dark:text-red-400 text-lg">Tutup</span>
            </div>
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
                Kontak & Lokasi
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hubungi kami untuk informasi</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
              {/* Simplified Map Visualization */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-300 dark:bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-indigo-300 dark:bg-indigo-600 rounded-full blur-3xl"></div>
              </div>
              
              {/* Map Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative animate-bounce">
                  <MapPin className="w-12 h-12 text-blue-900 dark:text-blue-400 fill-blue-900/20 dark:fill-blue-400/20" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-blue-900/30 dark:bg-blue-400/30 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <span className="text-sm font-semibold text-blue-900 dark:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik untuk buka di Maps
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Phone */}
            <a 
              href="tel:+622112345678" 
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                <Phone className="w-5 h-5 text-blue-900 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Telepon</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  +62 21 1234 5678
                </p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@perpusdigital.id" 
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                <Mail className="w-5 h-5 text-blue-900 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Email</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors break-all">
                  info@perpusdigital.id
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-3 rounded-xl">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-900 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Alamat</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                  Jl. Literasi No. 123<br />
                  Jakarta Pusat, 10110<br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Ikuti Kami</p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="p-2.5 glass-card rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-900 dark:text-blue-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2.5 glass-card rounded-lg hover:bg-pink-600 dark:hover:bg-pink-500 hover:scale-110 transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-blue-900 dark:text-blue-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2.5 glass-card rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400 hover:scale-110 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-blue-900 dark:text-blue-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2.5 glass-card rounded-lg hover:bg-red-600 dark:hover:bg-red-500 hover:scale-110 transition-all group"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-blue-900 dark:text-blue-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
