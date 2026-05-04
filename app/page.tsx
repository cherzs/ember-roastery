import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import RoastingProcess from "@/components/roasting-process"
import FeaturedCoffee from "@/components/featured-coffee"
import BrewExperience from "@/components/brew-experience"
import Testimonials from "@/components/testimonials"
import LocationHours from "@/components/location-hours"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <RoastingProcess />
      <FeaturedCoffee />
      <BrewExperience />
      <Testimonials />
      <LocationHours />
      <FinalCTA />
      <Footer />
    </main>
  )
}
