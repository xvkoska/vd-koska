import { BookOpen, Calculator, Users, FileText, Building2, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Zakres usług</h1>
          <p className="text-xl text-blue-50">Kompleksowa obsługa księgowa dla Twojej firmy</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="flex justify-center mb-6">
                <BookOpen size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Pełna księgowość</h3>
              <p className="text-gray-600 mb-6">
                Kompleksowa obsługa księgowa firm prowadzących księgi rachunkowe
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Prowadzenie ksiąg rachunkowych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Sporządzanie sprawozdań finansowych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Analiza finansowa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Reprezentacja przed urzędami</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="flex justify-center mb-6">
                <Calculator size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Księga przychodów i rozchodów</h3>
              <p className="text-gray-600 mb-6">
                Obsługa firm prowadzących uproszczoną formę księgowości
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Prowadzenie KPiR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Rozliczenia VAT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Deklaracje podatkowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Roczne zeznania podatkowe</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="flex justify-center mb-6">
                <Users size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Kadry i płace</h3>
              <p className="text-gray-600 mb-6">
                Kompleksowa obsługa kadrowo-płacowa
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Naliczanie wynagrodzeń</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Prowadzenie akt osobowych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Deklaracje ZUS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Umowy o pracę i zlecenia</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="flex justify-center mb-6">
                <TrendingUp size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Rejestracja działalności i spółek</h3>
              <p className="text-gray-600 mb-6">
                Pomoc w założeniu i rejestracji nowych firm oraz spółek, wraz z obsługą formalności urzędowych.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Rejestracja działalności gospodarczej i spółek z o.o.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Przygotowanie dokumentów i zgłoszeń do urzędów</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Wybór formy opodatkowania przy rozpoczęciu działalności</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Wsparcie przy rozpoczęciu rozliczeń i prowadzeniu ewidencji</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="flex justify-center mb-6">
                <Building2 size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Obsługa spółek</h3>
              <p className="text-gray-600 mb-6">
                Specjalistyczna obsługa różnych form prawnych
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Spółki z o.o.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Spółki jawne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Spółki komandytowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Spółki akcyjne</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="flex justify-center mb-6">
                <FileText size={56} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Rozliczenia roczne</h3>
              <p className="text-gray-600 mb-6">
                Kompleksowe rozliczenia na koniec roku podatkowego
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>PIT dla firm i osób fizycznych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>CIT dla spółek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Sprawozdania finansowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Inwentaryzacja</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
