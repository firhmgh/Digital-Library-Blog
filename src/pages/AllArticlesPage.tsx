import { useState } from 'react';
import { Filter, Grid3x3, List } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { articles, categories } from '../data/mockData';

export function AllArticlesPage() {
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Filter and sort articles
  let filteredArticles = filterCategory === 'all' 
    ? articles 
    : articles.filter(article => 
        article.category.toLowerCase().replace(/\s+/g, '-') === filterCategory
      );

  filteredArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.readTime - a.readTime;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Semua Artikel</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Jelajahi koleksi lengkap artikel kami dari berbagai kategori
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="glass-card rounded-xl p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Kategori
              </label>
              <select
                value={filterCategory}
                onChange={(e) => {
                  setFilterCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100"
              >
                <option value="all">Semua Kategori</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Urutkan
              </label>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular')}
                  className="w-full px-4 py-2 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100"
                >
                  <option value="latest">Terbaru</option>
                  <option value="popular">Terpopuler</option>
                </select>
              </div>
            </div>

            {/* View Mode */}
            <div className="flex-shrink-0">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Tampilan
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300'
                      : 'glass-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300'
                      : 'glass-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Menampilkan <span className="font-semibold">{startIndex + 1}-{Math.min(startIndex + articlesPerPage, filteredArticles.length)}</span> dari{' '}
              <span className="font-semibold">{filteredArticles.length}</span> artikel
            </p>
          </div>
        </div>

        {/* Articles Grid/List */}
        {paginatedArticles.length > 0 ? (
          <>
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
                : 'flex flex-col gap-4 mb-12'
            }>
              {paginatedArticles.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant={viewMode === 'list' ? 'compact' : 'default'}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 glass-card rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Sebelumnya
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white'
                          : 'glass-card hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 glass-card rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              Tidak ada artikel ditemukan dengan filter ini
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
