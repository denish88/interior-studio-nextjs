import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Orix Design Studio | Timeless Interior Design",
  description:
    "Crafting timeless interior experiences. Residential and commercial interiors, turnkey solutions, and custom furniture.",
  openGraph: {
    title: "Orix Design Studio | Timeless Interior Design",
    description: "Crafting timeless interior experiences.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
