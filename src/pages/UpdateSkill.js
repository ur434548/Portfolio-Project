import React from "react";
import InputComponent from "../components/InputComponent";

export default function UpdateSkill() {
  return (
    <div>
      <InputComponent
        formTitle="Update Your Skill"
        titleLabel=" Title"
        proficiencyLabel="Proficiency"
        descriptionLabel="Description"
        svgLabel="Svg Skill Icon"
        text="Save Skill"
        showProject={false}
        showPic={true}
        company={true}
      />
    </div>
  );
}
