import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function EducationHistory() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Update-Educational-History");
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
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
    },
  ]);
  const icons = [
    { icon: <FaRegEdit size={18} />, onClick: handleEdit },
   
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];

  const colWidths = {
    title1: "15%",
    title2: "11%",
    title3: "50%",
    title4: "8%",
    title5: "8%",
    action: "8%",
  };
  return (
    <div>
      <CustomTable
        data={data}
        title1="Title"
        title2="Institute"
        title3="Description"
        title4="From"
        title5="To"
        action="Actions"
        icons={icons}
        Buttontext="Add Educational History"
        tableHeading="Educational History"
        colWidths={colWidths}
        showButton={true}
        onClick={handleClick}
      />
    </div>
  );
}
