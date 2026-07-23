---
name: Levantine Heritage & Play
colors:
  surface: '#f7f9fd'
  surface-dim: '#d8dade'
  surface-bright: '#f7f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f8'
  surface-container: '#eceef2'
  surface-container-high: '#e6e8ec'
  surface-container-highest: '#e0e2e6'
  on-surface: '#191c1f'
  on-surface-variant: '#44474e'
  inverse-surface: '#2d3134'
  inverse-on-surface: '#eff1f5'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5e82'
  primary: '#031636'
  on-primary: '#ffffff'
  primary-container: '#1a2b4c'
  on-primary-container: '#8293ba'
  inverse-primary: '#b6c6f0'
  secondary: '#785900'
  on-secondary: '#ffffff'
  secondary-container: '#fdc003'
  on-secondary-container: '#6c5000'
  tertiary: '#161817'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2c2b'
  on-tertiary-container: '#929392'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6f0'
  on-primary-fixed: '#071b3b'
  on-primary-fixed-variant: '#364669'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e2e3e1'
  tertiary-fixed-dim: '#c6c7c5'
  on-tertiary-fixed: '#1a1c1b'
  on-tertiary-fixed-variant: '#454746'
  background: '#f7f9fd'
  on-background: '#191c1f'
  surface-variant: '#e0e2e6'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
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
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system is built for a premium Lebanese toy and collectibles retailer, bridging the gap between nostalgic playfulness and sophisticated curation. The target audience includes discerning parents and adult collectors who value quality, heritage, and a seamless mobile shopping experience.

The visual style is **Corporate / Modern** with a **Minimalist** lean, ensuring that the vibrant colors of the toys and collectibles remain the focal point. By utilizing generous whitespace and a restricted, high-contrast palette, the UI feels organized and "gallery-like." The emotional response should be one of trust, joy, and premium quality—moving away from the cluttered look of traditional toy stores toward a refined, boutique digital environment.

## Colors

The palette is anchored by the **Deep Blue primary**, providing an authoritative and premium foundation. This is contrasted against an **Off-white background** which softens the overall interface compared to a stark pure white. 

The **Warm Yellow accent** is used sparingly for high-intent actions (primary buttons, notifications, price highlights) to inject energy and playfulness. **Soft Gray** is reserved exclusively for structural elements like borders and dividers to maintain a clean, organized hierarchy without adding visual weight.

## Typography

This design system uses a dual-font strategy. **Montserrat** is used for headlines to convey a bold, geometric, and modern personality. **Inter** is used for body copy and UI labels to ensure maximum legibility, especially on mobile devices where clear product information is critical.

Heavy weights are prioritized for headlines to create a clear "stop-and-look" hierarchy. For mobile, display sizes are scaled down to prevent excessive word-breaking, while maintaining the same bold weight to keep the brand's impactful character intact.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first commerce. The standard mobile layout uses a 2-column or 4-column structure with a 20px outer margin to ensure content doesn't feel cramped against the screen edges.

Vertical rhythm is strictly maintained using multiples of 4px. Product cards in listings should utilize a 16px gutter. On desktop, the layout expands to a 12-column fixed grid with a maximum width of 1280px to maintain the "premium boutique" feel and prevent product images from becoming overly distorted.

## Elevation & Depth

To maintain a clean and modern aesthetic, depth is created through **Ambient Shadows** and **Tonal Layers**. 

Shadows are extremely diffused (e.g., Blur: 20px, Y: 4px) with low opacity (8-10%) and a slight tint of the Deep Blue primary color to make them feel integrated rather than "dirty." 

1. **Level 0 (Base):** Off-white background.
2. **Level 1 (Cards):** White background with a subtle shadow and Soft Gray border.
3. **Level 2 (Floating/Modals):** White background with a more pronounced shadow for drawers and mobile navigation menus.

## Shapes

The shape language is defined by **Rounded** corners to evoke the friendly and safe nature of toys. A standard radius of 16px is applied to all primary containers and product cards. Smaller elements like buttons and input fields follow the same logic but at a smaller scale. This consistent rounding softens the "Corporate" feel of the blue and gray palette, making the interface feel approachable and modern.

## Components

### Buttons
- **Primary:** Deep Blue background, white text, 12px padding (vertical) / 24px (horizontal), 8px radius.
- **Secondary:** Warm Yellow background, Deep Blue text. Used exclusively for "Add to Cart" or "Buy Now."
- **Tertiary/Ghost:** Deep Blue outline or text-only for less critical actions.

### Product Cards
- **Structure:** 16px corner radius, white background, Soft Gray 1px border. 
- **Image:** Full-bleed at the top with a subtle 5% gray tint behind the product to make items "pop."
- **Content:** Headline-sm for product title, Warm Yellow for price.

### Input Fields
- **Style:** Off-white fill, Soft Gray border. On focus, the border transitions to Deep Blue. 
- **Touch Target:** Minimum height of 48px for all mobile inputs.

### Chips & Tags
- **Use:** Age ranges, categories, or "Limited Edition" status.
- **Style:** Small 4px radius, light tint of primary or secondary colors with dark text.

### Lists
- **Style:** Divided by 1px Soft Gray lines. High-density for filter menus, low-density with 16px vertical padding for account settings.

### Navigation
- **Mobile:** Sticky bottom navigation bar with clear icons and Inter Label-md text. High-contrast Deep Blue active states.