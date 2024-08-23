import React from "react";
import CustomTable from "../components/CustomTable";
import { RiEditLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export default function Projects() {
  const data = [
    {
      id: 1,
      firstColVal: "Title 1",
      secondColVal: "Subtitle 1",
      thirdColVal: "Stack 1",
    },
  
  ];
  const icons = [<FaRegEdit key="edit" size={18} />, <RiEditLine key="editLine" size={20} />, <MdDeleteOutline key="delete" size={21}/>];
  const colWidths = {
    title1: "20%",     
    title2: "40%", 
    title3: "24%",     
    action: "14%",   
  };

  return (
    <div>
      <CustomTable
        data={data}
        title1="Title"
        title2="Subtitle"
        title3="Stack"
        action="Actions"
        icons={icons}
        Buttontext="Add Projects"
        tableHeading="Projects"
        colWidths={colWidths}
        showButton={true}
      />
    </div>
  );
}
