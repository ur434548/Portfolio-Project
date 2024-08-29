import React from "react";
import { GrLinkPrevious } from "react-icons/gr";

import Button from "./Button";

const CustomTable = ({
  className,
  data,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  action,
  Buttontext,
  icons = [],
  tableHeading,
  colWidths,
  showButton,
  onClick
}) => {
  return (
    <div className="bg-white shadow-md  rounded-2xl p-4 mx-3 h-[50.6rem]">
      <div className="flex justify-between items-center flex-col md:flex-row  mb-2">
        <h1 className="text-2xl uppercase font-600 py-5">{tableHeading}</h1>
        {showButton ? (
          <Button
            text={Buttontext}
            onClick={onClick}
            className="h-10 px-5 rounded-2xl mt-4 md:mt-0"
          />
        ) : (
          <GrLinkPrevious size={20} className="mr-[5px] mt-4 md:mt-0" />
        )}
      </div>

      <div className="max-h-[707px] overflow-y-auto">
        <table className={`container bg-white ${className}`}>
          <thead className="bg-slate-100 sticky top-0 font-normal	 text-slate-700	">
            <tr>
              <th
                style={{ width: colWidths.title1 }}
                className="py-3 px-3  text-left  text-xs sm:text-sm md:text-base 		 tracking-wider"
              >
                {title1}
              </th>
              <th
                style={{ width: colWidths.title2 }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg tracking-wider"
              >
                {title2}
              </th>
              <th
                style={{ width: colWidths.title3 }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg tracking-wider"
              >
                {title3}
              </th>
              <th
                style={{ width: colWidths.title4 }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg tracking-wider"
              >
                {title4}
              </th>
              <th
                style={{ width: colWidths.title5 }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg bg-slate-100 tracking-wider"
              >
                {title5}
              </th>
              <th
                style={{ width: colWidths.title6 }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg  bg-slate-100 tracking-wider"
              >
                {title6}
              </th>
              <th
                style={{ width: colWidths.action }}
                className="py-3 px-3 text-left  text-xs sm:text-sm md:text-base font-lg bg-slate-100 tracking-wider"
              >
                {action}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200 p-2">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base font-medium text-gray-500">
                  {item.firstColVal}
                </td>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base text-gray-500">
                  {item.secondColVal}
                </td>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base text-gray-500">
                  {item.thirdColVal}
                </td>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base text-gray-500">
                  {item.fourthColVal}
                </td>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base text-gray-500">
                  {item.fifthColVal}
                </td>
                <td className="py-4 px-3 text-xs h-auto sm:text-sm md:text-base text-gray-500">
                  {item.sixColVal}
                </td>

                <td className="py-6 px-5 text-xs sm:text-sm items-center content-center cursor-pointer md:text-base font-medium text-indigo-600 flex  gap-2">
                  {icons.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
