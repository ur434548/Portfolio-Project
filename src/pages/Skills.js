import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Skills() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Update-Skill");
  };
  const handleEdit = () => {
    console.log("Edit icon clicked");
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
    
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];
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
        onClick={handleClick}
        Buttontext="Add Skill"
        tableHeading="Skills"
        colWidths={colWidths}
        showButton={true}
        
      />
    </div>
  );
}
