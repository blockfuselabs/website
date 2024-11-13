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
import Bootcamp from "./pages/bootcamp/AboutBootcamp"
import Web2 from "./pages/bootcamp/WebTwo"
import Web3 from "./pages/bootcamp/WebThree"
import Testimonial from "./pages/Testimonial"
import Blog from "./pages/Blog"
import BlogPostDetail from "./components/BlogDetail"
import Events from "./pages/Events"
import OpenSource from "./pages/OpenSource"
import ContactUs from "./pages/ContactUs"
import OurAlumni from './pages/OurAlumni';
import TeamDetails from './pages/TeamDetails';
import Donate from './pages/Donate';
import PastEventDetail from './pages/PastEventDetail';

import { ThemeProvider } from './context/ThemeContext';
import ScrollToTopButton, { useScrollToTop } from './components/ScrollToTopButton';


import { Web3Provider } from "./components/WalletConnect/Web3Provider";
import { ConnectKitButton } from "connectkit";



function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Web3Provider>
      <ScrollToTopButton />
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
          <Route path="/teamdetails/:id/*" element={<TeamDetails />} />


          {/* Alumni */}
          <Route path="/alumni*" element={<Alumni />} />
          {/* our Alumni */}
          <Route path="/alumni/:slug*" element={<OurAlumni />} />

          {/* Testimonials */}
          <Route path="/testimonial/*" element={<Testimonial />} />

          {/* Events */}
          <Route path="/events/*" element={<Events />} />
          <Route path="/events/:slug" element={<PastEventDetail />} />

          {/* Open Source */}
          <Route path="/opensource/*" element={<OpenSource />} />

          {/* Blog */}
          <Route path="/blog/*" element={<Blog />} />
          {/* <Route path="/blog/:id" element={<BlogPostDetail />} /> */}
          <Route path="/blog/:slug" element={<BlogPostDetail />} />

          {/* Boot Camp */}
          <Route path="/bootcamp/*" element={<Bootcamp />} />
          <Route path="/web2" element={<Web2 />} />
        <Route path="/web3" element={<Web3 />} />

          {/* Contact Us */}
          <Route path="/contact-us/*" element={<ContactUs />} />

              {/* Donate */}
              <Route path="/donate/*" element={<Donate />} />

          {/* Sign up  */}
          <Route path="/auth/*" element={<Auth />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
     
    </div>
  </Router>
  </Web3Provider>
  </ThemeProvider>
  )
}

export default App
