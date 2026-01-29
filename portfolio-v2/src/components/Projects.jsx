import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/content';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Side quests</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
