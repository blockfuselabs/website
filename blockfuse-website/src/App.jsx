import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Auth from "./components/Auth"

// Import Pages
import Hero from "./pages/Hero"
import AboutUs from "./pages/AboutUs"
import Team from "./pages/Team"
import Alumni from "./pages/Alumni"
import Bootcamp from "./pages/bootcamp/Bootcamp"
import Testimonial from "./pages/Testimonial"
import Blog from "./pages/Blog"
import BlogPostDetail from "./components/BlogDetail"
import Events from "./pages/Events"
import OpenSource from "./pages/OpenSource"
import ContactUs from "./pages/ContactUs"

import { ThemeProvider } from './context/ThemeContext';

function App() {


  return (
    <ThemeProvider>
    <Router>
    <div className="App noise dark:bg-[#131316] bg-[#fafafa] flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home*" element={<Hero />} />

          {/* About Us */}
          <Route path="/about-us/*" element={<AboutUs />} />

          {/* Team */}
          <Route path="/team/*" element={<Team />} />

          {/* Alumni */}
          <Route path="/alumni*" element={<Alumni />} />

          {/* Testimonials */}
          <Route path="/testimonial/*" element={<Testimonial />} />

          {/* Events */}
          <Route path="/events/*" element={<Events />} />

          {/* Open Source */}
          <Route path="/opensource/*" element={<OpenSource />} />

          {/* Blog */}
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />

          {/* Boot Camp */}
          <Route path="/bootcamp/*" element={<Bootcamp />} />

          {/* Contact Us */}
          <Route path="/contact-us/*" element={<ContactUs />} />

          {/* Sign up  */}
          <Route path="/auth/*" element={<Auth />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
  </ThemeProvider>
  )
}

export default App
