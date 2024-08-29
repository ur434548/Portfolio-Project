import React from "react";
import ProjectComponent from "../components/ProjectComponent";
export default function AddProjects() {
  return (
    <div>
      <ProjectComponent title="Add Project" 
        ProjectTitle="Project Title"
        ProjectSubTitle="Project Sub Title"
        Description="Description"
        Stack="Stack"
        Technologies="Technologies Used In This Project"
        Github="Github Repositoy Link"
        ProjectLink="Project Link"
        ProjectImages="Project Images"
        text="Add Project"
      />
    </div>
  );
}
