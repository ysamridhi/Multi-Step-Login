import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles.css";
import { EntryPage, Profile, SignUp, WhoUAre } from "./components";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path:"/whoUAre",
    element: <WhoUAre />,
  },
  {
    path:"/entryPage",
    element:<EntryPage />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
