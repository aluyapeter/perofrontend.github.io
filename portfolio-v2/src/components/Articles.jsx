import React from 'react';
import { articlesData } from '../data/content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Articles = () => {
  return (
    <section className="articles-section">
      <h2 className="section-title">Writing</h2>

      <div className="articles-list">
        {articlesData.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="article-link"
          >
            <span className="article-title">{article.title}</span>
            <span className="article-arrow">
              Read <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
