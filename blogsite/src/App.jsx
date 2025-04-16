import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./components/BlogPostDetail";

function App() {
  return (
    <HelmetProvider>
      <div className="App text-white flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
