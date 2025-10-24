import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-xl text-blue-50">Skontaktuj się z nami</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dane kontaktowe</h2>

              <div className="space-y-6">
                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
                      <p className="text-gray-700">ul. Przykładowa 123</p>
                      <p className="text-gray-700">00-000 Warszawa</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Phone size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                      <a href="tel:+48123456789" className="text-blue-600 hover:text-blue-700 text-lg">
                        +48 123 456 789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Mail size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:biuro@vd-rachunkowosc.pl" className="text-blue-600 hover:text-blue-700 text-lg">
                        biuro@vd-rachunkowosc.pl
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Clock size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Godziny otwarcia</h3>
                      <p className="text-gray-700">Poniedziałek - Piątek: 9:00 - 17:00</p>
                      <p className="text-gray-700">Sobota - Niedziela: Nieczynne</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Linkedin size={28} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Śledź nas</h3>
                      <a
                        href="https://www.linkedin.com/company/vd-biuro-rachunkowe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-lg"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-vertical"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
