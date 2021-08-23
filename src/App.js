import "./App.css";
import FeatureSection from "./components/feature-section/FeatureSection.component";
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import HeroSection from "./components/hero-section/HeroSection.component";
import ProductiveSection from "./components/productive-section/ProductiveSection.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductiveSection />
      <Footer />
    </div>
  );
}

export default App;
