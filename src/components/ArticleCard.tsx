import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Article } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (variant === 'featured') {
    return (
      <Link
        to={`/article/${article.id}`}
        className="group block glass-card glass-card-hover rounded-2xl overflow-hidden"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/90 text-xs">
                <Clock className="w-3 h-3" />
                {article.readTime} min
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span>{article.author.name}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/article/${article.id}`}
        className="group flex gap-4 glass-card glass-card-hover rounded-xl p-4"
      >
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2 py-0.5 bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 text-xs font-medium rounded mb-2">
            {article.category}
          </span>
          <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} min
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${article.id}`}
      className="group block glass-card glass-card-hover rounded-xl overflow-hidden h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-900 dark:text-blue-300 text-xs font-medium rounded-full shadow-lg">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3">
          <span className="font-medium">{article.author.name}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime} min
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span className="text-gray-500 dark:text-gray-500">{formattedDate}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs rounded"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}