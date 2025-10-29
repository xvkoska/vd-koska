import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

const DATA: Testimonial[] = [
  {
    id: 1,
    name: "Mariusz W.",
    when: "31 lipca 2025",
    rating: 5,
    text: "Jestem bardzo zadowolona ze współpracy z Panią Wiolettą Kóską. Przemiły kontakt, bardzo szybki. Zawsze dostępna w razie potrzeby. Sprawy rozwiązywane bezproblemowo. Serdecznie polecam i będę polecać innym.",
  },
  {
    id: 2,
    name: "Oliwia L.",
    when: "2 marca 2025",
    rating: 5,
    text: "Profesjonalizm, rzetelność, dyspozycyjność i ogromna wiedza. Zawsze mogę liczyć na fachowe doradztwo, terminowe rozliczenia oraz pomoc w kwestiach podatkowych i finansowych. Dba o szczegóły, a jej zaangażowanie ułatwia prowadzenie firmy.",
  },
  {
    id: 3,
    name: "Klient inFakt.pl",
    when: "11 lutego 2025",
    rating: 5,
    text: "Wiedza, kompetencje, dyspozycyjność. Zawsze szybka reakcja i odpowiedź na pytania oraz problemy.",
  },
  {
    id: 4,
    name: "Piotr S.",
    when: "18 sierpnia 2025",
    rating: 5,
    text: "Profesjonalna osoba, zawsze odbierająca telefon. Polecam.",
  },
  {
    id: 5,
    name: "Małgorzata C.",
    when: "18 sierpnia 2025",
    rating: 5,
    text: "Bardzo miła i rzetelna obsługa. Indywidualne podejście Pani Księgowej.",
  },
  {
    id: 6,
    name: "Klient inFakt.pl",
    when: "28 stycznia 2025",
    rating: 5,
    text: "Bardzo dobry kontakt, księgowa jest rzetelna a przy tym elastyczna.",
  },
];

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
        >
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const slides = chunk(DATA, 3);
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  const next = () => setSlide((s) => (s === slides.length - 1 ? 0 : s + 1));

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [slide]); // utrzymuje auto-przewijanie, także po kliknięciach

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-gray-50 p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Opinie klientów</h2>
            <a
              href="https://www.infakt.pl/ksiegowi/wioletta-koska"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Zobacz wszystkie na inFakt.pl
            </a>
          </div>

          <div className="relative">
            <div className="overflow-x-hidden overflow-y-visible px-3 md:px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out -mx-3 md:-mx-4"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {slides.map((group, i) => (
                  <div key={i} className="w-full shrink-0 px-3 md:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {group.map((item) => (
                      <article
  key={item.id}
  className="relative overflow-visible rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 pt-16 p-6 md:p-8"
>
  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
    <div className="h-16 w-16 rounded-full bg-blue-600 text-white grid place-items-center text-xl font-semibold shadow-lg ring-4 ring-white">
      {item.name.replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, "").slice(0, 2) || "IN"}
    </div>
  </div>


                          <h3 className="text-center font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-center text-sm text-gray-500">{item.when}</p>

                          <div className="mt-3">
                            <Stars count={item.rating} />
                          </div>

                          <p className="mt-4 text-center text-gray-700 leading-relaxed">{item.text}</p>
                          <p className="mt-4 text-center text-xs text-gray-400">Źródło: inFakt.pl</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Poprzednia opinia"
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 z-10"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Następna opinia"
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 z-10"
            >
              ›
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slajd ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${i === slide ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
