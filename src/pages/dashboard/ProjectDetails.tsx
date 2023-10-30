// import { Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { Project } from './Project'; // Import the Project interface from its file


// // ProjectDetails.tsx - Define the 'ProjectDetails' interface
// interface ProjectDetails {
//   id: number;
//   name: string;
//   initiationDate: string;
//   proposalDueDate: string;
//   piStartDate: string;
//   acStartDate: string;
//   cdDetails: string;
//   lessonsLearned: string;
//   code: string;
//   priority: {
//     id: number;
//     name: string;
//     code: string;
//   };
//   projectStatus: {
//     id: number;
//     name: string;
//   };
//   statusHistoryList: Array<{
//     id: number;
//     date: string;
//     description: string | null;
//   }>;
// }

// type ProjectOrDetails = Project | ProjectDetails;

// const ProjectDetails: React.FC<{
//   selectedProject: ProjectDetails | null;
//   isSelected: boolean;
// }> = ({ selectedProject, isSelected }) => {
//   const [projectData, setProjectData] = useState<ProjectDetails | null>(null);

//   const fetchData = async (projectId: number) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/v1/project/${projectId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setProjectData(data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedProject) {
//       fetchData(selectedProject.id);
//     }
//   }, [selectedProject]);

//   return (
//     <div className="dashboard">
//       {projectData ? (
//         <div>
//           <h2 style={{ color: isSelected ? 'white' : 'black' }}>{projectData.name}</h2>
//           <div className="project-info">
//             <div className="section">
//               <h3>Basic Information</h3>
//               <p>Project ID: {projectData.id}</p>
//               <p>Initiation Date: {projectData.initiationDate}</p>
//               <p>Proposal Due Date: {projectData.proposalDueDate}</p>
//               <p>PI Start Date: {projectData.piStartDate}</p>
//               <p>AC Start Date: {projectData.acStartDate}</p>
//             </div>
//             <div className="section">
//               <h3>Code and Priority</h3>
//               <p>Code: {projectData.code}</p>
//               <p>Priority: {projectData.priority.name}</p>
//             </div>
//           </div>
//           <div className="section">
//             <h3>Project Status</h3>
//             <p>Status: {projectData.projectStatus.name}</p>
//           </div>
//           <div className="section">
//             <h3>Status History</h3>
//             <ul>
//               {projectData.statusHistoryList.map((status: { date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: any; }, index: React.Key | null | undefined) => (
//                 <li key={index}>
//                   Date: {status.date}, Description: {status.description || 'N/A'}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Add more sections for other data as needed */}
//         </div>
//       ) : (
//         <Typography variant="h4" style={{ color: isSelected ? 'white' : 'black' }}>No project selected.</Typography>
//       )}
//     </div>
//   );
// };

// export default ProjectDetails;
