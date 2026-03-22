import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsAbout from "@/components/StatsAbout";
import AboutFounder from "@/components/AboutFounder";
import VideoShowcase from "@/components/VideoShowcase";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsAbout />
        <AboutFounder />
        <VideoShowcase />
        <Curriculum />
        <Pricing />
        <Testimonials />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}
