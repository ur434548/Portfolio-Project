import React from "react";
import InputComponent from "../components/InputComponent";
export default function UpdateClientReviews() {
  return (
    <div>
      <InputComponent
        formTitle="Update Client Review"
        titleLabel=" Name"
        descriptionLabel="Review"
        proficiencyLabel="Company"
        svgLabel="Reviewer image"
        text="Update Client Review"
        EndLabel="Ending Point (To)"
        selectProjects="Select Projects"
        showPic={true}
        showProject={false}
        company={false}
      />
    </div>
  );
}
