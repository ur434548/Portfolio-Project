import { useState } from "react";
import CustomTable from "../components/CustomTable";
import { MdDeleteOutline } from "react-icons/md";

export default function Messages() {
 

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
  
    { icon: <MdDeleteOutline size={21} />, onClick: handleDelete },
  ];

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
