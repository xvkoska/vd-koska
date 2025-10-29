import { Award, Users, FileText, Clock } from 'lucide-react';

export default function Numbers() {
  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Nasze osiągnięcia w liczbach</h1>
          <p className="text-xl text-blue-50">Zaufało nam już wielu klientów</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card">
              <div className="flex justify-center mb-4">
                <Award size={64} className="text-blue-600" />
              </div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Lat doświadczenia</div>
            </div>

            <div className="stat-card">
              <div className="flex justify-center mb-4">
                <Users size={64} className="text-blue-600" />
              </div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Zadowolonych klientów</div>
            </div>

            <div className="stat-card">
              <div className="flex justify-center mb-4">
                <FileText size={64} className="text-blue-600" />
              </div>
              <div className="stat-number">5000+</div>
              <div className="stat-label">Rozliczonych dokumentów</div>
            </div>

            <div className="stat-card">
              <div className="flex justify-center mb-4">
                <Clock size={64} className="text-blue-600" />
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Terminowość</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Nasze osiągnięcia
            </h2>

            <div className="space-y-6">
              <div className="achievement-card">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Kompleksowa obsługa</h3>
                <p className="text-gray-700 text-lg">
                  Obsługujemy firmy z różnych branż - od małych przedsiębiorstw po średnie firmy.
                  Nasza elastyczność i doświadczenie pozwalają nam dostosować się do specyficznych
                  potrzeb każdego klienta.
                </p>
              </div>

              <div className="achievement-card">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Certyfikaty i uprawnienia</h3>
                <p className="text-gray-700 text-lg">
                  Posiadamy wszystkie niezbędne certyfikaty do prowadzenia działalności księgowej.
                  Regularnie aktualizujemy naszą wiedzę, aby być na bieżąco ze zmieniającymi się
                  przepisami podatkowymi.
                </p>
              </div>

              <div className="achievement-card">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Ciągły rozwój</h3>
                <p className="text-gray-700 text-lg">
                  Regularnie uczestniczymy w szkoleniach i inwestujemy
                  w najnowsze technologie księgowe, aby zapewnić naszym klientom najwyższą jakość
                  usług.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
