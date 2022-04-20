import "./App.css";
import AboutUs from "./Components/AboutUs.js/AboutUs";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main.js";
import Projects from "./Components/Projects/Projects";
import Values from "./Components/Values/Values";

function App() {
  return (
    <div className="App">
      <Main />
      <Projects />
      <AboutUs />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
