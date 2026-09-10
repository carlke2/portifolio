import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="container">
        <h2 className="contact-head">{personalInfo.ctaHeadline}</h2>
        <div className="hero-actions">
          <a className="btn-primary" href={`mailto:${personalInfo.email}`}>
            Email me →
          </a>
          <a
            className="btn-ghost"
            href="https://www.linkedin.com/in/salat-caleb-kipkemoi-3b3875341/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="foot-bottom">
          <span>{personalInfo.location}</span>
          <div className="foot-links">
            <a
              href="https://github.com/carlKe2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/salat-caleb-kipkemoi-3b3875341/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </div>

      <style>{`
        footer {
          padding: 72px 0 48px;
        }

        .contact-head {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(34px, 5vw, 54px);
          font-weight: 600;
          max-width: 14ch;
          margin-bottom: 28px;
          line-height: 1.15;
          color: var(--text);
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--text);
          color: var(--bg);
          padding: 13px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.15s ease;
        }

        .btn-primary:hover {
          background: var(--accent);
        }

        .btn-ghost {
          border: 1px solid var(--border);
          padding: 13px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }

        .btn-ghost:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .foot-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          font-size: 13px;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 12px;
        }

        .foot-links {
          display: flex;
          gap: 20px;
        }

        .foot-links a {
          text-decoration: none;
          color: var(--muted);
          transition: color 0.15s ease;
        }

        .foot-links a:hover {
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
};
