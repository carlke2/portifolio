import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="footer-headline">{personalInfo.ctaHeadline}</h2>
        <div className="footer-actions">
          <a className="btn btn-primary" href={`mailto:${personalInfo.email}`}>
            Email me →
          </a>
          <a
            className="btn btn-secondary"
            href="https://linkedin.com/in/salat-caleb-kipkemoi-3b3875341"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="bottom-bar">
          <span>{personalInfo.location}</span>
          <div className="bottom-links">
            <a
              href="https://github.com/carlKe2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/salat-caleb-kipkemoi-3b3875341"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 88px 0 48px;
        }

        .footer-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text);
          max-width: 640px;
          margin-bottom: 32px;
        }

        .footer-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 72px;
        }

        .bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          font-size: 13px;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .bottom-links a {
          color: var(--muted);
          transition: color 0.15s ease;
        }

        .bottom-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 520px) {
          .footer {
            padding: 60px 0 40px;
          }

          .footer-headline {
            font-size: 28px;
          }

          .bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
