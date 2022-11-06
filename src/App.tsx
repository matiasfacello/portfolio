import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import "./App.css";
import ReactGA from "react-ga";
ReactGA.initialize("G-GQ08BR7J6F");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
