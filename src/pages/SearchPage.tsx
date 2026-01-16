import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { API_URL, STORAGE_URL } from '../apiConfig';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [isLoading, setIsLoading] = useState(false);

  // --- HELPER: SMART IMAGE MAPPING ---
  const getImageUrl = (banner: string) => {
    if (!banner) return 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62';
    return banner.startsWith('http') ? banner : `${STORAGE_URL}/${banner}`;
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      const query = searchParams.get('q') || '';
      setSearchQuery(query);
      
      try {
        setIsLoading(true);
        // Memanggil API dengan parameter pencarian 'q'
        const response = await fetch(`${API_URL}/articles?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        // Mapping data agar cocok dengan komponen ArticleCard
        const mappedResults = data.map((item: any) => ({
          ...item,
          image: getImageUrl(item.banner),
          author: { name: item.author?.name || 'Admin' }
        }));

        // Logika Sorting Lokal
        const sortedResults = [...mappedResults].sort((a, b) => {
          if (sortBy === 'latest') {
            const dateA = new Date(a.published_at || a.created_at).getTime();
            const dateB = new Date(b.published_at || b.created_at).getTime();
            return dateB - dateA;
          }
          return (b.views || 0) - (a.views || 0);
        });

        setResults(sortedResults);
      } catch (error) {
        console.error("Gagal melakukan pencarian:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchParams, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <div className="mb-12 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Hasil Pencarian</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative glass-card rounded-xl overflow-hidden shadow-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel, topik, atau kategori..."
                className="w-full px-6 py-4 pr-14 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-lg hover:scale-105 transition-transform"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>

          {/* Results Info & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-gray-600 dark:text-gray-400">
              {isLoading ? (
                <p className="animate-pulse">Mencari artikel...</p>
              ) : (
                results.length > 0 ? (
                  <>
                    Ditemukan <span className="font-semibold text-blue-900 dark:text-blue-300">{results.length}</span> artikel
                    {searchParams.get('q') && (
                      <> untuk "<span className="font-semibold">{searchParams.get('q')}</span>"</>
                    )}
                  </>
                ) : (
                  <>Tidak ada hasil ditemukan{searchParams.get('q') && <> untuk "{searchParams.get('q')}"</>}</>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular')}
                className="px-4 py-2 glass-card rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100"
              >
                <option value="latest">Terbaru</option>
                <option value="popular">Terpopuler</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {isLoading ? (
          <div className="text-left py-20 text-gray-400 animate-pulse">Menghubungkan ke database...</div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Coba gunakan kata kunci yang berbeda atau jelajahi kategori kami
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}