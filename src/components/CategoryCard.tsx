import { Link } from 'react-router-dom';
import { BookOpen, Library, Microscope, Sparkles, Landmark, Cpu, LucideIcon } from 'lucide-react';
import { Category } from '../data/mockData';

const iconMap: Record<string, LucideIcon> = {
  'book-open': BookOpen,
  'library': Library,
  'microscope': Microscope,
  'sparkles': Sparkles,
  'landmark': Landmark,
  'cpu': Cpu
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || BookOpen;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group glass-card glass-card-hover rounded-xl p-6 text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {category.description}
      </p>
      <span className="inline-block px-3 py-1 bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 text-xs font-medium rounded-full">
        {category.count} Artikel
      </span>
    </Link>
  );
}
