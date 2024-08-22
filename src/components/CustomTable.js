import React from "react";

import Button from "./Button";

const CustomTable = ({
  className,
  data,

  subtitle,
  stack,
  title,
  action,
  icons,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mx-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  uppercase font-bold py-5">Projects</h1>
        <Button text="Add Projects" className="h-10 rounded-2xl " />
      </div>

      <div className="overflow-x-auto">
        <table className={`min-w-full bg-white ${className}`}>
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-3 text-left text-xs sm:text-sm md:text-base font-lg text-black bg-slate-100 tracking-wider">
                {subtitle}
              </th>
              <th className="py-3 px-3 text-left text-xs sm:text-sm md:text-base font-lg text-black bg-slate-100 tracking-wider">
                {stack}
              </th>
              <th className="py-3 px-3 text-left text-xs sm:text-sm md:text-base font-lg text-black bg-slate-100 tracking-wider">
                {title}
              </th>
              <th className="py-3 px-3 text-left text-xs sm:text-sm md:text-base font-lg text-black bg-slate-100 tracking-wider">
                {action}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-3  text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  {item.title}
                </td>
                <td className="py-4 px-3  text-xs sm:text-sm md:text-base text-gray-500">
                  {item.subtitle}
                </td>
                <td className="py-4 px-3  text-xs sm:text-sm md:text-base text-gray-500">
                  {item.stack}
                </td>
                <td className="py-4 px-3  text-xs sm:text-sm md:text-base font-medium text-indigo-600 flex gap-2">
                  {item.icons}
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
