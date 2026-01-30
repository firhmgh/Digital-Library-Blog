import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, ChevronRight } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryCard } from '../components/CategoryCard';
import { EventCard } from '../components/EventCard';
import { LibraryInfoSection } from '../components/LibraryInfoSection';
import { API_URL, getImageUrl } from '../apiConfig'; // 1. Import helper getImageUrl

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // --- STATE DATA DARI API ---
  const [apiArticles, setApiArticles] = useState<any[]>([]);
  const [apiCategories, setApiCategories] = useState<any[]>([]);
  const [apiEvents, setApiEvents] = useState<any[]>([]);
  const [apiLibraryInfo, setApiLibraryInfo] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- AMBIL SEMUA DATA DARI API ---
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        const [resArticles, resCategories, resEvents, resInfo] = await Promise.all([
          fetch(`${API_URL}/articles`),
          fetch(`${API_URL}/categories`),
          fetch(`${API_URL}/events`),
          fetch(`${API_URL}/library-info`)
        ]);

        const articlesData = await resArticles.json();
        const categoriesData = await resCategories.json();
        const eventsData = await resEvents.json();
        const infoData = await resInfo.json();

        // 2. Mapping Artikel menggunakan helper global
        setApiArticles(articlesData.map((item: any) => ({
          ...item,
          image: getImageUrl(item.banner), 
          author: { name: item.author?.name || 'Admin' }
        })));

        setApiCategories(categoriesData);

        // 3. Mapping Events menggunakan helper global
        setApiEvents(eventsData.map((event: any) => ({
          ...event,
          image: getImageUrl(event.banner), 
          date: event.event_date
        })));

        setApiLibraryInfo(infoData);
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // --- LOGIKA FILTER DATA UNTUK DESAIN ---
  const featuredArticles = apiArticles.filter(article => [5, 6, 7, 8].includes(Number(article.id)));
  const latestArticles = apiArticles.slice(0, 6);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-700/5 dark:from-blue-600/10 dark:to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <TrendingUp className="w-4 h-4 text-blue-900 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {isLoading ? 'Menghitung...' : apiArticles.length} artikel tersedia dalam koleksi digital
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Jelajahi Dunia{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Pengetahuan
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 text-center">
            Akses ribuan artikel, jurnal ilmiah, dan koleksi literatur terpilih 
            dari berbagai bidang pengetahuan. Mulai perjalanan literasi Anda hari ini.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-500/10">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel, topik, atau kategori..."
                className="w-full px-6 md:px-8 py-4 md:py-5 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl hover:scale-105 transition-transform">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Artikel Pilihan</h2>
          <p className="text-gray-600 dark:text-gray-400">Bacaan terkurasi dari berbagai kategori</p>
        </div>
        
        {isLoading ? (
          <div className="text-gray-400 animate-pulse">Memuat artikel pilihan...</div>
        ) : (
          <>
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
          </>
        )}
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Jelajahi Kategori</h2>
          <p className="text-gray-600 dark:text-gray-400">Temukan artikel berdasarkan minat Anda</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="text-gray-400 animate-pulse">Memuat kategori...</div>
          ) : (
            apiCategories.map((category) => (
              <CategoryCard key={category.id || category.slug} category={category} />
            ))
          )}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Artikel Terbaru</h2>
            <p className="text-gray-600 dark:text-gray-400">Update terkini dari koleksi kami</p>
          </div>
          <button onClick={() => navigate('/articles')} className="hidden md:flex items-center gap-2 px-5 py-2.5 glass-card rounded-lg font-medium text-blue-900 dark:text-blue-300">
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {isLoading ? (
            <div className="text-gray-400 animate-pulse">Memuat artikel terbaru...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {latestArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        )}
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Acara Mendatang</h2>
          <p className="text-gray-600 dark:text-gray-400">Jangan lewatkan event menarik di perpustakaan kami</p>
        </div>
        
        {isLoading ? (
            <div className="text-gray-400 animate-pulse">Memuat acara mendatang...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apiEvents.length > 0 ? (
                    apiEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p className="text-gray-500 italic">Tidak ada acara mendatang.</p>
                )}
            </div>
        )}
      </section>

      {/* Library Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Informasi Perpustakaan</h2>
          <p className="text-gray-600 dark:text-gray-400">Segala yang perlu Anda ketahui tentang perpustakaan kami</p>
        </div>
        {isLoading ? (
            <div className="text-gray-400 animate-pulse">Memuat informasi perpustakaan...</div>
        ) : (
            <LibraryInfoSection data={apiLibraryInfo} />
        )}
      </section>
    </div>
  );
}