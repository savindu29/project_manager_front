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
});

interface Project {
  id: number;
  projectName: string;
  code: string;
  priority: string;
  todo: string;
  currentStatus: string;
  latestStatusHistoryDate: string;
  color: string; // Add a color property
}

function getRandomColor() {
  // Generate a random light color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/project/list?page=1&size=11')
      .then((response) => {
        const data: Project[] = response.data.data;
        // Assign unique colors to each project
        const projectsWithColors = data.map((project) => ({
          ...project,
          color: getRandomColor(),
        }));
        setProjects(projectsWithColors);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  return (
    <DashboardContainer className="dashboard">
      <Sidebar className="sidebar">
        {/* Content for the sidebar */}
      </Sidebar>
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
      <ProjectDetails selectedProject={selectedProject} isSelected={!!selectedProject} />
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
        background: isSelected ? project.color : '#f5f5f5', // Use project color when selected
        padding: '16px',
        borderRadius: '10px',
        boxShadow: isSelected ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <CardContent>
        <div>
          <Typography variant="h5" component="div">
            <span style={{ color: 'black' }}>Project Name:</span> <span style={{ color: '#007bff' }}>{project.projectName}</span>
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
}> = ({ selectedProject, isSelected }) => (
  <div className="projectDetails" style={{ background: isSelected ? selectedProject?.color : 'white' }}>
    {selectedProject ? (
      <div>
        <Typography variant="h4" style={{ color: isSelected ? 'white' : 'black' }}>
          Project ID: {selectedProject.id}
        </Typography>
        <p style={{ color: isSelected ? 'white' : 'black' }}>{selectedProject.todo}</p>
      </div>
    ) : (
      <div>
        <Typography variant="h4" style={{ color: isSelected ? 'white' : 'black' }}>No project selected.</Typography>
      </div>
    )}
  </div>
);

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Dashboard;
