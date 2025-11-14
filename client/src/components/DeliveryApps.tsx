import { Smartphone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const deliveryApps = [
  {
    name: "GoFood",
    color: "bg-green-600",
    url: "#gofood",
    description: "Pesan via GoFood"
  },
  {
    name: "GrabFood",
    color: "bg-emerald-600",
    url: "#grabfood",
    description: "Pesan via GrabFood"
  },
  {
    name: "ShopeeFood",
    color: "bg-orange-600",
    url: "#shoppeefood",
    description: "Pesan via ShopeeFood"
  }
];

export default function DeliveryApps() {
  return (
    <section className="py-16 md:py-24 bg-muted/20" data-testid="delivery-apps-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pesan via Aplikasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati kemudahan pesan antar langsung ke rumah Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {deliveryApps.map((app) => (
            <Card key={app.name} className="hover-elevate transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`${app.color} text-white rounded-lg p-6 mb-4`}>
                  <CardTitle className="text-white text-center text-xl">
                    {app.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  {app.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    console.log(`Opening ${app.name}`);
                    // Link akan disesuaikan dengan link aktual dari toko Anda
                  }}
                  data-testid={`button-${app.name.toLowerCase()}`}
                >
                  Buka Aplikasi
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            *Link aplikasi akan segera tersedia
          </p>
        </div>
      </div>
    </section>
  );
}
