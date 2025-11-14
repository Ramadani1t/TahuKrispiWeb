import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Tahunya Krispi-ya!</h3>
            <p className="text-sm text-muted-foreground">
              Menyajikan tahu crispy berkualitas tinggi dengan cita rasa yang bikin nagih sejak 2024.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.querySelector('#info');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-info"
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.querySelector('#contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+62 812-3456-7890</li>
              <li>info@krispiya.com</li>
              <li>Jl. Raya Contoh No. 123</li>
              <li>Jakarta Selatan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for crispy tofu lovers
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Tahunya Krispi-ya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
