import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import Login from '../components/Login';

const Layout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="main-layout">
      <nav className="side-nav">
        <ul>
          <li>
            <Link to="/login" className={isActive(Login) ? 'active' : ''}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/db-connection" className={isActive('/db-connection') ? 'active' : ''}>
              DB Connection
            </Link>
          </li>
          <li>
            <Link to="/db-diagram" className={isActive('/db-diagram') ? 'active' : ''}>
              DB Diagram
            </Link>
          </li>
          <li>
            <Link to="/report-selection" className={isActive('/report-selection') ? 'active' : ''}>
              Report Selection
            </Link>
          </li>
          <li>
            <Link to="/sql-generation" className={isActive('/sql-generation') ? 'active' : ''}>
              SQL Generation
            </Link>
          </li>
          <li>
            <Link to="/data-visualization" className={isActive('/data-visualization') ? 'active' : ''}>
              Data Visualization
            </Link>
          </li>
          <li>
            <Link to="/account" className={isActive('/account') ? 'active' : ''}>
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
