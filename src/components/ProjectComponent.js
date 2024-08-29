import React from "react";
import Button from "./Button";

const AddProjects = ({
  title = "ADD PROJECT",
  ProjectSubTitle = "Project Sub Title",
  Description = "Description",
  ProjectTitle = "Project Title",
  Stack = "Stack",
  Technologies = "Technologies Used In This Project",
  Github = "Github Repository Link",
  ProjectLink = "Project Link",
  ProjectImages = "Project Images",
  text = "ADD PROJECT",
  Responsibilites = "Responsibilites",
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mx-3 h-[50.6rem]">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {ProjectTitle}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Societal"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {ProjectSubTitle}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Property management System"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {Description}
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md h-28"
              placeholder="Description."
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {Technologies}
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md h-28"
              placeholder="Html, Css, Js, React"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">{Stack}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Mern"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">{Github}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Github Repository Link"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              {ProjectLink}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Project Link"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {Responsibilites}
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md h-24"
              placeholder="Responsibilities."
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              {ProjectImages}
            </label>
            <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex justify-center items-center">
              <div className="text-center">
                <p className="text-sm">Upload a file</p>
                <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <input
              type="text"
              className="mt-3 w-full px-3 py-2 border rounded-md"
              placeholder="Short description of image"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            text={text}
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
