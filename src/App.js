import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "../src/pages/Projects";
import Dashboard from "../src/pages/Dashboard";
import RootLayout from "./pages/RootLayout";
import ErrorElement from "./pages/ErrorElement";
import Skills from "./pages/Skills";
import Messages from "./pages/Messages";
import EducationHistory from "./pages/EducationHistory";
import Experience from "./pages/Experience";
import Reviews from "./pages/Reviews";
import UpdateSkill from "./pages/UpdateSkill";
import UpdateEducationalHistory from "./pages/UpdateEducationalHistory";
import UpdateExperience from "./pages/UpdateExperience";
import UpdateClientReviews from "./pages/UpdateClientReviews";
import AddProjects from "./pages/AddProjects";
import "./App.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Projects/Add-Project",
        element: <AddProjects />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Skills/Update-Skill",
        element: <UpdateSkill />,
      },

      {
        path: "/Messages",
        element: <Messages />,
      },
      {
        path: "/EducationHistory",
        element: <EducationHistory />,
      },
      {
        path: "/EducationHistory/Update-Educational-History",
        element: <UpdateEducationalHistory />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Experience/Update-Experience",
        element: <UpdateExperience />,
      },
      {
        path: "/Reviews",
        element: <Reviews />,
      },
      {
        path: "/Reviews/Update-Reviews",
        element: <UpdateClientReviews />,
      },
    ],
  },
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
