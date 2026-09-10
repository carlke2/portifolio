import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <div className="hero-role">{personalInfo.role}</div>
          <p className="hero-bio">{personalInfo.bio}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://github.com/carlKe2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a className="btn btn-secondary" href="#work">
              View Work ↓
            </a>
          </div>
        </div>

        <div className="social-list">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="social-pill"
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span>{social.label}</span>
              <span className="social-arrow">{social.handle}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(40px, 6.5vw, 68px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 16px;
        }

        .hero-role {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .hero-bio {
          font-size: 17px;
          line-height: 1.65;
          color: var(--muted);
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-size: 14px;
          color: var(--text);
          background: transparent;
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .social-pill:hover {
          background-color: var(--accent-soft);
          border-color: var(--accent);
        }

        .social-arrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          transition: color 0.15s ease;
        }

        .social-pill:hover .social-arrow {
          color: var(--accent);
        }

        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 520px) {
          .hero-name {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};
