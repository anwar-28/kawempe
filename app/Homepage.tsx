import CoreValues from "./components/CoreValues";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import HeadMsg from "./components/HeadMsg";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Leader from "./components/Leader";
import Mission from "./components/Mission";
import NavBar from "./components/NavBar";
import QuickActions from "./QuickActions";
import SectionAbout from "./components/SectionAbout";
import Vision from "./components/Vision";
import WempianSection from "./components/WempianSection";
import FadeInSection from "./Fade";

const Homepage = () => {
  return (
    <div>
      <FadeInSection delay={1}>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={100}>
        <SectionAbout />
      </FadeInSection>

      <FadeInSection delay={200}>
        <HeadMsg />
      </FadeInSection>

      <FadeInSection delay={300}>
        <Mission />
      </FadeInSection>

      <FadeInSection delay={400}>
        <Vision />
      </FadeInSection>

      <FadeInSection delay={500}>
        <CoreValues />
      </FadeInSection>

      <FadeInSection delay={600}>
        <Leader />
      </FadeInSection>

      <FadeInSection delay={700}>
        <QuickActions />
      </FadeInSection>

      <FadeInSection delay={800}>
        <EventsSection />
      </FadeInSection>

      <FadeInSection delay={900}>
        <WempianSection />
      </FadeInSection>

      <FadeInSection delay={1000}>
        <LatestNews />
      </FadeInSection>

      <FadeInSection delay={1100}>
        <Footer />
      </FadeInSection>
    </div>
  );
};

export default Homepage;
