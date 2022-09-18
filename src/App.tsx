import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import "./App.css";

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
