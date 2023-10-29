import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./dashboard.css";
import axios from "axios";

interface Project {
  id: number;
  projectName: string;
  code: string;
  priority: string;
  todo: string;
  currentStatus: string;
  latestStatusHistoryDate: string;
}

const DashboardContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 2.6fr",
  gridTemplateAreas: `
    "projectList projectDetails"
  `,
  height: "100vh",
});

const ProjectList = styled("div")({
  gridArea: "projectList",
  padding: "16px",
  overflowY: "auto",
  background: "#ffffff",
  borderRight: "1px solid #f1f1f1",
});

const ProjectCard: React.FC<{
  project: Project;
  onClick: (project: Project) => void;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
}> = ({ project, onClick, selectedColor, setSelectedColor }) => (
  <Box sx={{ minWidth: 275, maxWidth: 300, margin: "7px" }}>
    <Card
      variant="outlined"
      onClick={() => {
        onClick(project);
        setSelectedColor(project.currentStatus);
      }}
      style={{
        backgroundColor: selectedColor === project.currentStatus ? project.currentStatus : "white",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {project.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.todo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Priority: {project.priority}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {project.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {project.currentStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latest Status Date: {project.latestStatusHistoryDate}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);


const ProjectDetails: React.FC<{
  selectedProject: Project | null;
  selectedColor: string | null;
}> = ({ selectedProject, selectedColor }) => (
  <div className="projectDetails" style={{ backgroundColor: selectedColor || "transparent" }}>
    {selectedProject ? (
      <div>
        <Typography variant="h4">{selectedProject.projectName}</Typography>
        <p>{selectedProject.todo}</p>
      </div>
    ) : (
      <div>
        <Typography variant="h4">No project selected.</Typography>
      </div>
    )}
  </div>
);

const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/project/list?page=1&size=11")
      .then((response) => {
        console.log("API Response:", response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
return(
  <DashboardContainer className="dashboard">
  <ProjectList className="projectList">
    <div>
      {Array.isArray(projects) ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        ))
      ) : (
        <div>No projects to display.</div>
      )}
    </div>
  </ProjectList>
  <ProjectDetails selectedProject={selectedProject} selectedColor={selectedColor} />
</DashboardContainer>

  );
};

export default Dashboard;
