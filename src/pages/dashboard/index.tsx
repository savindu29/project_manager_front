import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './dashboard.css';

const DashboardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 2.6fr',
  gridTemplateAreas: `
    'sidebar projectList projectDetails'
  `,
  height: '100vh',
});

const Sidebar = styled('div')({
  gridArea: 'sidebar',
  padding: '16px',
  overflowY: 'auto',
  background: '#ffffff',
  borderRight: '1px solid #f1f1f1',
});

const ProjectList = styled('div')({
  gridArea: 'projectList',
  padding: '8px 16px 16px 16px',
  overflowY: 'auto',
  background: '#ffffff',
  borderRight: '0px solid #f1f1f1',
  marginLeft: '-76px',
  marginTop: '22px',
});
const LightGray = '#696969';
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
interface ProjectData {
  id: number;
  name: string;
  initiationDate: string;
  proposalDueDate: string;
  piStartDate: string;
  acStartDate: string;
  cdDetails: string;
  lessonsLearned: string;
  code: string;
  priority: {
    id: number;
    name: string;
    code: string;
  };
  projectStatus: {
    id: number;
    name: string;
  };
  statusHistoryList: Array<{
    id: number;
    date: string;
    description: string | null;
  }>;
}

const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/project/list?page=1&size=11')
      .then((response) => {
        const data: Project[] = response.data.data;
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  return (
    <DashboardContainer className="dashboard">
    <ProjectDetails selectedProject={selectedProject} isSelected={!!selectedProject} />
    <ProjectList className="projectList">
      <div>
        {Array.isArray(projects) &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              isSelected={selectedProject === project}
            />
          ))}
      </div>
    </ProjectList>
    <Sidebar className="sidebar">
      {/* Content for the sidebar */}
    </Sidebar>
  </DashboardContainer>
  
  
  );
};

const ProjectCard: React.FC<{
  project: Project;
  onClick: (project: Project) => void;
  isSelected: boolean;
}> = ({ project, onClick, isSelected }) => (
  <Box sx={{ minWidth: 275, maxWidth: 300, margin: '7px' }}>
    <Card
      variant="outlined"
      onClick={() => onClick(project)}
      sx={{
        background: isSelected ? LightGray : '#f5f5f5', 
        padding: '16px',
        borderRadius: '10px',
        boxShadow: isSelected ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        maxHeight: '198px',
      }}
    >
      <CardContent sx={{ margin: 0, padding: 0 }}>
        <div>
          <Typography variant="h5" component="div">
            <span style={{ color: 'black' }}>Project Name:<br></br></span> <span style={{ color: '#007bff' }}>{project.projectName}</span>
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: 'black' }}>Code:</span> <span style={{ color: '#007bff' }}>{project.code}</span>
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: 'black' }}>Priority:</span> <span style={{ color: '#007bff' }}>{project.priority}</span>
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: 'black' }}>To-Do:</span> <span style={{ color: '#007bff' }}>{project.todo}</span>
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: 'black' }}>Status:</span> <span style={{ color: '#007bff' }}>{project.currentStatus}</span>
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ color: 'black' }}>Latest Status Date:</span> <span style={{ color: '#007bff' }}>{formatDate(project.latestStatusHistoryDate)}</span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Box>
);
const ProjectDetails: React.FC<{
  selectedProject: Project | null;
  isSelected: boolean;
}> = ({ selectedProject, isSelected }) => {
  const [projectData, setProjectData] = useState<null | ProjectData>(null);

  useEffect(() => {
    // Fetch project data from the API when selectedProject changes
    if (selectedProject) {
      fetch(`http://localhost:8000/api/v1/project/${selectedProject.id}`)
        .then((response) => response.json())
        .then((data) => setProjectData(data.data))
        .catch((error) => console.error('Error fetching project data:', error));
    } else {
      setProjectData(null);
    }
  }, [selectedProject]);
  return (
    <div className="dashboard-container">
      {projectData ? (
        <div className="project-details">
          <div className="project-details-column">
            <div className="project-header">
              <h2>{projectData.name}</h2>
            </div>
            <div className="info-card">
              <h3>Basic Information</h3>
              <div className="info-list">
                <p>Project ID: {projectData.id}</p>
                <p>Initiation Date: {formatDate(projectData.initiationDate)}</p>
                <p>Proposal Due Date: {formatDate(projectData.proposalDueDate)}</p>
                <p>PI Start Date: {formatDate(projectData.piStartDate)}</p>
                <p>AC Start Date: {formatDate(projectData.acStartDate)}</p>
              </div>
            </div>
          </div>
          <div className="project-details-column">
            <div className="info-card">
              <h3>Code and Priority</h3>
              <div className="info-list">
                <p>Code: {projectData.code}</p>
                <p>Priority: {projectData.priority.name}</p>
              </div>
            </div>
            <div className="status-history-card">
              <h3>Project Status</h3>
              <div className="info-list">
                <p>Status: {projectData.projectStatus.name}</p>
              </div>
            </div>
            <div className="status-history-card">
              <h3>Status History</h3>
              <ul className="status-history-list">
                {projectData.statusHistoryList.map((status, index) => (
                  <li key={index}>
                    Date: <span className="status-date">{formatDate(status.date)}</span>, Description: {status.description || 'N/A'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-project-selected">
          <h4>No project selected.</h4>
        </div>
      )}
    </div>
  );
};

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Dashboard;