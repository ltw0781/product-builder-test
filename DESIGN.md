---
name: Atelier Digital
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#645d56'
  on-secondary: '#ffffff'
  secondary-container: '#ebe1d8'
  on-secondary-container: '#6a635c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#241a00'
  on-tertiary-container: '#a08000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ebe1d8'
  secondary-fixed-dim: '#cec5bc'
  on-secondary-fixed: '#1f1b16'
  on-secondary-fixed-variant: '#4c463f'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is anchored in the "Modern Editorial" aesthetic, blending the authoritative presence of a high-end fashion magazine with the fluid utility of a high-tech personal assistant. It targets fashion-conscious individuals who value curated expertise and efficiency. 

The visual language balances **Minimalism** with **Tactile** refinement. Large areas of whitespace (negative space) are used to frame high-quality photography, while subtle depth effects and precise typography evoke the feeling of a premium physical atelier. The emotional response is one of confidence, sophistication, and effortless luxury.

## Colors

The palette is designed to spotlight photography while maintaining a clear hierarchy of interaction. 

- **Primary (Deep Charcoal):** Used for typography, iconography, and high-importance UI boundaries. It provides the "ink" of the digital magazine.
- **Secondary (Champagne):** Used as a soft surface color for containers and backgrounds to prevent the interface from feeling clinical.
- **Tertiary (Sophisticated Gold):** Reserved for premium indicators, loyalty status, or subtle highlights.
- **Accent (Vibrant Coral):** The functional engine of the UI. Used sparingly for high-conversion Call-to-Actions (CTAs) and critical notifications.
- **Neutral (Off-White):** The canvas color, providing a soft, breathable background.

## Typography

This design system utilizes a high-contrast typographic pairing to signal the intersection of "Style" and "System."

**Playfair Display** provides the editorial voice. It should be used for page titles, section headers, and featured quotes. Its high stroke contrast demands generous line height to maintain its elegance.

**Hanken Grotesk** serves as the functional workhorse. It is a sharp, contemporary sans-serif that remains highly legible at small sizes, particularly for garment descriptions, AI sizing data, and navigational labels. Label styles utilize uppercase tracking to create a sense of organized luxury.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Margins:** A standard 24px side margin ensures content does not feel cramped on edge-to-edge displays.
- **The 8px Rhythm:** All vertical spacing and component sizing must be divisible by 8px to maintain a rhythmic vertical flow.
- **Photography Aspect Ratios:** Imagery should strictly adhere to 4:5 or 2:3 ratios, mimicking fashion editorial layouts.
- **Safe Areas:** Elements must respect the bottom home indicator and top notch, using the Champagne secondary color to "flood" these areas for a seamless look.

## Elevation & Depth

Depth in this design system is expressed through **Ambient Shadows** and **Tonal Layers**. 

Avoid heavy, dark shadows. Instead, use soft, diffused shadows with a slight tint of the primary charcoal color (Opacity: 4-8%) to lift active cards or buttons off the champagne surface. 

Tiered depth is achieved by placing neutral (off-white) containers on top of the champagne background. This creates a "layered paper" effect. For interactive overlays, use a subtle backdrop blur (12px) to maintain context while focusing the user on the task at hand.

## Shapes

The shape language is "Rounded" (0.5rem base) to convey a modern, approachable personality that softens the intensity of the deep charcoal accents. 

- **Small elements (Inputs, Buttons):** Use `0.5rem` to feel ergonomic and friendly.
- **Large elements (Cards, Image Containers):** Use `1rem` (rounded-lg) to create a distinct frame for fashion photography.
- **Selection states:** Active states for sizes or colors should use a pill-shape (circular ends) to contrast against the more structured grid.

## Components

- **Buttons:** Primary buttons use the Deep Charcoal background with white text. CTA buttons (like "Book Stylist") use the Coral accent. All buttons should have a subtle 8px vertical padding and center-aligned labels in the uppercase `label-md` style.
- **Cards:** Product and outfit cards use a clean Off-White background with a 1px border of #E0E0E0 (light grey) rather than a heavy shadow. Images within cards should have a subtle inner-glow to pop.
- **Input Fields:** Fields are underlined or use a soft secondary-colored background with no border, focusing on minimalist cleanliness. Floating labels are preferred to save vertical space.
- **Chips:** Used for "Style Tags" (e.g., #Boho, #BusinessCasual). These should have a Champagne background and a Deep Charcoal label, using the `label-sm` typography.
- **The "Wardrobe Slot":** A unique component for this design system—a dashed-border container used to represent empty slots in an AI-generated outfit, encouraging the user to "fill" the look.
- **Lists:** Clean, borderless list items separated by whitespace and 1px hairlines. Use chevron-right icons in the Primary color to indicate navigability.