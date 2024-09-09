import React from "react";
import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { useNavigate } from "react-router-dom";
import { RiEditLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export default function Projects() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Add-Project");
  };
  const handleEdit = () => {
    console.log("Edit icon clicked");
  };

  const handleEditLine = () => {
    console.log("Edit Line icon clicked");
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const [data, setData] = useState([
    {
      id: 1,
      firstColVal: "Title 1",
      secondColVal: "Subtitle 1",
      thirdColVal: "Stack 1",
    },
    {
      id: 2,
      firstColVal: "Title 2",
      secondColVal: "Subtitle 2",
      thirdColVal: "Stack 2",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
    {
      id: 3,
      firstColVal: "Title 3",
      secondColVal: "Subtitle 3",
      thirdColVal: "Stack 3",
    },
  ]);

  const icons = [
    { icon: <FaRegEdit size={18} />, onClick: handleEdit },
    { icon: <RiEditLine size={20} />, onClick: handleEditLine },
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];

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
        onClick={handleClick}
      />
    </div>
  );
}
