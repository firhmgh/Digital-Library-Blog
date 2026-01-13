import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { CategoryPage } from './pages/CategoryPage';
import { AllArticlesPage } from './pages/AllArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';

export default function App() {
  return (
    <Router basename="/Digital-Library-Blog">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900 transition-colors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/articles" element={<AllArticlesPage />} />
            <Route path="/article/:articleId" element={<ArticleDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
