// src/CustomTable.js
import React from "react";
import { RiEditLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const CustomTable = ({ data, onClick, className }) => {
  return (
    <div className="bg-gray-50 mt-16">
        <h1>Projects</h1>

    
    <table className={` w-screen mt-20  rounded-l6 ${className}`}>
      <thead className="bg-gray-50 p-10">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-lg text-black bg-slate-100  tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-sm font-lg text-black bg-slate-100  tracking-wider">
            Stack
          </th>
          <th className="px-6 py-3 text-left text-sm font-lg text-black bg-slate-100  tracking-wider">
            Subtitle
          </th>
          <th className="px-6 py-3 text-left text-sm font-lg text-black bg-slate-100  tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
              {item.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.subtitle}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.stack}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onClick(item)}
                className="text-indigo-600 flex gap-2"
              >
                <FaRegEdit size={17} />

                <RiEditLine size={19} />
                <MdDeleteOutline size={19} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CustomTable;
