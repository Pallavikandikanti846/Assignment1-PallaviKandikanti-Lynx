# Lynx React Storefront

A modern React-based e-commerce storefront that fetches products and categories from the Lynx API. Built with React 18 and proper component architecture.

## Features

- 🛍️ **Product Display**: Beautiful grid layout showcasing all products
- 📂 **Category Browsing**: Browse products by categories
- 🎨 **Modern UI**: Responsive design with smooth animations
- ⚡ **Fast Loading**: Optimized API calls with loading states
- 📱 **Mobile Friendly**: Fully responsive design
- 🧩 **Component Architecture**: Properly structured React components

## API Integration

This React app connects to the Lynx backend API endpoints:
- `/api/products` - Fetches all products
- `/api/categories` - Fetches all categories

## Project Structure

```
react-storefront/
├── public/
│   └── index.html              # React app template
├── src/
│   ├── components/             # React components
│   │   ├── Header.js          # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.js            # Hero section
│   │   ├── Hero.css
│   │   ├── CategoriesSection.js # Categories display
│   │   ├── CategoriesSection.css
│   │   ├── ProductsSection.js   # Products grid
│   │   ├── ProductsSection.css
│   │   ├── ProductCard.js      # Individual product card
│   │   ├── ProductCard.css
│   │   ├── Footer.js           # Footer component
│   │   └── Footer.css
│   ├── App.js                  # Main application component
│   ├── App.css                 # App-specific styles
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies and scripts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Sufficient disk space for npm dependencies

### Installation

1. **Install dependencies** (when disk space is available):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view it in the browser.

### Building for Production

```bash
npm run build
```

## Components

- **App**: Main application component with state management and API calls
- **Header**: Navigation header with logo and menu
- **Hero**: Hero section with promotional content
- **CategoriesSection**: Displays product categories in a grid
- **ProductsSection**: Displays all products in a responsive grid
- **ProductCard**: Individual product display component with hover effects
- **Footer**: Application footer

## API Configuration

The app is configured to make API calls to `https://assignment1-pallavikandikanti-lynx.onrender.com`. The API endpoints are:
- `https://assignment1-pallavikandikanti-lynx.onrender.com/api/products`
- `https://assignment1-pallavikandikanti-lynx.onrender.com/api/categories`

## Styling

The application uses modern CSS with:
- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS transitions for smooth animations
- Mobile-first responsive design
- Gradient backgrounds and modern color scheme
- Component-scoped CSS files

## Dependencies

- React 18
- React DOM 18
- Axios for API calls
- React Scripts for build tooling
- Testing libraries (Jest, React Testing Library)

## Technologies Used

- React 18 with Hooks (useState, useEffect)
- Axios for HTTP requests
- Modern CSS (Grid, Flexbox, Transitions)
- Create React App for build tooling
- Component-based architecture

## Current Status

⚠️ **Note**: The React app structure is complete, but npm dependencies cannot be installed due to insufficient disk space. Once disk space is available, run `npm install` to install dependencies and then `npm start` to run the development server.

## Features Implemented

✅ Complete React component structure  
✅ API integration with deployed backend  
✅ Responsive design with modern CSS  
✅ Loading and error states  
✅ Component-scoped styling  
✅ Mobile-friendly layout  
✅ Hover effects and animations  

The React app is ready to run once dependencies are installed!


