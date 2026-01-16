import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { API_URL, STORAGE_URL, getImageUrl } from '../apiConfig'; 

export function ArticleDetailPage() {
  // 1. Ambil slug dari URL
  const { slug } = useParams<{ slug: string }>();
  
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        // Memanggil API berdasarkan slug
        const res = await fetch(`${API_URL}/articles/${slug}`);
        
        if (!res.ok) throw new Error("Artikel tidak ditemukan");
        
        const jsonResponse = await res.json();
        
        // Menangani jika Laravel mengirim data langsung atau dibungkus objek 'data'
        const rawData = jsonResponse.data ? jsonResponse.data : jsonResponse;

        if (rawData) {
          // Mapping data artikel utama
          const mappedArticle = {
            ...rawData,
            // Gunakan helper getImageUrl agar format Unsplash maupun Lokal muncul
            image: getImageUrl(rawData.banner || rawData.image),
            author: {
              name: rawData.author?.name || 'Admin',
              bio: rawData.author?.bio || 'Penulis tetap di Digital Library Blog.'
            },
            categoryName: rawData.category?.name || 'General',
            categorySlug: rawData.category?.slug || 'general',
            tags: Array.isArray(rawData.tags) ? rawData.tags : []
          };
          setArticle(mappedArticle);

          // 2. Fetch artikel terkait (berdasarkan kategori)
          if (mappedArticle.categorySlug) {
            const resRelated = await fetch(`${API_URL}/articles?category=${mappedArticle.categorySlug}`);
            const relatedJson = await resRelated.json();
            const relatedData = relatedJson.data ? relatedJson.data : relatedJson;

            setRelatedArticles(
              relatedData
                .filter((a: any) => a.slug !== slug) // Filter artikel yang sedang dibaca
                .slice(0, 3)
                .map((item: any) => ({
                  ...item,
                  image: getImageUrl(item.banner || item.image),
                  author: { name: item.author?.name || 'Admin' }
                }))
            );
          }
        }
      } catch (error) {
        console.error("Gagal memuat detail artikel:", error);
        setArticle(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchDetail();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="pt-32 min-h-screen text-left px-8">
        <p className="text-gray-400 animate-pulse">Memuat konten artikel...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen text-left px-8">
          <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-blue-900 dark:text-blue-300">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
      </div>
    );
  }

  const formattedDate = new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-64 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden">
          <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Link to={`/category/${article.categorySlug}`} className="px-4 py-2 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-sm font-medium rounded-full">
            {article.categoryName}
          </Link>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" /> {formattedDate}
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" /> {article.read_time || '5'} menit baca
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
          {article.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed italic border-l-4 border-blue-900 pl-4">
          {article.excerpt}
        </p>

        {/* Author & Share */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 mb-8 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{article.author.name}</p>
              <p className="text-sm text-gray-600">Penulis</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 glass-card rounded-lg hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`)} className="p-2 glass-card rounded-lg hover:bg-gray-100 transition-colors">
              <Twitter className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)} className="p-2 glass-card rounded-lg hover:bg-gray-100 transition-colors">
              <Facebook className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Article Body - Menampilkan HTML dari Rich Editor Laravel */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12 text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{ lineHeight: '1.8' }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-gray-200">
          {article.tags.map((tag: any, idx: number) => (
            <span key={idx} className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-gray-600">
              <Tag className="w-4 h-4 text-gray-500" /> {tag.name || tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-4">Tentang Penulis</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">{article.author.name}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{article.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}