import { useState } from 'react'
import ShoppingCart from '../ShoppingCart'
import { Button } from '@/components/ui/button'
import productImage from '@assets/IMG-20250911-WA0018_1763095354099.jpg'

export default function ShoppingCartExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([
    {
      product: {
        id: 'small',
        name: 'Tahu Crispy Small',
        size: '5 pcs',
        pieces: 5,
        price: 10000,
        image: productImage,
        description: 'Porsi pas untuk cemilan',
        type: 'tofu' as const
      },
      quantity: 2
    }
  ]);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      <ShoppingCart
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        onUpdateQuantity={(id, qty) => {
          console.log('Update quantity:', id, qty);
          setItems(items.map(item => 
            item.product.id === id ? { ...item, quantity: qty } : item
          ).filter(item => item.quantity > 0));
        }}
        onCheckout={() => console.log('Checkout clicked')}
      />
    </div>
  )
}
