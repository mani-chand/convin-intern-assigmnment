import Home from "./Pages/Home";
import Cards from "./Pages/Cards";
import Edit from "./Pages/Edit";
import React from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/cards",
      element: <Cards/>,
    },
    {
      path: "/edit",
      element: <Edit/>,
    },
  ]);
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
