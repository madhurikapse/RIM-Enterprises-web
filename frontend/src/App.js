import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Product from "./components/Product.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Careers from "./components/Contact.js";
import Problems from "./components/Problems.js";
import Services from "./components/Services.js";
import Industries from "./components/Industries.js";
import Feature from "./pages/Feature.js";
import OurSucessStories from "./pages/OurSucessStories.js";
import SucessPage from "./pages/SucessPage.js";
import Contact from "./components/Contact.js";
import Contact1 from "./pages/Contact1.js"
import Footer from "./components/Footer.js";
import VedioPage from './pages/VedioPage.js'
import "./App.css"
import Overview from "./components/Overview.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><VedioPage/><About /><Services /><Overview/><OurSucessStories /><Contact1/></>} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/success" element={<SucessPage />} />
      </Routes>
      
    <Footer/>
    </Router>
  );
}

export default App;
