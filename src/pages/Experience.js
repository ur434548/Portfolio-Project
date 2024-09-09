import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Experience() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Update-Experience");
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
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
    {
      id: 1,
      firstColVal: "HTML",
      secondColVal: "80%",
      thirdColVal:
        "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
      fourthColVal: "lorem ",
      fifthColVal: "lorem ",
      sixColVal: "lorem ",
    },
  ]);
  const icons = [
    { icon: <FaRegEdit size={18} />, onClick: handleEdit },
   
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];

  const colWidths = {
    title1: "10%",
    title2: "11%",
    title3: "36%",
    title4: "25%",
    title5: "6%",
    title6: "6%",
    action: "6%",
  };
  return (
    <div>
      <CustomTable
        data={data}
        title1="Title"
        title2="Company"
        title3="Description"
        title4="Projects"
        title5="From"
        title6="To"
        action="Actions"
        icons={icons}
        Buttontext="Add Experience"
        tableHeading="Experience"
        colWidths={colWidths}
        showButton={true}
        onClick={handleClick}
      />
    </div>
  );
}
