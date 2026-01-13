import { BookOpen, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-20 glass-card border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">Perpustakaan Digital</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mb-4">
              Menyediakan akses terbuka ke koleksi pengetahuan untuk semua. 
              Membangun budaya literasi di era digital dengan konten berkualitas dan teknologi modern.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:info@perpustakaandigital.id"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Semua Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/category/fiksi"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Kategori
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategori Populer</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/category/fiksi"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Fiksi
                </Link>
              </li>
              <li>
                <Link
                  to="/category/teknologi"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Teknologi
                </Link>
              </li>
              <li>
                <Link
                  to="/category/jurnal-ilmiah"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Jurnal Ilmiah
                </Link>
              </li>
              <li>
                <Link
                  to="/category/anak-anak"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                >
                  Anak-anak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2026 Perpustakaan Digital. Semua hak dilindungi undang-undang.</p>
          <p className="mt-1">Dibuat oleh Padepokan Super untuk Indonesia tercinta</p>
        </div>
      </div>
    </footer>
  );
}
