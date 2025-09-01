




import Navbar from "./components/Navbar";
import { WhySection, Programs, Features, ParentHub} from "./components/Sections";
import kids from "./assets/kids-meditation.png"
import Hero from "./components/Hero";
import PricingPlans from "./components/Pricing";
import WhyChooseSection from "./components/Compare";
import ParentTeacherHub from "./components/Parents";
import FamiliesSay from "./components/reviews";
import FAQSection from "./components/FAQ";
// import ParentTeacherHub from "./components/Parents";

import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />

      {/* Hero / Home Section */}
   <Hero/>
      {/* Other sections */}
      <WhySection />
      <Programs />
      <Features />
      <WhyChooseSection />
      <PricingPlans/>
      <ParentTeacherHub />
      <FamiliesSay/>
      <FAQSection/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
