import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Numbers from './pages/Numbers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

type Page = 'home' | 'about' | 'numbers' | 'services' | 'contact' | 'privacy-policy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'numbers':
        return <Numbers />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-3 md:py-4">
            <div className="flex items-center flex-shrink-0">
              
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => handleNavClick('home')}
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                Strona główna
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                O nas
              </button>
              <button
                onClick={() => handleNavClick('numbers')}
                className={`nav-link ${currentPage === 'numbers' ? 'active' : ''}`}
              >
                Liczby
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              >
                Zakres usług
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                Kontakt
              </button>
              
            </nav>

            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className="text-2xl font-bold">
  {mobileMenuOpen ? '✕' : '☰'}
</span>

            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t border-gray-200">
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Strona główna
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'about' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                O nas
              </button>
              <button
                onClick={() => handleNavClick('numbers')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'numbers' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Liczby
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'services' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Zakres usług
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'contact' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Kontakt
              </button>
             
            </nav>
          )}
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-4">Adres</h3>
              <address className="not-italic">
                <p className="text-gray-300 font-semibold text-sm md:text-base">VD Wioletta Kóska</p>
                <p className="text-gray-300 text-sm mt-2">ul. Krakowska 1</p>
                <p className="text-gray-300 text-sm">43-332 Pisarzowice</p>
                <p className="text-gray-300 text-sm">NIP: 5471028673</p>
              </address>
            </div>
            <div>
              <h4 className="text-lg md:text-lg font-semibold text-blue-400 mb-4">Kontakt</h4>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">E-mail: <a href="mailto:vd.wioletta.koska@gmail.com" className="hover:underline text-blue-300">vd.wioletta.koska@gmail.com</a></p>
                <p className="text-gray-300 text-sm">Tel.: <a href="tel:+48662068515" className="hover:underline text-blue-300">+48 662 068 515</a></p>
              </div>
            </div>
            <div>
              <h4 className="text-lg md:text-lg font-semibold text-blue-400 mb-4">Linki</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('privacy-policy')}
                  className="text-gray-300 text-sm hover:text-blue-300 hover:underline text-left transition-colors"
                >
                  Polityka prywatności
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 text-sm hover:text-blue-300 hover:underline text-left transition-colors"
                >
                  Kontakt
                </button>
              
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} VD Biuro Rachunkowe. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
