import React from 'react';
import { stackDomains } from '../data/portfolioData';

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="section">
      <div className="container">
        <h2 className="section-title">Stack</h2>
        <div className="stack-grid">
          {stackDomains.map((domain) => (
            <div key={domain.title} className="stack-col">
              <h3 className="stack-col-title">{domain.title}</h3>
              <ul className="stack-col-list">
                {domain.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .stack-col-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }

        .stack-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stack-col-list li {
          font-size: 14.5px;
          color: var(--muted);
        }

        @media (max-width: 820px) {
          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
};
