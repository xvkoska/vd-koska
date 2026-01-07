import { Mail, Clock } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  onNavigate: (page: 'home' | 'about' | 'numbers' | 'services' | 'contact' | 'privacy-policy') => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [state, handleSubmit] = useForm('mbdlnybw');

  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-xl text-blue-50">Skontaktuj się z nami</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Dane kontaktowe
              </h2>

              <div className="space-y-6">
                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <Mail size={28} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:vd.wioletta.koska@gmail.com"
                        className="text-blue-600 hover:text-blue-700 text-lg"
                      >
                        vd.wioletta.koska@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <Clock size={28} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Godziny otwarcia
                      </h3>
                      <p className="text-gray-700">
                        Poniedziałek – Piątek: 8:00 – 17:00
                      </p>
                      <p className="text-gray-700">
                        Sobota – Niedziela: Nieczynne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Wyślij wiadomość
                </h2>

                {state.succeeded ? (
                  <p className="text-green-600 font-semibold text-lg">
                    ✅ Wiadomość została wysłana. Dziękujemy!
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Wiadomość
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none resize-vertical"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>

                    <p className="text-sm text-gray-600">
                      Wysyłając formularz, wyrażasz zgodę z naszą{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('privacy-policy')}
                        className="underline text-blue-600 hover:text-blue-700"
                      >
                        polityką prywatności
                      </button>
                      .
                    </p>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn-primary w-full disabled:opacity-50"
                    >
                      {state.submitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
