import { TrendingUp, Shield, Zap, Briefcase } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'numbers' | 'services' | 'contact') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <section className="hero-section">
        <div className="container mx-auto px-6 py-24 text-center">
          <img
      src={`${import.meta.env.BASE_URL}logo-biale.svg`}
      alt="VD Biuro Rachunkowe Wioletta Kóska"
      className="mx-auto mb-10 h-24 w-auto md:h-28"
      loading="eager"
      decoding="async"
    />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
            Profesjonalne usługi księgowe dla Twojej firmy
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto">
            Kompleksowa obsługa księgowa z pasją i zaangażowaniem
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Skontaktuj się z nami
            </button>
            <button onClick={() => onNavigate('services')} className="btn-secondary">
              Zakres usług
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Dlaczego my?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Doświadczenie</h3>
              <p className="text-gray-600">Wieloletnie doświadczenie w branży księgowej</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Szybkość</h3>
              <p className="text-gray-600">Terminowa realizacja wszystkich zleceń</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Bezpieczeństwo</h3>
              <p className="text-gray-600">Pełna poufność i bezpieczeństwo danych</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Briefcase size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Profesjonalizm</h3>
              <p className="text-gray-600">Indywidualne podejście do każdego klienta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Gotowy na współpracę?</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i poznaj nasze możliwości
          </p>
          <button onClick={() => onNavigate('contact')} className="btn-primary">
            Napisz do nas
          </button>
        </div>
      </section>
    </>
  );
}
