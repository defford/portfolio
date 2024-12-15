import React from 'react';

const Project = ({ name, description, repository }) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={repository} target="_blank">View Project</a>
    </div>
  );
};

export default Project;