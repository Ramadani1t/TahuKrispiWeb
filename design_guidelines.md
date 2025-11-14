# Design Guidelines: Tahunya Krispi-ya! Landing Page

## Design Approach
**Reference-Based**: Drawing inspiration from modern food delivery platforms (Gojek Food, GrabFood) combined with vibrant street food aesthetics. Emphasis on appetizing product photography, playful energy, and seamless mobile-first shopping experience.

## Core Design Principles
- **Appetite Appeal**: Photography-first design showcasing crispy golden tofu
- **Playful Energy**: Fun, accessible vibe matching the street food culture
- **Effortless Ordering**: Clear, frictionless path from browsing to WhatsApp checkout
- **Trust & Transparency**: Professional presentation with clear pricing and info

## Typography
- **Primary Font**: Poppins (Google Fonts) - Modern, friendly, highly readable in Indonesian
- **Hierarchy**:
  - Hero/H1: 3xl to 5xl, Bold (700) - "Tahunya Krispi-ya!"
  - Section Headers/H2: 2xl to 3xl, SemiBold (600)
  - Product Names/H3: xl to 2xl, Medium (500)
  - Body Text: base to lg, Regular (400)
  - Prices: lg to xl, Bold (700) - high visibility
  - Buttons: base to lg, SemiBold (600)

## Layout System
**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-24 (desktop), py-8 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-4

## Component Library

### Navigation
- Sticky header with blur backdrop effect
- Logo left, menu right (desktop) / hamburger (mobile)
- Clean, minimal 3-item menu: Home, Info, Contact
- Floating cart icon (top-right) with badge counter
- Mobile: Full-screen overlay menu with smooth transitions

### Hero Section
- **Full-width hero** with vibrant gradient background (warm yellows/oranges)
- Large product hero image showcasing golden crispy tofu
- Slogan "Krispinya Bikin Nagih Lagi!" - prominent, playful typography
- Short tagline highlighting freshness and crispiness
- Primary CTA button: "Lihat Menu"
- Height: 80-90vh for impact

### Product Cards
- Grid layout: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Each card: White background, rounded-2xl, subtle shadow
- Product image: Aspect ratio 4:3, rounded-t-2xl
- Product name, size info (5/10/20 pcs), bold price
- Dual action buttons: "Beli Sekarang" (primary) + "Keranjang" (secondary outline)
- Add-ons displayed similarly with cup quantities
- Hover: Subtle lift effect (translate-y-1)

### Shopping Cart (Floating Panel)
- Slide-in panel from right side
- Semi-transparent backdrop
- List view of selected items with quantities
- Adjust quantity (+/-) controls
- Subtotal calculation
- Large "Pesan via WhatsApp" button at bottom
- Empty state with friendly message

### Information Sections
- **Restaurant Info**: 2-column layout (desktop), stacked (mobile)
  - Left: Address with map icon, contact with phone icon, hours with clock icon
  - Right: Decorative image or map placeholder
- **Bank Info**: Protected section
  - Password input field (centered, max-w-md)
  - Encrypted account display after unlock
  - Professional lock icon

### Footer
- 3-column layout (desktop): About, Quick Links, Contact
- Social media icons
- Copyright text
- Background: Subtle darker shade

## Animations
- **Page Load**: Fade-in animation (0.5s) with scale effect
- **Product Cards**: Stagger entrance (each card 0.1s delay)
- **Cart**: Slide-in from right (0.3s ease-out)
- **Buttons**: Subtle scale on hover (1.05)
- **Scroll**: Smooth scroll behavior for navigation
- Minimal, purposeful - don't overdo it

## Images
**Critical Product Photography**:
1. **Hero Image**: Main crispy tofu hero shot - golden, appetizing close-up
2. **Product Images**: Use all 8 provided images
   - Small size product card
   - Medium size product card  
   - Large size product card
   - Sambel 1 Cup
   - Sambel 2 Cup
   - Additional images for gallery/testimonials section
3. **Background**: Subtle texture or gradient - never compete with product photos

## Responsive Behavior
- **Mobile-First**: Design from 375px up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Minimum 44px tap targets
- **Single Column**: Products stack on mobile for optimal viewing
- **Simplified Nav**: Hamburger menu with full-screen overlay
- **Cart**: Full-screen modal on mobile instead of side panel

## Brand Personality
- Warm, energetic, street-food authentic
- Color palette: Vibrant yellows, warm oranges, appetizing reds (specified later in color phase)
- Photography style: Natural, appetizing, well-lit food shots
- Tone: Friendly, casual, inviting - "Ayo pesan sekarang!"