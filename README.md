# Eskinder Portfolio - React TypeScript Version

A modern, cyberpunk-themed portfolio built with React, TypeScript, and Vite. Features a blue theme system, interactive animations, and responsive design.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Theme System** - Switch between green and blue themes
- **Interactive Elements** - Tilt cards, glitch text, typewriter effects
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels and keyboard navigation

## 📁 Project Structure

```
├── src/
│   └── main.tsx          # React entry point
├── components/           # React components
│   ├── figma/           # Design assets
│   ├── ui/              # Reusable UI components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── CyberBackground.tsx # Animated background
│   ├── Education.tsx    # Education & certifications
│   ├── ExternalLinkHandler.tsx # External link management
│   ├── GlitchText.tsx   # Glitch text animation
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── ScrollProgress.tsx # Scroll progress bar
│   ├── Skills.tsx       # Skills section
│   ├── SmoothScrollHandler.tsx # Smooth scrolling
│   ├── StatCard.tsx     # Statistics cards
│   ├── TiltCard.tsx     # Interactive tilt cards
│   └── TypewriterEffect.tsx # Typewriter animation
├── styles/
│   └── globals.css      # Global styles with theme system
├── guidelines/          # Development guidelines
├── App.tsx             # Main app component
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite configuration
└── Attributions.md     # Credits and attributions
```

## 🛠️ Setup & Installation

### Quick Start
```bash
# Clone the repository
git clone <your-repo-url>
cd eportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Manual Installation
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Dependencies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Motion** - Animation library (Framer Motion)
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling framework

## 🎨 Theme System

The portfolio includes a flexible theme system:

- **Default Theme**: Green neon cyberpunk
- **Blue Theme**: Cyan/royal blue variant (currently active)
- **Theme Switching**: Toggle via `data-theme` attribute on HTML element

### Switching Themes

In `index.html`, change:
```html
<html lang="en" data-theme="blue">  <!-- Blue theme -->
<html lang="en">                    <!-- Green theme (default) -->
```

## 🎯 Key Components

- **Hero Section**: Animated avatar with glitch text and typewriter effect
- **Interactive Cards**: Tilt effects on hover with smooth animations
- **Cyber Background**: Animated particle system with connecting lines
- **Scroll Progress**: Dynamic progress bar showing scroll position
- **Responsive Navigation**: Mobile-friendly with smooth transitions

## 📱 Responsive Design

- Mobile-first CSS approach
- Flexible grid layouts
- Optimized touch interactions
- Accessible navigation patterns

## 🔧 Development

- TypeScript for type safety
- ESLint for code quality
- Vite for fast HMR (Hot Module Replacement)
- CSS custom properties for theming

## 📄 License

This project is created for portfolio purposes. See `Attributions.md` for third-party credits.
