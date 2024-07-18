import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Gallery from "./components/Gallery/Gallery";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Founders from "./components/Founders/Founders"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Achievements from "./components/Achievements/Achievements";

import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <About />
      <Achievements/>
      <Value />
      <Gallery/>

      <Residencies />
      <Contact />
      <Founders />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
