# Portfolio Website

A modern, responsive portfolio website inspired by Brittany Chiang's design. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimalist design with smooth animations
- 📱 Fully responsive across all devices
- ♿ Accessible and inclusive user experience
- 🚀 Optimized performance with Next.js
- 🌙 Dark theme with slate color palette
- 📝 Sections for About, Experience, Projects, and Blog
- 🔗 Social media integration
- 💨 Fast loading with optimized fonts and images

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Header.tsx` - Name, title, and social links
- `src/components/About.tsx` - Personal bio and description
- `src/components/Experience.tsx` - Work experience and companies
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Blog.tsx` - Blog posts and articles
- `src/app/layout.tsx` - Meta tags and SEO information

### Styling

The website uses Tailwind CSS with a custom color palette:

- Primary: Slate tones
- Accent: Teal
- Background: Dark slate
- Text: Light slate

Customize colors in `src/app/globals.css` and component files.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter
- **Deployment:** Vercel (recommended)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The website can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Design inspired by [Brittany Chiang](https://brittanychiang.com/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
