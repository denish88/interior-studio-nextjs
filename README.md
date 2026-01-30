# Orix Design Studio

A dark luxury minimal website for **Orix Design Studio** — interior design studio with a premium, architectural feel. Built with Next.js 16, Tailwind CSS 4, and Framer Motion.

## Features

- **Dark luxury theme**: Pure black (#000000), off-white text (#EDEDED), gold accent (#C9A24D)
- **Typography**: Playfair Display (headings), Inter (body)
- **Homepage**: Hero, About, Services, Featured Projects, Process, Testimonials, Contact
- **Pages**: Home, About, Services, Projects (all / residential / commercial), Contact, Journal
- **Micro-interactions**: Smooth scroll animations, hover effects, custom cursor (desktop), sticky nav with transparent → solid on scroll
- **Production-ready**: Static/SSG where possible, metadata, semantic HTML

## Project Structure

```
app/
  layout.tsx          # Root layout (fonts, Navbar, Footer, CustomCursor)
  page.tsx            # Home (all sections)
  globals.css         # Theme tokens
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  journal/page.tsx
  journal/[slug]/page.tsx
  projects/page.tsx
  projects/residential/page.tsx
  projects/commercial/page.tsx
  projects/[slug]/page.tsx   # Case study
components/
  Navbar.tsx
  Footer.tsx
  CustomCursor.tsx
  Hero.tsx
  AboutSection.tsx
  ServicesSection.tsx
  ProjectsSection.tsx
  ProcessSection.tsx
  TestimonialsSection.tsx
  ContactSection.tsx
  ContactForm.tsx
lib/
  data.ts             # Site copy, projects, services, testimonials, etc.
```

## Customizing Content

- **Site info & copy**: Edit `lib/data.ts` — `site`, `navLinks`, `services`, `aboutContent`, `processSteps`, `testimonials`, `featuredProjects`, `allProjects`, `journalPosts`.
- **Images**: Replace Unsplash URLs in `lib/data.ts` and in components (Hero, About) with your own. Add your domain to `next.config.ts` → `images.remotePatterns` if hosting elsewhere.
- **Contact form**: `components/ContactForm.tsx` currently simulates submit. Wire it to your API (e.g. Formspree, Resend, or your backend).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- TypeScript
