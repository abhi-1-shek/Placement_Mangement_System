import React from 'react';
import { NavLink } from 'react-router-dom';

const HorizontalNav = () => {
  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard'},
    { path: '/students', icon: '👨‍🎓', label: 'Students'},
    { path: '/companies', icon: '🏢', label: 'Companies'},
    { path: '/placements', icon: '💼', label: 'Placements'}
  ];

  return (
    <nav className="horizontal-nav">
      <div className="nav-brand">
        <div className="brand-logo">
          <span className="brand-icon">🎯</span>
          <div className="brand-text">
            <span className="brand-name">PlacementPro</span>
          </div>
        </div>
      </div>
      
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              <span className="nav-icon">{item.icon}</span>
              <div className="nav-text">
                <span className="nav-label">{item.label}</span>
                <span className="nav-desc">{item.description}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <div className="nav-user">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNav;