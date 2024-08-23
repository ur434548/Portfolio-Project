import React from "react";
import CustomTable from "../components/CustomTable";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import navProfilePic from "../assets/images/navProfilePic.jpg";

export default function Reviews() {
  const data = [
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
  ];
  const icons = [
    <FaRegEdit key="edit" size={18} />,
    <MdDeleteOutline key="delete" size={21} />,
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
        Buttontext="Add Client Reviews"
        tableHeading="Client Reviews"
        colWidths={colWidths}
        showButton={true}
        showImage={true}
      />
    </div>
  );
}
