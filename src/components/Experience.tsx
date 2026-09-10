import React from 'react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-row">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-content">
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-org">{exp.company}</div>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-list {
          display: flex;
          flex-direction: column;
        }

        .exp-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 32px;
          padding: 24px 0;
          border-top: 1px solid var(--border);
        }

        .exp-row:last-child {
          border-bottom: 1px solid var(--border);
        }

        .exp-period {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          padding-top: 2px;
        }

        .exp-role-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
        }

        .exp-org {
          font-size: 14px;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .exp-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 620px;
        }

        @media (max-width: 820px) {
          .exp-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};
