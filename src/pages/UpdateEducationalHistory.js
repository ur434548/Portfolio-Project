import React from "react";
import InputComponent from "../components/InputComponent";

export default function UpdateEducationalHistory() {
  return (
    <div>
      <InputComponent
        formTitle="Update Educational History"
        titleLabel=" Title"
        proficiencyLabel="Institute"
        descriptionLabel="Description"
        svgLabel="Starting Point (From)"
        EndLabel="Ending Point (To)"
        text="Update Educational History"
        showPic={false}
        showProject={false}
        company={true}
      />
    </div>
  );
}
