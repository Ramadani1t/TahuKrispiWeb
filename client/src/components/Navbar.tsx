import { useState, useEffect } from "react";
// Hapus 'Link' dan 'useLocation' dari wouter jika hanya digunakan untuk scroll
// Jika wouter masih diperlukan di komponen lain, biarkan saja. Saya asumsikan ini murni untuk anchor.
// import { Link, useLocation } from "wouter"; 
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoImg from "@assets/1763097449392_1763097461717.png";

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ cartItemCount = 0, onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [location] = useLocation(); // Hapus jika tidak digunakan

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#top", label: "Home" }, // Anchor untuk paling atas halaman
    { href: "#menu", label: "Menu" }, // Anchor ke section Menu Anda
    { href: "#info", label: "Info" },
    { href: "#contact", label: "Contact" }
  ];
  
  // FUNGSI SCROLL YANG SUDAH DIPERBAIKI (Tidak ada definisi ganda)
  const scrollToSection = (href: string) => {
    // 1. Logika Khusus untuk Home (#top)
    if (href === '#top') { 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    
    // 2. Logika untuk Anchor Lain (#menu, #info, #contact)
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* PERBAIKAN: Ganti Link wouter dengan button agar bisa dipanggil scrollToSection */}
          <button
            className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-home"
            onClick={() => scrollToSection("#top")} // Panggil scroll ke paling atas
          >
            <img 
              src={logoImg} 
              alt="Tahunya Krispi-ya Logo" 
              className="h-12 md:h-14 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold text-primary hidden sm:block">
              Tahunya Krispi-ya!
            </span>
          </button>
          {/* END PERBAIKAN LOGO */}

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-base font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t animate-fade-in" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-base font-medium text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid={`mobile-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
