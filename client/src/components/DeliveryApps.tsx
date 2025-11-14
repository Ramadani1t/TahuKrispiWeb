import { Smartphone, ExternalLink, Bike, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DeliveryApp {
  name: string;
  color: string;
  url: string;
  description: string;
  isOnline: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const deliveryApps: DeliveryApp[] = [
  {
    name: "GoFood",
    color: "bg-green-600",
    url: "https://gofood.link/u/your-store",
    description: "Pesan via GoFood",
    isOnline: true,
    icon: Bike
  },
  {
    name: "GrabFood",
    color: "bg-emerald-600",
    url: "#grabfood",
    description: "Pesan via GrabFood",
    isOnline: false,
    icon: UtensilsCrossed
  },
  {
    name: "ShopeeFood",
    color: "bg-orange-600",
    url: "#shoppeefood",
    description: "Pesan via ShopeeFood",
    isOnline: false,
    icon: ShoppingBag
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
          {deliveryApps.map((app) => {
            const IconComponent = app.icon;
            return (
              <Card key={app.name} className="hover-elevate transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`${app.color} text-white rounded-lg p-6 mb-4 flex flex-col items-center justify-center gap-3`}>
                    <IconComponent className="h-12 w-12 text-white" />
                    <CardTitle className="text-white text-center text-xl">
                      {app.name}
                    </CardTitle>
                  </div>
                  <div className="flex justify-center">
                    <Badge 
                      variant={app.isOnline ? "default" : "secondary"}
                      className={app.isOnline ? "bg-green-600" : "bg-gray-500"}
                    >
                      {app.isOnline ? "Online" : "Offline"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    {app.description}
                  </p>
                  {app.isOnline ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        if (app.url.startsWith('http')) {
                          window.open(app.url, '_blank');
                        }
                      }}
                      data-testid={`button-${app.name.toLowerCase()}`}
                    >
                      Buka Aplikasi
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                      disabled
                      data-testid={`button-${app.name.toLowerCase()}`}
                    >
                      Belum Tersedia
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
