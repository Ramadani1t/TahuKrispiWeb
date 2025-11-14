import ProductCard from '../ProductCard'
import productImage from '@assets/IMG-20250911-WA0018_1763095354099.jpg'

export default function ProductCardExample() {
  const product = {
    id: 'small',
    name: 'Tahu Crispy Small',
    size: '5 pcs',
    pieces: 5,
    price: 10000,
    image: productImage,
    description: 'Porsi pas untuk cemilan sore',
    type: 'tofu' as const
  };

  return (
    <div className="max-w-sm">
      <ProductCard
        product={product}
        onBuyNow={(p) => console.log('Buy now:', p.name)}
        onAddToCart={(p) => console.log('Add to cart:', p.name)}
      />
    </div>
  )
}
