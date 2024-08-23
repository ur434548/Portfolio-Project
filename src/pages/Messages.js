import React from "react";
import CustomTable from "../components/CustomTable";
import { MdDeleteOutline } from "react-icons/md";

export default function Messages() {
  const data = [
    {
      id: 1,
      firstColVal: "Usman Rehman",
      secondColVal: "03484649565",
      thirdColVal: "Job for react Js",
      fourthColVal: "Hello Usman, You are Shortlisted For React js post",
    },
  ];
  const icons = [<MdDeleteOutline key="delete" size={21}  className="text-right"/>];
  const colWidths = {
    title1: "12%",
    title2: "12%",
    title3: "12%",
    title4: "54%",
    action: "10%",
  };

  return (
    <div>
      <CustomTable
        data={data}
        title1="Sender"
        title2="Phone"
        title3="Subject"
        title4="Messages"
        action="Actions"
        icons={icons}
        tableHeading="Messages"
        colWidths={colWidths}
        showButton={false}
      />
    </div>
  );
}
