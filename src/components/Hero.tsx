import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="section hero-wrap">
      <div className="container">
        <div className="hero-stage">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <div className="hero-photo-wrap">
            <svg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="var(--wave)"
                d="M20,170 C60,100 130,230 170,170 C210,100 280,230 320,170 C320,260 260,330 170,330 C80,330 20,260 20,170 Z"
              />
            </svg>
            <img
              className="hero-photo"
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
            />
          </div>
        </div>

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
          padding: 64px 0 64px;
        }

        .hero-stage {
          position: relative;
        }

        .hero-name {
          position: relative;
          z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(48px, 9vw, 104px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 0.98;
          color: var(--text);
        }

        .hero-photo-wrap {
          position: absolute;
          right: 6%;
          bottom: -86px;
          width: 280px;
          z-index: 2;
        }

        .hero-photo-wrap svg {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 340px;
          height: 340px;
          opacity: 0.35;
          z-index: 0;
        }

        .hero-photo {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg);
          box-shadow: 0 16px 36px rgba(20, 20, 15, 0.16);
        }

        .hero-role {
          position: relative;
          z-index: 1;
          margin-top: 118px;
          font-size: 15px;
          color: var(--accent);
          font-family: 'IBM Plex Mono', monospace;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 32px;
          margin-top: 24px;
          align-items: start;
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
          }

          .hero-photo-wrap {
            position: static;
            width: 170px;
            margin: 24px auto 0;
          }

          .hero-photo-wrap svg {
            width: 220px;
            height: 220px;
            top: -20px;
            left: -20px;
          }

          .hero-role {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
};
