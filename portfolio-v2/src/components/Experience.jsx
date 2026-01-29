import React from 'react';
import { experienceData } from '../data/content';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experienceData.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-content">
              <h3 className="role">{job.role}</h3>
              <div className="company">{job.company}</div>
              <p className="description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
