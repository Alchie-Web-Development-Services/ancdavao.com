import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import StoriesImpact from "./pages/StoriesImpact";
import NewsEvents from "./pages/NewsEvents";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import FAQ from "./pages/FAQ";
import Event from "./pages/Event";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/stories-impact" element={<StoriesImpact />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/events" element={<Event />} />
              <Route path="/causes" element={<Causes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
