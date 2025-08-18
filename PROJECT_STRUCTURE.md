# Joe Bautista Atelier - Project Structure

## 🏗️ Architecture Overview

This Next.js 15 project follows a **Scandinavian minimalist aesthetic** with a focus on:
- Clean, geometric typography (Inter font family)
- Neutral color palette (whites, grays, charcoal)
- Generous white space and minimal design elements
- French content with English translations for context

## 📁 Folder Structure

```
joe-bautista-atelier/
├── app/                          # Next.js App Router directory
│   ├── components/               # UI components (co-located in app/)
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Header.tsx           # Navigation header with mobile menu
│   │   └── Footer.tsx           # Site footer with brand info
│   ├── lib/                     # Utility libraries (co-located in app/)
│   │   └── utils.ts             # Common utility functions
│   ├── actions.ts               # Server actions for forms
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage component
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration with custom colors
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration with path aliases
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Colors (TailwindCSS)
```css
neutral-50:  #fafafa   /* Pure white backgrounds */
neutral-100: #f8f8f8   /* Off-white */
neutral-600: #737373   /* Medium gray for text */
neutral-900: #262626   /* Dark charcoal for headings */

stone-*: /* Additional neutral tones */
```

### Typography
- **Font Family**: Inter (geometric sans-serif)
- **Weight Scale**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Letter Spacing**: Tight tracking for headings (-0.025em)

### Components
- **Button**: 3 variants (primary, secondary, minimal) with 3 sizes
- **Header**: Responsive navigation with mobile hamburger menu
- **Footer**: Three-column layout with brand, services, and contact info

## 🌐 Content Strategy

### French-First Approach
- Primary content in elegant, refined French
- English translations in parentheses for development context
- Short, impactful sentences matching Scandinavian aesthetic
- Professional tone: "Création artisanale d'exception"

### Navigation Structure
```
- À propos (About)
- Services
  ├── Création sur mesure (Custom Creation)
  ├── Restauration (Restoration)
  └── Consultation
- Portfolio
- Contact
```

## ⚙️ Technical Configuration

### Key Features
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **TailwindCSS v4** for styling
- **Server Actions** for form handling
- **French locale** support (lang="fr")
- **SEO optimized** metadata

### Path Aliases
```typescript
"@/*": ["./*"]  // Absolute imports from project root
```

### Scripts
```bash
npm run dev    # Development server with Turbopack
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Visit**: http://localhost:3000

## 📝 Next Steps

### Immediate Development Tasks
1. **Add images**: Replace placeholder divs with actual atelier photos
2. **Complete forms**: Implement contact form with validation
3. **Add pages**: Create About, Services, Portfolio, and Contact pages
4. **Email integration**: Set up transactional email service
5. **CMS integration**: Consider Sanity or ContentLayer for content management

### SEO & Performance
1. **Image optimization**: Add next/image components
2. **Meta tags**: Complete OpenGraph and Twitter Card metadata
3. **Analytics**: Integrate Google Analytics or similar
4. **Sitemap**: Generate dynamic sitemap

### Advanced Features
1. **Booking system**: For consultations and appointments
2. **Portfolio gallery**: Image carousel with filtering
3. **Multi-language**: Add English version support
4. **Newsletter**: MailChimp or similar integration

## 🎯 Brand Consistency Guidelines

### Visual Hierarchy
1. **H1**: Large, light weight, minimal tracking
2. **H2-H6**: Medium weight, tight tracking
3. **Body**: Regular weight, relaxed leading
4. **Accents**: Minimal use of color, focus on typography

### Interactive Elements
- **Hover states**: Subtle color transitions (200ms)
- **Focus states**: Neutral-900 ring with offset
- **Loading states**: Minimal spinners or skeleton screens

### Layout Principles
- **Max-width**: 7xl (80rem) for main content
- **Padding**: Consistent 4/6/8 scale
- **Grid**: CSS Grid for complex layouts
- **Flexbox**: For component-level alignment

---

*Built with attention to detail and respect for traditional craftsmanship values.*
