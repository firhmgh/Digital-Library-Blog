import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryCard } from '../components/CategoryCard';
import { categories, getArticlesByCategory } from '../data/mockData';
import { BookOpen, Library, Microscope, Sparkles, Landmark, Cpu, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'book-open': BookOpen,
  'library': Library,
  'microscope': Microscope,
  'sparkles': Sparkles,
  'landmark': Landmark,
  'cpu': Cpu
};

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  
  const category = categories.find(cat => cat.slug === categorySlug);
  const articles = category ? getArticlesByCategory(categorySlug!) : [];
  
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.readTime - a.readTime; // Using readTime as proxy for popularity
  });

  if (!category) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Kategori tidak ditemukan</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-900 dark:text-blue-300 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon] || BookOpen;

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Category Header */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-2xl flex-shrink-0">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{category.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 rounded-full">
                <span className="font-semibold">{category.count}</span>
                <span>artikel tersedia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold">
            Artikel dalam {category.name}
          </h2>

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

        {/* Articles Grid */}
        {sortedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sortedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              Belum ada artikel dalam kategori ini
            </p>
          </div>
        )}

        {/* Other Categories */}
        <section className="pt-12 border-t border-gray-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-6">Kategori Lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.slug !== categorySlug)
              .map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
