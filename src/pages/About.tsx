export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">O nas</h1>
          <p className="text-xl text-blue-50">Poznaj naszą historię i wartości</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">VD Biuro Rachunkowe</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Biuro rachunkowe VD to profesjonalna firma świadcząca usługi księgowe prowadzona
                przez Wiolettę Kóską. Stawiamy na indywidualne podejście do klienta oraz najwyższą
                jakość świadczonych usług.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Nasza misja</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Naszą misją jest zapewnienie kompleksowej obsługi księgowej, która pozwoli naszym
                klientom skupić się na rozwijaniu swojego biznesu, mając pewność, że ich finanse
                są w profesjonalnych rękach.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Nasze wartości</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
                  <strong className="text-gray-900">Profesjonalizm</strong> - najwyższe standardy obsługi
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
                  <strong className="text-gray-900">Rzetelność</strong> - terminowość i dokładność
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
                  <strong className="text-gray-900">Zaufanie</strong> - pełna poufność danych
                </li>
                <li className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
                  <strong className="text-gray-900">Rozwój</strong> - ciągłe podnoszenie kwalifikacji
                </li>
              </ul>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-blue-50 rounded-2xl p-12 text-center h-full flex items-center justify-center min-h-[500px]">
                <div>
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Miejsce na zdjęcie biura lub właścicielki
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
