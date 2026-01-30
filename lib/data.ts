// Orix Design Studio – Dummy content (replace with your own)

export const site = {
  name: "Orix Design Studio",
  tagline: "Crafting Timeless Interior Experiences",
  heroTypingPhrase: "Build your dream into reality.",
  email: "hello@orixdesign.com",
  phone: "+1 (555) 123-4567",
  address: "123 Design District, Suite 400\nYour City, ST 10001",
  social: {
    instagram: "https://instagram.com/orixdesign",
    pinterest: "https://pinterest.com/orixdesign",
    linkedin: "https://linkedin.com/company/orixdesign",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/journal", label: "Journal" },
];

export const services = [
  {
    id: "01",
    title: "Residential Interiors",
    description: "Full-service interior design for homes—from concept to handover.",
  },
  {
    id: "02",
    title: "Commercial Spaces",
    description: "Offices, retail, and hospitality spaces that reflect your brand.",
  },
  {
    id: "03",
    title: "Turnkey Solutions",
    description: "Design, procurement, and project management in one seamless flow.",
  },
  {
    id: "04",
    title: "Custom Furniture",
    description: "Bespoke pieces crafted to fit your space and vision.",
  },
];

export const processSteps = [
  { number: "01", title: "Concept", description: "Understanding your vision and space." },
  { number: "02", title: "Design", description: "Sketches, mood boards, and 3D visualizations." },
  { number: "03", title: "Execution", description: "Procurement, coordination, and on-site management." },
  { number: "04", title: "Handover", description: "Final walkthrough and documentation." },
];

export const testimonials = [
  {
    quote: "Orix transformed our penthouse into a sanctuary. Every detail felt considered and luxurious.",
    author: "Sarah & James Chen",
    project: "Residential — Penthouse",
  },
  {
    quote: "From the first meeting, we knew we were in expert hands. The office now truly represents who we are.",
    author: "Michael Torres",
    project: "Commercial — Headquarters",
  },
  {
    quote: "Timeless, elegant, and perfectly executed. We couldn't be happier.",
    author: "The Rivera Family",
    project: "Residential — Villa",
  },
];

// Placeholder images – Unsplash (interior design). Replace with your own URLs.
const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}`;

export const featuredProjects = [
  {
    slug: "penthouse-river-view",
    title: "Penthouse River View",
    location: "New York, NY",
    address: "450 West 42nd Street, New York, NY 10036",
    category: "Residential",
    image: unsplash("1600607687939-ee8dc71b2b9c"), // interior
    year: "2024",
  },
  {
    slug: "headquarters-tower",
    title: "Headquarters Tower",
    location: "San Francisco, CA",
    address: "535 Mission Street, San Francisco, CA 94105",
    category: "Commercial",
    image: unsplash("1497366216548-37526070297c"),
    year: "2024",
  },
  {
    slug: "villa-mediterranean",
    title: "Villa Mediterranean",
    location: "Los Angeles, CA",
    address: "9200 Sunset Boulevard, West Hollywood, CA 90069",
    category: "Residential",
    image: unsplash("1600585154340-4a5f852ba3b8"),
    year: "2023",
  },
  {
    slug: "boutique-hotel-lobby",
    title: "Boutique Hotel Lobby",
    location: "Miami, FL",
    address: "1200 Ocean Drive, Miami Beach, FL 33139",
    category: "Commercial",
    image: unsplash("1586023492125-27b2c045efd7"),
    year: "2023",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    slug: "loft-industrial",
    title: "Loft Industrial",
    location: "Brooklyn, NY",
    address: "80 Flushing Avenue, Brooklyn, NY 11205",
    category: "Residential",
    image: unsplash("1600566753190-17f0baa2a6c3"),
    year: "2023",
  },
  {
    slug: "restaurant-downtown",
    title: "Restaurant Downtown",
    location: "Chicago, IL",
    address: "108 North State Street, Chicago, IL 60602",
    category: "Commercial",
    image: unsplash("1517248135467-4c7edcad34c4"),
    year: "2023",
  },
];

export const aboutContent = {
  headline: "We believe in spaces that tell a story.",
  paragraph:
    "Orix Design Studio was founded on the idea that great interiors are not just beautiful—they are thoughtful, functional, and deeply personal. From residential penthouses to commercial headquarters, we bring a consistent vision: timeless design, meticulous craft, and a seamless experience from concept to handover.",
  stats: [
    { value: "12+", label: "Years of Experience" },
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  // Images for About section autoslider (replace with your own)
  sliderImages: [
    unsplash("1497366216548-37526070297c", 800),
    unsplash("1600585154340-4a5f852ba3b8", 800),
    unsplash("1600607687939-ee8dc71b2b9c", 800),
    unsplash("1618221195710-dd6b41faaea6", 800),
  ],
};

export const journalPosts = [
  {
    slug: "the-art-of-lighting",
    title: "The Art of Lighting in Interior Design",
    excerpt: "How light shapes mood, space, and experience in residential and commercial projects.",
    image: unsplash("1513694203232-719a280e022f"),
    date: "2024-01-15",
  },
  {
    slug: "material-palettes-2024",
    title: "Material Palettes We're Loving in 2024",
    excerpt: "From warm woods to cool marbles—materials that define the year ahead.",
    image: unsplash("1618221195710-dd6b41faaea6"),
    date: "2024-01-08",
  },
  {
    slug: "small-space-big-impact",
    title: "Small Space, Big Impact",
    excerpt: "Strategies for making compact interiors feel expansive and luxurious.",
    image: unsplash("1600210492486-724fe5c67fb0"),
    date: "2023-12-20",
  },
];
