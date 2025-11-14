import Hero from '../Hero'

export default function HeroExample() {
  return (
    <div className="min-h-screen bg-background">
      <Hero onCTAClick={() => console.log('CTA clicked')} />
    </div>
  )
}
