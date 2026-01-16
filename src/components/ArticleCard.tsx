import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getImageUrl } from '../apiConfig'; // 1. Import fungsi helper global

// Gunakan interface lokal agar tidak bergantung pada mockData yang kaku
interface ArticleCardProps {
  article: any; // Menggunakan any agar fleksibel menerima data API
  variant?: 'default' | 'featured' | 'compact';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  // 2. Penanganan Tanggal (Laravel menggunakan created_at atau published_at)
  const dateValue = article.date || article.created_at || article.published_at;
  const formattedDate = dateValue 
    ? new Date(dateValue).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Tanggal tidak tersedia';

  // 3. Penanganan Penulis (Laravel biasanya mengirim objek user/author)
  const authorName = typeof article.author === 'object' ? article.author?.name : (article.author || 'Admin');

  // 4. Penanganan Ringkasan/Excerpt (Jika tidak ada excerpt, potong dari content)
  const excerpt = article.excerpt || (article.content ? article.content.substring(0, 100).replace(/<[^>]*>?/gm, '') + '...' : '');

  // 5. Penanganan Tags
  const safeTags = Array.isArray(article.tags) ? article.tags : [];

  // 6. Mendapatkan URL Gambar menggunakan helper global
  // Kita cek banner (dari Laravel) atau image (dari mock)
  const finalImageUrl = getImageUrl(article.banner || article.image);

  if (variant === 'featured') {
    return (
      <Link
        to={`/article/${article.slug || article.id}`}
        className="group block glass-card glass-card-hover rounded-2xl overflow-hidden"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <ImageWithFallback
            src={finalImageUrl} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {typeof article.category === 'object' ? article.category?.name : article.category}
              </span>
              <span className="flex items-center gap-1 text-white/90 text-xs">
                <Clock className="w-3 h-3" />
                {article.readTime || article.read_time || '5'} min
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2 mb-3">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span>{authorName}</span>
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
        to={`/article/${article.slug || article.id}`}
        className="group flex gap-4 glass-card glass-card-hover rounded-xl p-4 text-left"
      >
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={finalImageUrl} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2 py-0.5 bg-blue-900/10 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 text-xs font-medium rounded mb-2">
            {typeof article.category === 'object' ? article.category?.name : article.category}
          </span>
          <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime || article.read_time || '5'} min
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${article.slug || article.id}`}
      className="group block glass-card glass-card-hover rounded-xl overflow-hidden h-full text-left"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={finalImageUrl} // Menggunakan hasil helper
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-900 dark:text-blue-300 text-xs font-medium rounded-full shadow-lg">
            {typeof article.category === 'object' ? article.category?.name : article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3">
          <span className="font-medium">{authorName}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime || article.read_time || '5'} min
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span className="text-gray-500 dark:text-gray-500">{formattedDate}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {safeTags.slice(0, 2).map((tag: any) => (
            <span
              key={typeof tag === 'object' ? tag.id : tag}
              className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs rounded"
            >
              <Tag className="w-3 h-3" />
              {typeof tag === 'object' ? tag.name : tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}