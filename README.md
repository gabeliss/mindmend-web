# MindMend Website

A modern, responsive React website for the MindMend iOS app - a personal growth and mental wellness application that combines habit tracking, journaling, and AI-powered insights.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, modern design with purple gradient theme matching the app
- **Landing Page**: Comprehensive homepage showcasing all app features
- **Legal Pages**: Complete Privacy Policy and Terms of Service pages
- **App Store Integration**: Download links and app store badges
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **CSS3**: Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mindmend-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable React components
│   ├── Navbar.jsx     # Navigation component
│   └── Footer.jsx     # Footer component
├── pages/             # Page components
│   ├── Home.jsx       # Landing page
│   ├── Privacy.jsx    # Privacy policy page
│   └── Terms.jsx      # Terms of service page
├── App.jsx            # Main app component with routing
├── App.css            # Main styles
├── index.css          # Global styles and utilities
└── main.jsx           # React entry point
```

## Deployment

This website can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3 + CloudFront**: For enterprise hosting

## Customization

### Colors

The website uses a purple theme that matches the MindMend app:
- Primary: `#8B5CF6` (Purple-500)
- Secondary: `#A855F7` (Purple-400)
- Accent: `#C084FC` (Purple-300)

Update these colors in `src/index.css` and `src/App.css` to match your brand.

### Content

- Update app store links in `src/pages/Home.jsx`
- Modify contact information in privacy and terms pages
- Replace placeholder statistics with real data
- Add actual app screenshots to the hero section

### Features

The website showcases four main app features:
1. **Habit Tracking** - Unlimited habits with smart categorization
2. **Smart Journaling** - AI-integrated personal reflections
3. **AI Assistant (Aya)** - Contextual insights and coaching
4. **Voice-Powered** - Hands-free habit tracking

## App Store Assets

Replace the placeholder App Store badge (`public/app-store-badge.svg`) with the official Apple App Store badge when your app is published.

## License

This project is created for the MindMend application. All rights reserved.

## Support

For questions about the website, please contact: support@mindmend.app
