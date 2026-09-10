import React from 'react';
import { projects } from '../data/portfolioData';

export const Work: React.FC = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Work</h2>
        <div className="work-list">
          {projects.map((proj) => (
            <a
              key={proj.id}
              className="work-item"
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="work-index">{proj.index}</span>
              <div className="work-details">
                <h3 className="work-title">{proj.title}</h3>
                <p className="work-desc">{proj.description}</p>
                <div className="tech-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="work-link">Repo ↗</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .work-list {
          display: flex;
          flex-direction: column;
        }

        .work-item {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          gap: 24px;
          align-items: start;
          padding: 24px 16px;
          margin: 0 -16px;
          border-top: 1px solid var(--border);
          border-radius: var(--radius-hover);
          transition: background-color 0.15s ease;
        }

        .work-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .work-item:hover {
          background-color: var(--accent-soft);
        }

        .work-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          color: var(--muted);
          padding-top: 2px;
        }

        .work-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 6px;
        }

        .work-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--muted);
          margin-bottom: 14px;
          max-width: 620px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 4px;
          background-color: var(--accent-soft);
          color: var(--accent);
          border: 1px solid rgba(61, 90, 128, 0.12);
        }

        .work-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          padding-top: 2px;
          white-space: nowrap;
          transition: color 0.15s ease;
        }

        .work-item:hover .work-link {
          color: var(--accent);
        }

        @media (max-width: 820px) {
          .work-item {
            grid-template-columns: 36px 1fr;
          }

          .work-link {
            grid-column: 2;
            padding-top: 4px;
          }
        }
      `}</style>
    </section>
  );
};
