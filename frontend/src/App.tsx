
import './App.css';
import ProjectPage from './pages/ProjectPage';
import DonatePage from './pages/DonatePage';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import AdminProjectsPage from './pages/AdminProjectsPage';

function App() {
  
  
  
  return (
    <>
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/donate/:projectName/:projectId" element={<DonatePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/adminprojects" element={<AdminProjectsPage />} />
      </Routes>
    </Router>
    </CartProvider>
    
    
    </>
  );
}

export default App
