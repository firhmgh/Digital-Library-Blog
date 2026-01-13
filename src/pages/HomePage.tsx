import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, ChevronRight } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryCard } from '../components/CategoryCard';
import { articles, categories, getFeaturedArticles } from '../data/mockData';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const featuredArticles = getFeaturedArticles();
  const latestArticles = articles.slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-700/5 dark:from-blue-600/10 dark:to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <TrendingUp className="w-4 h-4 text-blue-900 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              12 artikel baru ditambahkan minggu ini
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Jelajahi Dunia{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Pengetahuan
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Akses ribuan artikel, jurnal ilmiah, dan koleksi literatur terpilih 
            dari berbagai bidang pengetahuan. Mulai perjalanan literasi Anda hari ini.
          </p>
          
          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="relative max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
          >
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-500/10">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel, topik, atau kategori..."
                className="w-full px-6 md:px-8 py-4 md:py-5 pr-14 md:pr-16 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-base md:text-lg"
              />
              <button
                type="submit"
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-xl hover:scale-105 transition-transform"
                aria-label="Search"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            Coba: "teknologi", "sastra klasik", "psikologi anak"
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Artikel Pilihan</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Bacaan terkurasi dari berbagai kategori
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredArticles.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} variant="featured" />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.slice(2, 4).map((article) => (
            <ArticleCard key={article.id} article={article} variant="featured" />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Jelajahi Kategori</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Temukan artikel berdasarkan minat Anda
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Artikel Terbaru</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Update terkini dari koleksi kami
            </p>
          </div>
          <button
            onClick={() => navigate('/articles')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 glass-card glass-card-hover rounded-lg font-medium text-blue-900 dark:text-blue-300"
          >
            Lihat Semua
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="md:hidden text-center">
          <button
            onClick={() => navigate('/articles')}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card glass-card-hover rounded-lg font-medium text-blue-900 dark:text-blue-300"
          >
            Lihat Semua Artikel
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dengan Komunitas Literasi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Dapatkan akses penuh ke seluruh koleksi, rekomendasi personal, 
            dan update artikel terbaru langsung ke email Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full px-6 py-3 glass-card rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-transform whitespace-nowrap">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
