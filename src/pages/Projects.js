import React from "react";
import CustomTable from "../components/CustomTable";
import { RiEditLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export default function Projects() {
  const icons = [FaRegEdit, RiEditLine, MdDeleteOutline];

  const data = [
    {
      id: "1",
      title: "Project 1",
      subtitle: "Description 1",
      stack: "React, Tailwind",
    },
    {
      id: "2",
      title: "Project 2",
      subtitle: "Description 3",
      stack: "React, Tailwind",
    },
  ];
  
  return (
    <div>
      <CustomTable
        data={data}
        subtitle="Subtitle"
        stack="Stack"
        title="Title"
        action="Actions"
        icons={icons}
      />
    </div>
  );
}
