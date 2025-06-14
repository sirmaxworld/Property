import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquirerType: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email data
    const emailData = {
      to: 'info@gellert.live',
      subject: `Anfrage Grundstück Amden - ${formData.inquirerType || 'Interessent'}`,
      body: `
Neue Anfrage für das Grundstück in Amden:

=== KONTAKTDATEN ===
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

=== INTERESSENTENTYP ===
Interessiert als: ${formData.inquirerType || 'Nicht ausgewählt'}

=== NACHRICHT ===
${formData.message}

---
Gesendet über die Website: ${new Date().toLocaleString('de-CH')}
      `
    };
    
    try {
      // Here you would send to your backend API endpoint
      // For now, we'll log the data and show success message
      console.log('Email data prepared:', emailData);
      
      // In production, you would call your email API here:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(emailData)
      // });
      
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihr Interesse. Wir werden Sie bald kontaktieren.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        inquirerType: ''
      });
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kontakt aufnehmen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessiert an diesem Grundstück? Kontaktieren Sie uns für weitere Informationen, um eine Besichtigung zu vereinbaren oder um Ihre Vision zu besprechen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white border-2 border-blue-200 p-3 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Weitere Informationen
              </h3>
              <div className="space-y-3">
                <a 
                  href="/documents/baureglement.pdf" 
                  download 
                  className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="bg-blue-500 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Download className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">Baureglement</h4>
                    <p className="text-sm text-muted-foreground">Rechtliche Bestimmungen und Bauvorschriften</p>
                  </div>
                </a>
                
                <a 
                  href="/documents/dokumente-grundstueck.pdf" 
                  download 
                  className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="bg-blue-500 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Download className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">Dokumente Grundstück</h4>
                    <p className="text-sm text-muted-foreground">Grundbuchauszug und weitere Unterlagen</p>
                  </div>
                </a>
              </div>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-primary">Senden Sie uns eine Nachricht</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formspree.io/f/mzzggdej" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Vollständiger Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ihr vollständiger Name"
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
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">
                      Ich bin interessiert als
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Privat', 'Investor', 'Makler', 'Architekt'].map((type) => (
                        <label key={type} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="inquirerType"
                            value={type}
                            className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-primary text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-Mail-Adresse
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ihre.email@beispiel.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Haben Sie noch Fragen oder Anregungen?"
                    />
                  </div>
                  {/* Hidden field for reply-to (confirmation email) */}
                  <input type="hidden" name="_replyto" value="" />
                  {/* You can add a redirect or thank you message here if needed */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Telefon</h3>
                    <p className="text-muted-foreground">+41 79 331 56 43</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">E-Mail</h3>
                    <p className="text-muted-foreground">info@gellert.live</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Standort</h3>
                    <p className="text-muted-foreground">Obere Rütibügelstrasse Amden, 8873 SG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-3">Warum dieses Grundstück wählen?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Einzigartige Südlage mit Panoramablick</li>
                <li>• Flexible Baufläche in Kernzone K2 mit bis zu 450 m² Wohnraum</li>
                <li>• Arbeiten und Wohnen wo andere Ferien machen</li>
                <li>• Über dem Nebelmeer auf der Sonnenterasse von Zürich</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
