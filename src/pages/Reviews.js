import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import navProfilePic from "../assets/images/navProfilePic.jpg";
import { useNavigate } from 'react-router-dom'

export default function Reviews() {
  const navigate=useNavigate();
  const handleClick=()=>{
      navigate("Update-Reviews")
  }

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
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id:2,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
    {
      id: 3,
      firstColVal: (
        <div className="flex gap-3 items-center">
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            React Js
        </div>
      ),
      secondColVal: "lorem  jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;sadfsadlf",
      
    },
  ]);
  const icons = [
    { icon: <FaRegEdit size={18} />, onClick: handleEdit },
   
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];

  const colWidths = {
    title1: "10%",
    title2: "80%",
    action: "10%",
  };
  return (
    <div>
      <CustomTable
        data={data}
        title1="Name"
        title2="Review"
        action="Actions"
        icons={icons}
        onClick={handleClick}
        Buttontext="Add Client Reviews"
        tableHeading="Client Reviews"
        colWidths={colWidths}
        showButton={true}
        showImage={true}
      />
    </div>
  );
}
