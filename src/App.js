import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <AboutUs/>
      <Contact />
    </div>
  );
}

export default App;
