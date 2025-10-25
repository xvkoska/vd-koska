import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Numbers from './pages/Numbers';
import Services from './pages/Services';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'numbers' | 'services' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'numbers':
        return <Numbers />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <img
  src={`${import.meta.env.BASE_URL}vd-logo.png`}
  alt="VD Wioletta Kóska Biuro Rachunkowe"
  className="h-24 w-auto"
/>

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
              <h3 className="text-xl font-bold text-blue-400 mb-4">VD Biuro Rachunkowe</h3>
              <p className="text-gray-300">Wioletta Kóska</p>
              <p className="text-gray-300">Profesjonalne usługi księgowe</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Kontakt</h4>
              <p className="text-gray-300">Email: vd.wioletta.koska@gmail.com</p>
              <p className="text-gray-300">Tel: +48 662 068 515</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Śledź nas</h4>
              <a
                href="https://www.linkedin.com/in/wioletta-k%C3%B3ska-b69515390/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VD Biuro Rachunkowe. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
