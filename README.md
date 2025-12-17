# Tabata Vitorino - Personal Website

A professional website for Tabata Vitorino, Olympic athlete and nutrition specialist, built with Eleventy and SCSS.

## Features

- Static site generation with Eleventy
- SCSS for styling with organized partials
- Responsive design
- Design implemented from Figma
- Modern CSS with custom properties

## Project Structure

```
tabata/
├── src/
│   ├── _includes/        # Layout templates
│   │   └── base.html     # Base HTML template
│   ├── assets/           # Static assets
│   │   └── images/       # Image files
│   ├── scss/            # SCSS stylesheets
│   │   ├── _variables.scss   # CSS custom properties and variables
│   │   ├── _reset.scss       # CSS reset
│   │   ├── _components.scss  # Component styles
│   │   ├── _layout.scss      # Layout styles
│   │   └── main.scss        # Main SCSS entry point
│   └── index.html       # Main page
├── _site/               # Generated site (built files)
├── .eleventy.js         # Eleventy configuration
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Build

Build the site for production:
```bash
npm run build
```

The built site will be in the `_site/` directory.

## Design

The design was implemented from Figma using the following color scheme:

- **Primary Purple** (`--t01`): `#bdadff`
- **Primary Blue** (`--t02`): `#4f6ecc`
- **Light Blue** (`--t03`): `#80bde5`
- **Light Green** (`--t04`): `#defca6`
- **Dark Gray** (`--t05`): `#404040`
- **Light Gray** (`--t06`): `#e5e5e5`

## Typography

- **Pragmatica Extended**: Primary font for body text and headings
- **Viktorie**: Display font for special headings

## Sections

1. **Header** - Navigation and logo
2. **Hero** - Main banner with tagline
3. **About** - Introduction and background
4. **Why Choose Me** - Benefits and services
5. **Method** - Process and approach
6. **Results** - Transformations gallery
7. **Testimonials** - Client stories
8. **Consultation** - Call to action
9. **Contact** - Contact information

## License

All rights reserved.
