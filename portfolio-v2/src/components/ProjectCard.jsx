import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <div className="folder-icon">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="card-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repo"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <ul className="project-tech-list">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
