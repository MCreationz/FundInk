# FundInk - React Vite Application

A modern React web application built with Vite, Bootstrap, and custom CSS. This project replicates the FundInk website design with a responsive layout, smooth animations, and professional styling.

## Features

- **React + Vite**: Fast development with Hot Module Replacement (HMR)
- **Bootstrap 5**: Responsive grid system and components
- **Custom CSS**: Separate CSS file with all styling (no Tailwind)
- **React Router**: Client-side routing for navigation
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Gradient buttons, cards, and professional styling

## Project Structure

```
fundink/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   └── Footer.jsx   # Footer component
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx # Main landing page
│   │   └── AboutUs.jsx  # About us page
│   ├── styles/          # CSS files
│   │   └── custom.css   # All custom styles
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Installation

1. Navigate to the project directory:
```bash
cd fundink
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Pages

### HomePage (`/`)
The main landing page includes:
- Hero section with CTAs
- Features cards (Ecosystem Enabler, Redefining Funding, Maximizing Impact, Outreach)
- "What We Offer" section with browser mockup
- Sectors cloud
- Trusted partners section
- Registration form

### AboutUs (`/about`)
The about page includes:
- Hero section
- Mission statement
- Core values cards
- How it works process
- Company timeline/milestones
- Team section
- Call-to-action

## Components

### Navbar
- Logo with gradient triangle
- Navigation links (About, Product & Services, How it Works, Our Work)
- "Active Calls" gradient button
- "Sign In" outline button
- Responsive mobile menu

### Footer
- Logo and tagline
- Quick Links
- Contact information
- Social media links
- Legal links (Terms, Privacy, Cookies)

## Styling

All styles are in `src/styles/custom.css`:
- CSS Variables for consistent theming
- Gradient colors (Blue to Teal)
- Responsive breakpoints
- Card styles
- Button styles
- Form styles
- Section spacing

## Technologies Used

- **React 18** - UI library
- **Vite 5** - Build tool
- **React Bootstrap 2** - Bootstrap components
- **Bootstrap 5** - CSS framework
- **React Router DOM 6** - Routing
- **Inter Font** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
