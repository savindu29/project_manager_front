// api.js (mock data fetching)
export const fetchProjects = () => {
    return new Promise((resolve) => {
      // Simulate fetching data from your database
      setTimeout(() => {
        const data = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
        resolve(data);
      }, 1000); // Simulate a 1-second delay
    });
  };
  