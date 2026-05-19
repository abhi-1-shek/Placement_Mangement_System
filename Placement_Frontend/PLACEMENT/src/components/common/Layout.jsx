import React from 'react';
import Header from './Header';
import HorizontalNav from './HorizontalNav';

const Layout = ({ children }) => {
  return (
    <div className="app-horizontal">
      <HorizontalNav />
      <div className="main-content-horizontal">
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>© 2026 HireHub — Talent Acquisition Platform</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;