# Viktok Le - Portfolio & Blog

A modern, fully-featured portfolio and blog website built with Next.js 15, TypeScript, and Tailwind CSS.

## 👤 About

**Le Vu Quoc Viet (Viktok Le)**  
Fullstack Developer | HCMC, Vietnam

Specializing in React, Laravel, and modern web development technologies.

## 🚀 Tech Stack

- **Frontend**: React 19, Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Features**: Dark mode, Static Site Generation (SSG), SEO optimized

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home/Portfolio page
│   │   ├── blogs/
│   │   │   ├── page.tsx          # Blog list
│   │   │   └── [slug]/page.tsx   # Individual blog posts
│   │   ├── _components/          # Reusable components
│   │   │   ├── hero-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── theme-switcher.tsx
│   │   └── layout.tsx
│   ├── interfaces/               # TypeScript interfaces
│   └── lib/                      # Core utilities
│       ├── api.ts                # Blog post API
│       ├── constants.ts          # Site configuration
│       └── markdownToHtml.ts     # Markdown parser
├── _posts/                       # Blog posts (Markdown)
└── public/                       # Static assets
```

## 🛠️ Skills & Technologies

### Programming Languages
- PHP
- JavaScript
- TypeScript
- HTML
- CSS

### Frameworks & Libraries
- React
- React Native
- Laravel
- Next.js
- Tailwind CSS

### Tools & Technologies
- React Query
- SQL
- Docker
- CI/CD
- RESTful API
- Git

## 📝 Features

### Home Page (Portfolio)
- **Hero Section**: Introduction and CTA
- **Skills Section**: Organized by categories
- **Work Experience**: Professional timeline
- **Education**: Academic background
- **Services**: Offered services
- **Contact**: Social links and email

### Blog
- **Blog List**: All blog posts with featured hero post
- **Blog Details**: Full blog post with syntax highlighting
- **Dark Mode**: System/dark/light theme switcher
- **SEO**: Dynamic metadata for each page

### Navigation
- **Header**: Logo (home) + Blogs link
- **Footer**: Quick links, contact info, social media

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-blogs
```

2. Install dependencies
```bash
yarn install
# or
npm install
```

3. Run development server
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
yarn build
yarn start
```

## 📄 Adding Blog Posts

Create a new `.md` file in `_posts/` directory:

```markdown
---
title: "Your Blog Post Title"
excerpt: "Short description of your post"
coverImage: "/assets/blog/your-post/cover.jpg"
date: "2026-02-25T10:00:00.000Z"
author:
  name: Viktok Le
  picture: "/assets/blog/authors/viktok.jpeg"
ogImage:
  url: "/assets/blog/your-post/cover.jpg"
---

Your blog content here...
```

The post will be automatically picked up and rendered.

## 🎨 Customization

### Site Configuration
Edit `src/lib/constants.ts`:
```typescript
export const SITE_NAME = "Your Name";
export const SITE_DESCRIPTION = "Your Description";
// ... more constants
```

### Styling
- Tailwind config: `tailwind.config.ts`
- Global styles: `src/app/globals.css`

### Content
- Update sections in `src/app/_components/`
- Modify experience, education, skills data

## 📱 Responsive Design

Fully responsive layout optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🌓 Dark Mode

Three-state theme switcher:
- System (follows OS preference)
- Dark mode
- Light mode

Preferences saved in localStorage.

## 🔍 SEO

- Dynamic meta tags for each page
- OpenGraph images for social sharing
- Semantic HTML structure
- Sitemap generation (SSG)

## 📦 Deployment

### Vercel (Recommended)
```bash
# One-click deploy
vercel
```

### Other Platforms
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📧 Contact

- **Email**: viktokle@example.com
- **GitHub**: [github.com/viktokle](https://github.com/viktokle)
- **LinkedIn**: [linkedin.com/in/viktokle](https://linkedin.com/in/viktokle)

## 📝 License

This project is private and for portfolio purposes.

## 🙏 Acknowledgments

Built with [Next.js Blog Starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) as foundation.

---

**Built with ❤️ by Viktok Le**
