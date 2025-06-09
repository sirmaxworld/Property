import { MapPin, Ruler, Trees, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PropertyDetails = () => {
  const features = [
    {
      icon: <Ruler className="h-8 w-8 text-blue-500" />,
      title: "Fläche",
      description: "1044 m2 Grundstück. Genug Platz für ihre Träume"
    },
    {
      icon: <Trees className="h-8 w-8 text-blue-500" />,
      title: "Eigener Bach",
      description: "Natürliches Gewässer auf dem Grundstück"
    },
    {
      icon: <Mountain className="h-8 w-8 text-blue-500" />,
      title: "960m ü.M.",
      description: "Erhöhte Lage mit herrlicher Aussicht"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: "Top Lage",
      description: "Einfache Erreichbarkeit von Annehmlichkeiten bei gleichzeitiger Privatsphäre"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bauland mit Weitblick & Potenzial</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ihr Projekt in der Sonnenstube über dem Walensee. Attraktives Baugrundstück in Amden SG mit optimaler Südausrichtung und herrlichem Weitblick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Über dieses Bauland</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                In Amden SG, der Sonnenterasse von Zürich, steht ein attraktives Baugrundstück zum Verkauf, das mit seiner Lage, Ausnutzungsmöglichkeit und natürlichen Umgebung überzeugt. Dieses Grundstück ist ideal für Bauherren, Investoren oder Familien, die ihren Wohntraum in einzigartiger Lage verwirklichen möchten.
              </p>
              <p>
                <strong>Besondere Lage-Highlights:</strong> Amden liegt auf einem Hochplateau über dem Walensee – mit spektakulärer Aussicht und überdurchschnittlich vielen Sonnenstunden. Die optimale Südausrichtung sorgt für ganztägig Sonne, auch wenn das Unterland im Nebel liegt.
              </p>
              <p>
                Der Bachlauf wird im Sommer 2025 naturalisiert – ein naturnahes Bachbett sorgt für zusätzliches Ambiente. Die erhöhte Lage auf ca. 960 m ü. M. bietet Weitblick auf die umliegende Bergwelt in ruhiger Umgebung mit hoher Lebensqualität.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Fazit: Investition in Lebensqualität & Potenzial</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dieses Bauland in Amden bietet nicht nur ein malerisches Umfeld und hervorragende Erschliessung, sondern auch hohe Flexibilität für Ihre Bauvorhaben. Ob als privater Rückzugsort, Generationenhaus oder hochwertige Kapitalanlage – dieses Grundstück ist bereit für Ihre Vision.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Grundstücksdaten & Merkmale</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Technische Daten</h4>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Gesamtfläche: ca. 1'044 m² (750 m² + 294 m²)</span>
                  </li>
                                     <li className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                     <span>Zonierung: Kernzone K2</span>
                   </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Mögliche Wohnfläche: bis zu 450 m²</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>2 Zufahrtstrassen (oben + unten)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>1 Keller + 2 Vollgeschosse + Dachgeschoss</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Gebäudehöhe max. 8m</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Firsthöhe max. 12m</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Gebäudelänge max. 40m</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Grenzabstand gross 5m</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Freizeit & Erreichbarkeit</h4>
                <ul className="space-y-2 text-lg">
                                     <li className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                     <span>Walensee: 5 Minuten</span>
                   </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Skigebiet Amden: 5 Minuten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Flumserberg, Bad Ragaz: 30 Minuten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Zürich City: 45 Minuten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Flughafen Zürich: 50 Minuten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Davos, Lenzerheide, Laax: 1 Stunde</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
