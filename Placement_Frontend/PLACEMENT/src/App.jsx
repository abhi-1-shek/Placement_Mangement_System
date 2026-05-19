import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/Dashboard';
import StudentsPage from './pages/StudentsPage';
import CompaniesPage from './pages/CompaniesPage';
import PlacementsPage from './pages/PlacementsPage';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="initial-loader">
        <div className="loader-content">
          <div className="loader-logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">HireHub</span>
          </div>
          <div className="loader-spinner"></div>
          <p>Loading talent acquisition platform...</p>
          <div className="loader-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;