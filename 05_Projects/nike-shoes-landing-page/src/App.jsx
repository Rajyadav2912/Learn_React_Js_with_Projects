import "./App.css";
import NavBar from "./Components/Nav";
import HeroSection from "./Components/Hero";
import Contact from "./Components/Contact";
import ContactForm from "./Components/ContactForm";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <main className="main_container">
        <Contact />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
