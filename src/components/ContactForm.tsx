import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Download, FileText } from 'lucide-react';

const inquirerTypes = ['Privat', 'Investor', 'Makler', 'Architekt'];

const ContactForm = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kontakt aufnehmen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessiert an diesem Grundstück? Kontaktieren Sie uns direkt per Telefon oder E-Mail für weitere Informationen, um eine Besichtigung zu vereinbaren oder um Ihre Vision zu besprechen.
          </p>
        </div>
        <div className="max-w-xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Telefon</h3>
                <p className="text-muted-foreground">+41 79 331 56 43</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">E-Mail</h3>
                <p className="text-muted-foreground">info@gellert.live</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
