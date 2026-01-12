# LogicNex - Company Website

A modern, professional website for LogicNex built with Next.js, featuring 3D animations and a responsive design.

## Features

- 🎨 **Modern UI Design** - Clean, professional, and tech-focused interface
- ✨ **3D Animations** - Interactive 3D elements on Home and Services pages using Three.js
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🚀 **Fast Performance** - Built with Next.js 16 for optimal speed
- 🎭 **Smooth Animations** - Framer Motion for fluid page transitions
- 🔍 **SEO Optimized** - Proper metadata and structure for search engines

## Pages

- **Home** - Hero section with 3D animated cube and company introduction
- **Services** - Showcase of all services with 3D floating orbs animation
- **Portfolio** - Display of completed projects and case studies
- **Contact** - Contact form for client inquiries

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

The project requires the following additional packages (which will be installed via npm install):

- `framer-motion` - For smooth animations and transitions
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for react-three/fiber

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
logicnex/
├── app/
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and animations
├── components/
│   ├── Navigation.tsx    # Main navigation component
│   ├── Footer.tsx        # Footer component
│   └── 3D/
│       ├── AnimatedCube.tsx   # 3D cube animation
│       └── FloatingOrbs.tsx   # 3D floating orbs animation
└── public/               # Static assets
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **React Three Fiber** - React wrapper for Three.js

## Services Offered

- Web Development
- Desktop Application Development
- Software Solutions for Data Management
- Billing and Invoice Generation Systems
- AI-Based Predictions and Automation
- Custom Software Development and Maintenance

## Building for Production

```bash
npm run build
npm start
```

## Customization

- Update company information in the respective page components
- Modify colors and themes in `app/globals.css`
- Add or remove services in `app/services/page.tsx`
- Update portfolio projects in `app/portfolio/page.tsx`

## License

© 2024 LogicNex. All rights reserved.
