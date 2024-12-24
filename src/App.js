import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Header />
      <Hero />
      <Projects />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
