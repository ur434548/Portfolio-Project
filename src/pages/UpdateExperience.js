import React from "react";
import InputComponent from "../components/InputComponent";
export default function UpdateExperience() {
  return (
    <div>
      <InputComponent
        formTitle="Update Experience"
        titleLabel=" Title"
        proficiencyLabel="Company"
        descriptionLabel="Description"
        svgLabel="Starting Point (From)"
        EndLabel="Ending Point (To)"
        selectProjects="Select Projects"
        text="Update Experience"
        showPic={false}
        showProject={true}
        company={true}
      />
    </div>
  );
}
