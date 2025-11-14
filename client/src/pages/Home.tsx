import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ShoppingCart from "@/components/ShoppingCart";
import InfoSection from "@/components/InfoSection";
import BankInfo from "@/components/BankInfo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import type { Product, CartItem } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

import img1 from "@assets/IMG-20250911-WA0018_1763095354099.jpg";
import img2 from "@assets/IMG-20250911-WA0021_1763095354116.jpg";
import img3 from "@assets/IMG-20250911-WA0027_1763095354130.jpg";
import img4 from "@assets/IMG-20250911-WA0026_1763095354145.jpg";
import img5 from "@assets/IMG-20250911-WA0020_1763095354162.jpg";

const WHATSAPP_NUMBER = "6281234567890";

const products: Product[] = [
  {
    id: "small",
    name: "Small Pack",
    size: "5 pcs",
    pieces: 5,
    price: 10000,
    image: img1,
    description: "Porsi pas untuk cemilan sore atau makan sendiri",
    type: "tofu",
  },
  {
    id: "medium",
    name: "Medium Pack",
    size: "10 pcs",
    pieces: 10,
    price: 18000,
    image: img2,
    description: "Cocok untuk berbagi dengan teman atau keluarga",
    type: "tofu",
  },
  {
    id: "large",
    name: "Large Pack",
    size: "20 pcs",
    pieces: 20,
    price: 32000,
    image: img3,
    description: "Pilihan hemat untuk acara atau pesta kecil",
    type: "tofu",
  },
  {
    id: "sambel-1",
    name: "Sambel Pedas",
    size: "1 Cup",
    pieces: 1,
    price: 3000,
    image: img4,
    description: "Sambel pedas spesial untuk tambahan nikmat",
    type: "sambel",
  },
  {
    id: "sambel-2",
    name: "Sambel Pedas",
    size: "2 Cup",
    pieces: 2,
    price: 5000,
    image: img5,
    description: "Sambel pedas spesial - paket hemat 2 cup",
    type: "sambel",
  },
];

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, quantity: 1 }];
    });

    toast({
      title: "Ditambahkan ke keranjang!",
      description: `${product.name} berhasil ditambahkan`,
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems((items) => items.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((items) =>
        items.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const generateWhatsAppMessage = (items: CartItem[]) => {
    let message = "Halo, saya mau pesan:\n\n";
    items.forEach((item) => {
      message += `- ${item.product.name} (${item.product.size}) x${item.quantity}\n`;
    });
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    message += `\nTotal: Rp ${total.toLocaleString("id-ID")}`;
    return encodeURIComponent(message);
  };

  const handleBuyNow = (product: Product) => {
    const message = `Halo, saya mau pesan:\n\n- ${product.name} (${product.size}) x1\n\nTotal: Rp ${product.price.toLocaleString("id-ID")}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const message = generateWhatsAppMessage(cartItems);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navbar cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <Hero />

      <section id="menu" className="py-16 md:py-24" data-testid="menu-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Menu Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih paket favorit Anda dan nikmati kelezatan tahu crispy kami
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Paket Tahu Crispy</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.type === "tofu")
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onBuyNow={handleBuyNow}
                    onAddToCart={addToCart}
                  />
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Add-Ons</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {products
                .filter((p) => p.type === "sambel")
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onBuyNow={handleBuyNow}
                    onAddToCart={addToCart}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <InfoSection />
      <BankInfo />
      <ContactSection />
      <Footer />

      <ShoppingCart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
