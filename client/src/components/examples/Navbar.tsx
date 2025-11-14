import Navbar from '../Navbar'

export default function NavbarExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={3} onCartClick={() => console.log('Cart clicked')} />
      <div className="pt-32 px-4">
        <p className="text-center text-muted-foreground">Scroll untuk melihat efek navbar</p>
      </div>
    </div>
  )
}
