import React from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export default function Skills() {
  const data = [
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal: "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
    },
  ];
  const icons = [<FaRegEdit key="edit" size={18} />,  <MdDeleteOutline key="delete" size={21}/>];
  const colWidths = {
    title1: "10%",     
    title2: "5%", 
    title3: "75%",     
    action: "10%",   
  };

  return (
    <div>
      <CustomTable
        data={data}
        title1="Title"
        title2="Proficiency"
        title3="Description"
        action="Actions"
        icons={icons}
        Buttontext="Add Skill"
        tableHeading="Skills"
        colWidths={colWidths}
        showButton={true}
      />
    </div>
  );
}
