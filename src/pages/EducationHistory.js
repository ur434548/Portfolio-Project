import React from 'react'
import CustomTable from '../components/CustomTable'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export default function EducationHistory() {
    const data = [
        {
          id: 1,
          firstColVal: "HTML",
          secondColVal: "80%",
          thirdColVal: "lorem jlhdfkljsdhyfwe89fbsdknmfhbsadfhyweadfsadkjfsadbufsgfsdfsdhfosdfsd.fhsdifo;",
          fourthColVal: "lorem ",
          fifthColVal: "lorem ",
        },
      ];
      const icons = [<FaRegEdit key="edit" size={18} />,  <MdDeleteOutline key="delete" size={21}/>];
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
      />
    </div>
  )
}
