import { useEffect, useRef, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

const DATA: Testimonial[] = [
  { id: 1, name: "Mariusz Witosławski", when: "31 lipca 2025", rating: 5,
    text: "Jestem bardzo zadowolona ze współpracy z Panią Wiolettą Kóską. Przemiły kontakt, bardzo szybki. Zawsze dostępna w razie potrzeby. Sprawy rozwiązywane bezproblemowo. Serdecznie polecam i będę polecać innym." },
  { id: 2, name: "Oliwia Lewandowska", when: "2 marca 2025", rating: 5,
    text: "Profesjonalizm, rzetelność, dyspozycyjność i ogromna wiedza. Zawsze mogę liczyć na fachowe doradztwo, terminowe rozliczenia oraz pomoc w kwestiach podatkowych i finansowych. Dba o szczegóły, a jej zaangażowanie ułatwia prowadzenie firmy." },
  { id: 3, name: "Klient inFakt.pl", when: "11 lutego 2025", rating: 5,
    text: "Wiedza, kompetencje, dyspozycyjność. Zawsze szybka reakcja i odpowiedź na pytania oraz problemy." },
  { id: 4, name: "Piotr Szczepański", when: "18 sierpnia 2025", rating: 5,
    text: "Profesjonalna osoba, zawsze odbierająca telefon. Polecam." },
  { id: 5, name: "Małgorzata Ciemięga", when: "18 sierpnia 2025", rating: 5,
    text: "Bardzo miła i rzetelna obsługa. Indywidualne podejście Pani Księgowej." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20"
             className={`h-5 w-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
             fill="currentColor">
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z"/>
        </svg>
      ))}
    </div>
  );
}

/** Budujemy strony (page’y) po 3 karty (na mobile i tak pokaże 1 kolumnę). */
function buildPages(data: Testimonial[], perPage = 3) {
  const pages: Testimonial[][] = [];
  for (let start = 0; start < data.length; start += perPage) {
    const page: Testimonial[] = [];
    for (let i = 0; i < perPage; i++) {
      page.push(data[(start + i) % data.length]); // zawijanie
    }
    pages.push(page);
  }
  return pages;
}

export default function Testimonials() {
  const PER_PAGE = 3; // desktop: 3 karty na stronę (mobile -> 1 kolumna w tej samej “stronie”)
  const PAGES = buildPages(DATA, PER_PAGE);
  const [pageIndex, setPageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const goTo = (idx: number) => setPageIndex((idx + PAGES.length) % PAGES.length);
  const prev = () => goTo(pageIndex - 1);
  const next = () => goTo(pageIndex + 1);

  // Autoplay co 6s (reset po ręcznym kliknięciu)
  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => { next(); }, 6000);
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current); };
  }, [pageIndex]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-gray-50 p-6 md:p-10 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Opinie klientów</h2>
            <a
              href="https://www.infakt.pl/ksiegowi/wioletta-koska"
              target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Zobacz wszystkie na inFakt.pl
            </a>
          </div>

          {/* TRACK = pełna szerokość, przesuwamy całe strony */}
          <div className="relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${pageIndex * 100}%)` }}
            >
              {PAGES.map((page, i) => (
                <div key={i} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {page.map((item) => (
                      <article key={`${i}-${item.id}`}
                        className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-8">
                        <div className="-mt-12 mb-2 flex justify-center">
                          <div className="h-16 w-16 rounded-full bg-blue-600 text-white grid place-items-center text-xl font-semibold shadow-lg ring-4 ring-white overflow-hidden">
                            {item.name.replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, "").slice(0, 2) || "IN"}
                          </div>
                        </div>
                        <h3 className="text-center font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-center text-sm text-gray-500">{item.when}</p>
                        <div className="mt-3"><Stars count={item.rating} /></div>
                        <p className="mt-4 text-center text-gray-700 leading-relaxed">{item.text}</p>
                        <p className="mt-4 text-center text-xs text-gray-400">Źródło: inFakt.pl</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Strzałki */}
            <button
              onClick={prev}
              aria-label="Poprzednia strona opinii"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Następna strona opinii"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
            >
              ›
            </button>
          </div>

          {/* Kropki = po stronie */}
          <div className="mt-6 flex justify-center gap-2">
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Strona ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === pageIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
