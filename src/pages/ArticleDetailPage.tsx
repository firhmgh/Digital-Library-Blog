import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticleById, getRelatedArticles } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ArticleDetailPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? getArticleById(articleId) : undefined;

  if (!article) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
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

  const relatedArticles = getRelatedArticles(article);
  const formattedDate = new Date(article.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-64 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Link
            to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white text-sm font-medium rounded-full hover:scale-105 transition-transform"
          >
            {article.category}
          </Link>
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            {article.readTime} menit baca
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author & Share */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 mb-8 border-b border-gray-200 dark:border-slate-800">
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {article.author.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Penulis
              </p>
            </div>
          </div>

          {/* Share & Bookmark */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 glass-card rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Bookmark"
            >
              <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="w-px h-6 bg-gray-200 dark:bg-slate-800" />
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`, '_blank')}
              className="p-2 glass-card rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
              className="p-2 glass-card rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
              className="p-2 glass-card rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
          }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-gray-200 dark:border-slate-800">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Tag className="w-4 h-4 text-gray-500" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-4">Tentang Penulis</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">{article.author.name}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Nikmati Artikel Lainnya
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Jelajahi ribuan artikel berkualitas dari berbagai topik menarik lainnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/articles"
              className="px-8 py-3 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-transform"
            >
              Lihat Semua Artikel
            </Link>
            <Link
              to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-8 py-3 glass-card rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              Kategori {article.category}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
