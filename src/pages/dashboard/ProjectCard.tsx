import React from 'react';

interface Project {
  id: number;
  projectName: string;
  code: string;
  priority: string;
  todo: string;
  currentStatus: string;
  latestStatusHistoryDate: string;
  color: string;
}

const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
}> = ({ project, onClick }) => {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: 'white', // Set a static background color
        padding: '10px',
        border: '1px solid #ccc',
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <h3>{project.projectName}</h3>
      <p>Code: {project.code}</p>
      <p>Priority: {project.priority}</p>
      <p>Todo: {project.todo}</p>
      <p>Status: {project.currentStatus}</p>
      <p>Latest Status Date: {project.latestStatusHistoryDate}</p>
    </div>
  );
};

export default ProjectCard;
