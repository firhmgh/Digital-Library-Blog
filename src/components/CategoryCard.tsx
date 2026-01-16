import { Link } from 'react-router-dom';
import { BookOpen, Library, Microscope, Sparkles, Landmark, Cpu, LucideIcon } from 'lucide-react';

// Pemetaan icon berdasarkan string dari database
const iconMap: Record<string, LucideIcon> = {
  'book-open': BookOpen,
  'library': Library,
  'microscope': Microscope,
  'sparkles': Sparkles,
  'landmark': Landmark,
  'cpu': Cpu
};

interface CategoryCardProps {
  category: any;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || BookOpen;

  // 2. Menghitung jumlah artikel secara dinamis dari API
  const articleCount = category.articles_count ?? category.count ?? 0;

  return (
    <Link
      // INTEGRASI ROUTING: Mengarahkan ke CategoryPage berdasarkan slug database
      to={`/category/${category.slug}`}
      className="group glass-card glass-card-hover rounded-xl p-6 text-center block"
    >
      {/* Container Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      {/* Judul Kategori */}
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
        {category.name}
      </h3>
      
      {/* Deskripsi Kategori */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {category.description || `Jelajahi koleksi literatur dan artikel di bidang ${category.name}.`}
      </p>
      
      {/* Badge Jumlah Artikel - TERINTEGRASI API */}
      <span className="inline-block px-3 py-1 bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 text-xs font-medium rounded-full">
        {articleCount} Artikel
      </span>
    </Link>
  );
}