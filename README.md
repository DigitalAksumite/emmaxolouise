# Emma xolouise - Personal Website

A beautiful, responsive personal website for Emma xolouise - a content creator sharing productivity, lifestyle, fashion, and motivation content.

![Emma xolouise](public/images/emma.jpg)

## ✨ Features

- **🏠 Homepage** - Stunning hero section with animated elements and social links
- **📹 Videos Page** - Infinite scroll video gallery with YouTube integration
- **📸 Photos Page** - Masonry grid photo gallery with lightbox viewer
- **ℹ️ About Page** - Personal bio, stats, and social connections
- **📱 Fully Responsive** - Perfect on mobile, tablet, and desktop
- **🔍 SEO Optimized** - JSON-LD structured data, Open Graph, sitemap, robots.txt
- **⚡ Fast Performance** - Static export for optimal loading speeds
- **🎨 Beautiful Design** - Pink theme with smooth animations and hover effects

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Static Export (GitHub Pages / Netlify / Vercel)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DigitalAksumite/emmaxolouise.git
cd emmaxolouise
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your YouTube API key to .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Building for Production

```bash
npm run build
```

This generates a static export in the `dist/` folder, ready for deployment.

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to your main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Next.js
3. Build command: `npm run build`

## 📁 Project Structure

```
├── public/
│   ├── images/           # Static images
│   ├── photos/           # Photo gallery images
│   ├── favicon.svg       # Site favicon
│   ├── robots.txt        # SEO robots file
│   └── site.webmanifest  # PWA manifest
├── src/
│   ├── app/
│   │   ├── (routes)/     # Page routes
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── about/        # About page
│   │   │   ├── photos/       # Photos page
│   │   │   └── videos/       # Videos page
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   ├── globals.css   # Global styles
│   │   └── sitemap.ts    # Dynamic sitemap
│   ├── components/       # React components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── latest-videos.tsx
│   │   ├── videos-feed.tsx
│   │   ├── photos-page-client.tsx
│   │   └── json-ld.tsx
│   └── lib/              # Utilities
│       ├── site-config.ts
│       ├── schema.ts
│       └── youtube.ts
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json
```

## 🔧 Configuration

### Site Config (`src/lib/site-config.ts`)
Update site metadata, URLs, and social links:

```typescript
export const siteConfig = {
  name: "emma xolouise",
  url: "https://emmaxolouise.com",
  // ... other config
}
```

### YouTube API
Create a `.env.local` file with:
```
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_CHANNEL_ID=your_channel_id_here
```

## 📝 SEO Features

- **Meta Tags** - Optimized titles and descriptions for each page
- **Open Graph** - Social sharing previews (Facebook, Twitter, LinkedIn)
- **JSON-LD** - Structured data for search engines
- **Sitemap** - Auto-generated sitemap.xml
- **Robots.txt** - Search engine crawler directives
- **Web Manifest** - PWA support

## 🎨 Design System

- **Primary Color:** `#fb7185` (Pink)
- **Secondary Color:** `#c4b5fd` (Purple)
- **Text Dark:** `#292524`
- **Text Muted:** `#78716c`
- **Background:** `#fafaf9`

## 📄 License

This project is private and proprietary.

## 💝 Credits

- Website by [Digital Aksumite](https://github.com/DigitalAksumite)
- Content by [Emma xolouise](https://youtube.com/@emmaxolouise)

---

Made with 💕 for Emma
