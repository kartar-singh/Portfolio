import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <title>Kartar Singh - MERN Stack Developer Portfolio</title>
      <meta name="description" content="Kartar Singh is a MERN Stack Developer with 3 years of experience, skilled in MongoDB, Express.js, React, Node.js, Next.js, WordPress, and SEO. Building modern web apps with MERN stack, Next.js, and AWS." />
      <meta property="og:title" content="Kartar Singh - MERN Stack Developer Portfolio" />
      <meta property="og:description" content="Building modern web apps with MERN stack, Next.js, and AWS. 3+ years experience in full-stack development." />
      <meta property="og:type" content="website" />
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
