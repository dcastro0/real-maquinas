import { Toaster } from "sonner";
import { SEO } from "./components/SEO";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Stats } from "./sections/Stats";
import { Catalog } from "./sections/Catalog";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-bg-default text-text-primary font-sans antialiased selection:bg-brand-primary selection:text-white transition-colors duration-300 relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-grid-pattern" />

      <SEO
        title="Catálogo de Estruturas Agrícolas e Navais"
        description="Fabricação própria de balsas, flutuantes, cocheiras, porteiras e maquinário agrícola. Qualidade e durabilidade em aço desde 2000 em Unaí-MG."
      />
      <Toaster position="top-center" richColors />
      
      <Navbar />
      <FloatingWhatsApp />
      <ScrollToTop />

      <Hero />
      <Features />
      <Stats />
      <Catalog />
      <About />
      <Footer />
    </div>
  );
}

export default App;