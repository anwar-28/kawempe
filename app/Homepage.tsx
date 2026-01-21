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

const Homepage = () => {
  return (
    <div className="bg-[url(/bg3.jpg)] bg-fixed bg-cover  ">
      <NavBar />
      <Hero />
      <SectionAbout />
      <HeadMsg />
      <Mission />
      <Vision />
      <CoreValues />
      <Leader />
      <QuickActions />
      <EventsSection />
      <WempianSection />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Homepage;
