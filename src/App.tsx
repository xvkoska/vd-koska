import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Numbers from './pages/Numbers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

type Page = 'home' | 'about' | 'numbers' | 'services' | 'contact' | 'privacy-policy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}vd-logo.png`} alt="VD Wioletta Kóska Biuro Rachunkowe" className="h-16 w-auto" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                Strona główna
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                O nas
              </button>
              <button
                onClick={() => setCurrentPage('numbers')}
                className={`nav-link ${currentPage === 'numbers' ? 'active' : ''}`}
              >
                Liczby
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              >
                Zakres usług
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                Kontakt
              </button>
              <a
                href="https://www.linkedin.com/in/wioletta-k%C3%B3ska-b69515390/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Adres</h3>
              <address className="not-italic">
                <p className="text-gray-300 font-semibold">VD Wioletta Kóska</p>
                <p className="text-gray-300 text-sm mt-2">ul. Krakowska 1, 43-332 Pisarzowice</p>
                <p className="text-gray-300 text-sm">NIP: 5471028673</p>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Kontakt</h4>
              <p className="text-gray-300 text-sm">E-mail: <a href="mailto:vd.wioletta.koska@gmail.com" className="hover:underline">vd.wioletta.koska@gmail.com</a></p>
              <p className="text-gray-300 text-sm mt-2">Tel.: <a href="tel:+48662068515" className="hover:underline">+48 662 068 515</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Linki</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setCurrentPage('privacy-policy')}
                  className="text-gray-300 text-sm hover:underline text-left"
                >
                  Polityka prywatności
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-gray-300 text-sm hover:underline text-left"
                >
                  Kontakt
                </button>
                <a
                  href="https://www.linkedin.com/in/wioletta-k%C3%B3ska-b69515390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; {new Date().getFullYear()} VD Biuro Rachunkowe. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
