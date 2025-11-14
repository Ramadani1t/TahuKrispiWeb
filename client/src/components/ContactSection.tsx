import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiTiktok } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hubungi Kami
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ada pertanyaan atau ingin pesan? Jangan ragu untuk menghubungi kami!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover-elevate">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <button
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  data-testid="button-whatsapp"
                >
                  +62 812-3456-7890
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <button
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.open('https://instagram.com/tahunya.krispiya', '_blank')}
                  data-testid="button-instagram"
                >
                  @tahunya.krispiya
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <button
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.location.href = 'mailto:info@krispiya.com'}
                  data-testid="button-email"
                >
                  info@krispiya.com
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <SiTiktok className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">TikTok</h3>
                <button
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.open('https://tiktok.com/@tahunya.krispiya', '_blank')}
                  data-testid="button-tiktok"
                >
                  @tahunya.krispiya
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-3">
              Siap Menikmati Kelezatan?
            </h3>
            <p className="mb-6 opacity-90">
              Pesan sekarang dan rasakan krispinya yang bikin nagih!
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                const menuSection = document.querySelector('#menu');
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              data-testid="button-order-now"
            >
              Pesan Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
