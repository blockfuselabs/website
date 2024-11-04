import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Auth from './components/Auth';

//Import Pages
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
           {/* Main content */}
           <main className="p-4">
            <Routes>
              <Route path="auth" element={<Auth />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
