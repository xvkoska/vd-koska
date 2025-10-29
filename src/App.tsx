import { useState } from 'react';
import { Linkedin, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Numbers from './pages/Numbers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

type Page = 'home' | 'about' | 'numbers' | 'services' | 'contact' | 'privacy-policy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkBase =
    'font-medium transition-colors text-gray-700 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded';
  const isActive = (p: Page) => currentPage === p ? 'text-blue-700' : 'text-gray-700';

  const handleGo = (p: Page) => {
    setCurrentPage(p);
    setMobileOpen(false); // zamknij menu po kliknięciu na mobile
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleGo('home')}
                className="flex items-center gap-2"
                aria-label="Strona główna"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logo-biale.svg`}
                  alt="VD Biuro Rachunkowe Wioletta Kóska"
                  className="h-9 w-auto"
                />
              </button>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => handleGo('home')} className={`${navLinkBase} ${isActive('home')}`}>
                Strona główna
              </button>
              <button onClick={() => handleGo('about')} className={`${navLinkBase} ${isActive('about')}`}>
                O nas
              </button>
              <button onClick={() => handleGo('numbers')} className={`${navLinkBase} ${isActive('numbers')}`}>
                Liczby
              </button>
              <button onClick={() => handleGo('services')} className={`${navLinkBase} ${isActive('services')}`}>
                Zakres usług
              </button>
              <button onClick={() => handleGo('contact')} className={`${navLinkBase} ${isActive('contact')}`}>
                Kontakt
              </button>
              <a
                href="https://www.linkedin.com/in/wioletta-k%C3%B3ska-b69515390/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </nav>

            {/* HAMBURGER (MOBILE) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              aria-label="Otwórz menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV (DROPDOWN) */}
        <div
          className={`md:hidden transition-[max-height] duration-300 overflow-hidden 
            ${mobileOpen ? 'max-h-[80dvh]' : 'max-h-0'}`}
        >
          <nav
            className="bg-white border-t border-gray-200 shadow-sm
                       max-h-[80dvh] overflow-y-auto
                       px-4 py-3
                       pt-[env(safe-area-inset-top)]
                       pb-[env(safe-area-inset-bottom)]"
          >
            <button onClick={() => handleGo('home')} className="block w-full text-left py-2">
              Strona główna
            </button>
            <button onClick={() => handleGo('about')} className="block w-full text-left py-2">
              O nas
            </button>
            <button onClick={() => handleGo('numbers')} className="block w-full text-left py-2">
              Liczby
            </button>
            <button onClick={() => handleGo('services')} className="block w-full text-left py-2">
              Zakres usług
            </button>
            <button onClick={() => handleGo('contact')} className="block w-full text-left py-2">
              Kontakt
            </button>
            <a
              href="https://www.linkedin.com/in/wioletta-k%C3%B3ska-b69515390/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-blue-600"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-2">{renderPage()}</main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
              <p className="text-gray-300 text-sm">
                E-mail:{' '}
                <a href="mailto:vd.wioletta.koska@gmail.com" className="hover:underline">
                  vd.wioletta.koska@gmail.com
                </a>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Tel.:{' '}
                <a href="tel:+48662068515" className="hover:underline">
                  +48 662 068 515
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Linki</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleGo('privacy-policy')}
                  className="text-gray-300 text-sm hover:underline text-left"
                >
                  Polityka prywatności
                </button>
                <button
                  onClick={() => handleGo('contact')}
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
            <p className="text-sm">
              &copy; {new Date().getFullYear()} VD Biuro Rachunkowe. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
