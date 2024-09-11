import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Working from "./components/Working";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Working />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
