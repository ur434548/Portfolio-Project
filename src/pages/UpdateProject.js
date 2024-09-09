
import React from 'react';

function UpdateProject() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">UPDATE PROJECT</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Project Title */}
        <div>
          <label className="block text-gray-700">Project Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="On Board Diagnostic (OBDX)"
          />
        </div>

        {/* Project Sub Title */}
        <div>
          <label className="block text-gray-700">Project Sub Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Vehicle Tracking, OBDX Monitoring & Inventory Management System"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-700">Description</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="A web-based system that integrates tracking and on-board diagnostics (OBD) for monitoring and managing vehicle data..."
          ></textarea>
        </div>

        {/* Technologies Used In This Project */}
        <div>
          <label className="block text-gray-700">Technologies Used In This Project</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="React Js with Redux, Web Sockets, Google Maps"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-gray-700">Responsibilities</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Integration of Google map to represent vehicle routing, latest location and geofencing..."
          ></textarea>
        </div>

        {/* Stack */}
        <div>
          <label className="block text-gray-700">Stack</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="React Js on Front end and Dot Net on Back end"
          />
        </div>

        {/* GitHub Repository Link */}
        <div>
          <label className="block text-gray-700">GitHub Repository Link</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Github Repository Link"
          />
        </div>

        {/* Project Link */}
        <div>
          <label className="block text-gray-700">Project Link</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="https://pkdservers.com/OBDX"
          />
        </div>
      </div>

      {/* Project Images Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Project Images</h2>
        <div className="grid grid-cols-3 gap-4">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="border p-4 flex flex-col items-center">
              <div className="h-24 w-full bg-gray-200 mb-4"></div>
              <button className="text-blue-500">Update this photo</button>
              <p className="mt-2 text-sm text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Update Project
        </button>
      </div>
    </div>
  );
}

export default UpdateProject;
