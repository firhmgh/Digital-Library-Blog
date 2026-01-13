import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { searchArticles } from '../data/mockData';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(searchArticles(searchParams.get('q') || ''));
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    let foundArticles = searchArticles(query);
    
    if (sortBy === 'latest') {
      foundArticles = [...foundArticles].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    
    setResults(foundArticles);
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
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Hasil Pencarian</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative glass-card rounded-xl overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel, topik, atau kategori..."
                className="w-full px-6 py-4 pr-14 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
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
            <p className="text-gray-600 dark:text-gray-400">
              {results.length > 0 ? (
                <>
                  Ditemukan <span className="font-semibold text-blue-900 dark:text-blue-300">{results.length}</span> artikel
                  {searchParams.get('q') && (
                    <> untuk "<span className="font-semibold">{searchParams.get('q')}</span>"</>
                  )}
                </>
              ) : (
                <>Tidak ada hasil ditemukan{searchParams.get('q') && <> untuk "{searchParams.get('q')}"</>}</>
              )}
            </p>

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
        {results.length > 0 ? (
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
            <h3 className="text-xl font-semibold mb-2">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Coba gunakan kata kunci yang berbeda atau jelajahi kategori kami
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-transform"
            >
              Kembali ke Beranda
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
