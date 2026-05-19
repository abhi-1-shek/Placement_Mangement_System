import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getPageTitle = () => {
    const titles = {
      '/dashboard': 'Dashboard',
      '/students': 'Candidates',
      '/companies': 'Companies',
      '/placements': 'Placements'
    };
    return titles[location.pathname] || 'HireHub';
  };

  const getPageIcon = () => {
    const icons = {
      '/dashboard': '📊',
      '/students': '👥',
      '/companies': '🏢',
      '/placements': '🎯'
    };
    return icons[location.pathname] || '🚀';
  };

  const getCurrentPage = () => {
    const pages = {
      '/dashboard': 'Overview',
      '/students': 'Candidates',
      '/companies': 'Companies',
      '/placements': 'Placements'
    };
    return pages[location.pathname] || '';
  };

  return (
    <header className="header-horizontal">
      <div className="page-info">
        <span className="page-icon">{getPageIcon()}</span>
        <div>
          <h1>{getPageTitle()}</h1>
          <div className="breadcrumb">
            <Link to="/dashboard" className="breadcrumb-link">Home</Link>
            <span className="separator">/</span>
            <span className="current">{getCurrentPage()}</span>
          </div>
        </div>
      </div>
      
      <div className="header-actions">
        <div className="datetime">
          <div className="time">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="date">{currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
        </div>
        <div className="nav-user">
          <div className="user-avatar">ABC</div>
          <div className="user-info">
            <span className="user-name">ABC</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;