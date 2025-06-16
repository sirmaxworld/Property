import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Download, FileText } from 'lucide-react';

const inquirerTypes = ['Privat', 'Investor', 'Makler', 'Architekt'];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kontakt aufnehmen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessiert an diesem Grundstück? Kontaktieren Sie uns für weitere Informationen, um eine Besichtigung zu vereinbaren oder um Ihre Vision zu besprechen.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Senden Sie uns eine Nachricht</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-green-600 text-center font-semibold py-8">
                  Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.
                </div>
              ) : (
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/mzzggdej"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  autoComplete="off"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Vollständiger Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ihr vollständiger Name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-Mail-Adresse *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ihre.email@beispiel.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Telefonnummer
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">
                      Ich bin interessiert als
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquirerTypes.map((type) => (
                        <label key={type} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="inquirerType"
                            value={type}
                            className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                            required
                          />
                          <span className="text-primary text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Haben Sie noch Fragen oder Anregungen?"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Nachricht senden
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
