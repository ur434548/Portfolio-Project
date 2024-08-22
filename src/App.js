import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "../src/pages/Projects"
import Dashboard from "../src/pages/Dashboard";
import RootLayout from "./pages/RootLayout";
import ErrorElement from "./pages/ErrorElement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />,
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
