import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ValueProp } from "@/components/value-prop"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AuthoritySection } from "@/components/authority-section"
import { TeamSection } from "@/components/team-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <ValueProp />
      <ServicesSection />
      <TestimonialsSection />
      <AuthoritySection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
