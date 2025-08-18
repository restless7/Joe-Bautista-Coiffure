# Joe Bautista Atelier - Image Reference Guide

This document outlines all image placements, paths, and specifications for the website.

## 📁 Directory Structure

```
public/images/
├── hero/
│   └── atelier-hero-main.jpg
├── philosophy/
│   └── atelier-workspace.jpg  
├── services/
│   ├── creation-sur-mesure.jpg
│   ├── restauration.jpg
│   └── consultation.jpg
├── gallery/
│   ├── project-01.jpg
│   ├── project-02.jpg
│   └── project-03.jpg
└── about/
    ├── joe-portrait.jpg
    └── atelier-exterior.jpg
```

## 🖼️ Image Specifications & Usage

### Hero Section
**Path**: `/images/hero/atelier-hero-main.jpg`
- **Purpose**: Full-screen hero background
- **Dimensions**: Minimum 1920x1080px (16:9 aspect ratio)
- **Style**: Atmospheric workshop or artisan space
- **Content**: Should showcase the atelier environment, tools, or craftsmanship in action
- **Processing**: Overlay with 20% dark gradient for text readability

### Philosophy Section
**Path**: `/images/philosophy/atelier-workspace.jpg`
- **Purpose**: Square image alongside philosophy text
- **Dimensions**: 800x800px (1:1 aspect ratio)
- **Style**: Close-up of workspace, tools, or hands crafting
- **Content**: Should convey attention to detail and traditional craftsmanship
- **Processing**: Subtle hover scale effect (105%)

### Services Section

#### Création sur mesure
**Path**: `/images/services/creation-sur-mesure.jpg`
- **Purpose**: Service icon/illustration
- **Dimensions**: 400x400px (1:1 aspect ratio)
- **Style**: Clean, minimal composition
- **Content**: Design sketches, measuring tools, or custom piece creation
- **Processing**: Hover scale effect (110%)

#### Restauration
**Path**: `/images/services/restauration.jpg`
- **Purpose**: Service icon/illustration  
- **Dimensions**: 400x400px (1:1 aspect ratio)
- **Style**: Clean, minimal composition
- **Content**: Restoration tools, before/after comparison, or repair process
- **Processing**: Hover scale effect (110%)

#### Consultation
**Path**: `/images/services/consultation.jpg`
- **Purpose**: Service icon/illustration
- **Dimensions**: 400x400px (1:1 aspect ratio)
- **Style**: Clean, minimal composition
- **Content**: Meeting space, sketching, or client consultation scene
- **Processing**: Hover scale effect (110%)

### Gallery Section (Future Pages)
**Path**: `/images/gallery/project-*.jpg`
- **Purpose**: Portfolio showcase
- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Style**: High-quality product photography
- **Content**: Finished pieces, detail shots, artistic compositions

### About Section (Future Pages)
**Path**: `/images/about/joe-portrait.jpg`
- **Purpose**: Artisan portrait
- **Dimensions**: 600x800px (3:4 aspect ratio)
- **Style**: Professional portrait in workshop setting

**Path**: `/images/about/atelier-exterior.jpg`
- **Purpose**: Studio exterior or entrance
- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Style**: Architectural photography, welcoming entrance

## 🎨 Image Style Guidelines

### Color Palette
- **Primary tones**: Neutral grays, warm whites, natural wood
- **Accent colors**: Soft earth tones (stone, clay, metal)
- **Avoid**: Bright saturated colors, neon tones, heavy filters

### Composition
- **Clean backgrounds**: Minimal distractions
- **Natural lighting**: Soft, diffused light preferred
- **Geometric balance**: Following Scandinavian aesthetic principles
- **Focus on craftsmanship**: Hands, tools, materials, textures

### Processing
- **Saturation**: Slightly desaturated for minimalist feel
- **Contrast**: Moderate contrast, avoiding harsh shadows
- **Grain**: Subtle film grain acceptable
- **Filters**: Avoid heavy Instagram-style filters

### Technical Requirements
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: High resolution, optimized for web (under 500KB each)
- **Alt text**: All images include descriptive French alt text
- **Blur placeholder**: Generated base64 placeholder for loading

## 📱 Responsive Considerations

### Mobile Optimization
- Images should work well at smaller sizes
- Text overlays remain readable on mobile
- Service icons maintain clarity at 80px width

### Loading Performance
- Use Next.js Image component for automatic optimization
- Implement blur placeholders for smooth loading
- Priority loading for hero image only

## 🇫🇷 Alt Text Examples

**French (Primary)**:
- "Atelier Joe Bautista - Espace de création artisanale"
- "Outils et matériaux de création artisanale"
- "Création sur mesure - Outils d'artisan"
- "Restauration - Techniques traditionnelles de réparation"
- "Consultation - Échange et conseil personnalisé"

**English (Reference)**:
- "Joe Bautista Studio - Artisanal creation space"
- "Tools and materials for artisanal creation"
- "Custom creation - Artisan tools"
- "Restoration - Traditional repair techniques"  
- "Consultation - Personalized exchange and advice"

## ✅ Implementation Checklist

### Current Status (✅ = Ready, 📁 = Needs Image)
- ✅ Hero background: `/images/hero/atelier-hero-main.jpg`
- ✅ Philosophy: `/images/philosophy/atelier-workspace.jpg`
- ✅ Service 1: `/images/services/creation-sur-mesure.jpg`
- ✅ Service 2: `/images/services/restauration.jpg`
- ✅ Service 3: `/images/services/consultation.jpg`
- 📁 Gallery: `/images/gallery/*.jpg` (for future pages)
- 📁 About: `/images/about/*.jpg` (for future pages)

### Next Steps
1. **Source images** that match the Scandinavian minimalist aesthetic
2. **Optimize** all images for web performance (WebP format recommended)
3. **Test** on various devices and screen sizes
4. **Add** more portfolio images for gallery sections
5. **Consider** adding image loading states for better UX

---

*All images should reinforce the brand values of traditional craftsmanship, minimalist aesthetics, and French artisanal excellence.*
