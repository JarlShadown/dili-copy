import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <Header />

      <Hero />

      <ValueProp />

      <FeatureSection
        title="Simple Desde El Día Uno"
        description="Nuestra plataforma está diseñada para que empieces a vender y gestionar tu negocio inmediatamente. Sin configuraciones complejas ni manuales interminables."
        features={["Setup en 5 minutos", "Sin curvas de aprendizaje", "Soporte incluido desde el plan gratis"]}
        imageSrc="/Placeholder Image.jpg"
      />

      <FeatureSection
        title="Tu Aliado Confiable"
        description="Funciona sin internet. Nunca pierdes una venta. Tus datos están seguros y siempre disponibles."
        features={["Modo offline real (no fake).", "Sincronización automática.", "Datos encriptados y seguros."]}
        reversed={true}
        imageSrc="/Placeholder Image-1.jpg"
      />

      <FeatureSection
        title="Reportes que sí entiendes"
        description="Olvídate de hojas de Excel confusas. Te mostramos en números claros y gráficas simples cómo va tu negocio."
        features={["Reportes visuales en segundos.", "Compara periodos fácilmente.", "Exporta a PDF con un click."]}
        imageSrc="/Placeholder Image-2.jpg"
      />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CtaSection />

      <Footer />
    </main>
  );
}
