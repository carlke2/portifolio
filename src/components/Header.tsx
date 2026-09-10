import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container nav">
        <div className="nav-left">
          <img
            className="nav-logo"
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
          />
          <div className="status">
            <span className="dot" aria-hidden="true" />
            {personalInfo.status}
          </div>
        </div>

        <nav className="links nav-mobile-hide" aria-label="Main Navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="cta" href={`mailto:${personalInfo.email}`}>
          Say hello
        </a>
      </div>

      <style>{`
        header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(250, 250, 248, 0.88);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .nav-logo {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--border);
          flex-shrink: 0;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 12px 6px 10px;
          white-space: nowrap;
        }

        .status .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--dot);
          box-shadow: 0 0 0 3px rgba(59, 122, 87, 0.15);
        }

        nav.links {
          display: flex;
          gap: 28px;
          font-size: 14px;
        }

        nav.links a {
          text-decoration: none;
          color: var(--text);
          transition: color 0.15s ease;
        }

        nav.links a:hover {
          color: var(--accent);
        }

        .cta {
          background: var(--text);
          color: var(--bg);
          border: none;
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.15s ease;
        }

        .cta:hover {
          background: var(--accent);
        }

        .nav-mobile-hide {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        @media (max-width: 820px) {
          nav.links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
