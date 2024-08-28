import React from "react";
import InputComponent from "../components/InputComponent";

export default function UpdateSkill() {
  const handleUpdateSkill = (skillData) => {
    console.log("Updated skill data:", skillData);
  };

  return (
    <div>
      <div className="p-8">
        <InputComponent
          formTitle="Update Your Skill"
          titleLabel="Skill Title"
          proficiencyLabel="Proficiency Level"
          descriptionLabel="Skill Description"
          svgLabel="Upload Skill Icon"
          buttonLabel="Save Skill"
          initialTitle="HTML"
          initialProficiency="80"
          initialDescription="Skilled in creating structured and visually appealing web pages using HTML."
          onUpdateSkill={handleUpdateSkill}
        />
      </div>
    </div>
  );
}
