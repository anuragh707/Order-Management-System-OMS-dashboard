import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import OrderDetailsPage from './pages/OrderDetailsPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left fixed ERP Sidebar */}
        <Sidebar />
        
        {/* Main content body with Top Header + Grid */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          
          <Routes>
            {/* Redirect root page to the targeted mock Order ID */}
            <Route path="/" element={<Navigate to="/order/OD-1591" replace />} />
            <Route path="/order/:id" element={<OrderDetailsPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/order/OD-1591" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
