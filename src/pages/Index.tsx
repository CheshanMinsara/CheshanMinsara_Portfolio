import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cheshan | ICT Undergraduate & Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Cheshan, an ICT undergraduate at SLIIT passionate about web development and coding. Explore my projects and skills."
        />
        <meta
          name="keywords"
          content="Cheshan, Web Developer, ICT, SLIIT, Portfolio, React, JavaScript"
        />
        <link rel="canonical" href="https://cheshan.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
