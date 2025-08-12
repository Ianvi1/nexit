// src/App.tsx
import React from "react";
import "./styles/globals.css";
import DigitalSolution from "./sections/DigitalSolution/DigitalSolution";
import Header from "./components/layout/Header/header";
import AboutNexit from "./sections/About/About";
import ServicesSection from "./sections/ServiceSection/Services";
import PlayVideo from "./sections/About/Video";
import StrategySection from "./sections/OurServices/OurServices";
import TalkSection from "./sections/Brand/TalktoUs";
import Footer from "./components/layout/Footer/footer";
import Work from "./sections/Brand/HowWeWork";
import "./styles/fonts.css";
import { SearchProvider } from "./components/layout/Header/SearchProvider";
import SearchModal from "./components/layout/Header/SearchModal";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <SearchProvider>
      <Header />
      <DigitalSolution />
      <AboutNexit />
      <ServicesSection />
      <PlayVideo />
      <Work />
      <StrategySection />
      <TalkSection />
      <Footer />
      <SearchModal/>
            </SearchProvider>
    </div>
  );
};

export default App;
