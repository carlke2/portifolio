import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="section hero-wrap">
      <div className="container">
        <h1 className="hero-name">{personalInfo.name}</h1>
        <div className="hero-role">{personalInfo.role}</div>

        <div className="hero-grid">
          <div>
            <p className="hero-desc">{personalInfo.bio}</p>
            <div className="hero-actions">
              <a
                className="btn-primary"
                href="https://github.com/carlKe2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub →
              </a>
              <a className="btn-ghost" href="#work">
                See the work
              </a>
            </div>
          </div>

          <div className="hero-photo-cell">
            <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="var(--wave)"
                d="M20,150 C60,90 120,210 160,150 C200,90 260,210 300,150 C300,230 250,300 160,300 C70,300 20,230 20,150 Z"
              />
            </svg>
            <img
              className="hero-photo"
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
            />
          </div>

          <div className="socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="social-row"
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>{social.label}</span>
                <span className="arrow">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-wrap {
          padding: 88px 0 64px;
        }

        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(48px, 9vw, 104px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 0.98;
          color: var(--text);
        }

        .hero-role {
          margin-top: 22px;
          font-size: 15px;
          color: var(--accent);
          font-family: 'IBM Plex Mono', monospace;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 0.85fr;
          gap: 32px;
          margin-top: 36px;
          align-items: center;
        }

        .hero-photo-cell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 260px;
        }

        .hero-photo-cell svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          opacity: 0.32;
          z-index: 0;
        }

        .hero-photo {
          position: relative;
          z-index: 1;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--bg);
          box-shadow: 0 0 0 1px var(--border);
        }

        .hero-desc {
          font-size: 18px;
          color: #3A3A34;
          max-width: 44ch;
          line-height: 1.6;
        }

        .hero-actions {
          margin-top: 28px;
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

        .socials {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 11px 18px;
          text-decoration: none;
          color: var(--text);
          font-size: 14px;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }

        .social-row:hover {
          border-color: var(--accent);
          background: var(--accent-soft);
        }

        .social-row span.arrow {
          color: var(--muted);
          font-size: 13px;
          font-family: 'IBM Plex Mono', monospace;
        }

        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .hero-photo-cell {
            order: -1;
            height: 200px;
          }

          .hero-photo-cell svg {
            width: 240px;
            height: 240px;
          }

          .hero-photo {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
};
