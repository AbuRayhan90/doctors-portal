import AppointmentSection from "./AppointmentSection";
import Cards from "./Cards";
import Heroarea from "./Heroarea";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Heroarea />
      <Cards />
      <Services />
      <AppointmentSection />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
