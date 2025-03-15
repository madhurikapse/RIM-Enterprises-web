import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Product from "./components/Product.js"
import Home from './components/Home.js'
import About from './components/About.js'
import Careers from './components/Careers.js'
import Problems from './components/Problems.js'
import Services from './components/Services.js'
import Industries from './components/Industries.js'
import Feature from "./pages/Feature.js";
import OurSucessStories from "./pages/OurSucessStories.js";
import SucessPage from "./pages/SucessPage.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <Feature/>
      <OurSucessStories/>
      <Routes>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/success" element={<SucessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
