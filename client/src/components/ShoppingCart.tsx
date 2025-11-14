import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CartItem } from "@shared/schema";

interface ShoppingCartProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onCheckout: () => void;
}

export default function ShoppingCart({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onCheckout
}: ShoppingCartProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
        data-testid="cart-backdrop"
      />

      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl z-50 flex flex-col animate-slide-in-right"
        data-testid="shopping-cart"
      >
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold" data-testid="text-cart-title">Keranjang Belanja</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            data-testid="button-close-cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="h-20 w-20 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2" data-testid="text-empty-cart">Keranjang Kosong</h3>
            <p className="text-muted-foreground">Belum ada produk yang ditambahkan</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.product.id} className="p-4" data-testid={`cart-item-${item.product.id}`}>
                    <div className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-md"
                        data-testid={`cart-item-image-${item.product.id}`}
                      />
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold" data-testid={`cart-item-name-${item.product.id}`}>
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.product.size}
                        </p>
                        <p className="text-lg font-bold text-primary" data-testid={`cart-item-price-${item.product.id}`}>
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          data-testid={`button-decrease-${item.product.id}`}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Badge variant="secondary" className="px-4 py-1" data-testid={`text-quantity-${item.product.id}`}>
                          {item.quantity}
                        </Badge>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.product.id}`}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.product.id, 0)}
                        data-testid={`button-remove-${item.product.id}`}
                      >
                        Hapus
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>

            <div className="p-6 border-t space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary" data-testid="text-cart-total">
                  {formatPrice(total)}
                </span>
              </div>
              <Button
                size="lg"
                className="w-full text-lg font-semibold"
                onClick={onCheckout}
                data-testid="button-checkout"
              >
                Pesan via WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
