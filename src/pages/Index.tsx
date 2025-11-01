import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import Events from "@/components/Events";
import Courses from "@/components/Courses";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="explore">
          <ExploreSection />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>;
};
export default Index;