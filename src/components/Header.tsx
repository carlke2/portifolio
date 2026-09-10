import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          <span>{personalInfo.status}</span>
        </div>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a className="btn btn-primary" href={`mailto:${personalInfo.email}`}>
          Say hello
        </a>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--bg);
          border-bottom: 1px solid var(--border);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 16px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          background: transparent;
          white-space: nowrap;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--dot);
          display: inline-block;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          transition: color 0.15s ease;
        }

        .nav-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 820px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
