import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectComponent from "./RedirectComponent";
import links from "./links.json";

const router = createBrowserRouter([
  {
    path: "/",
    index : true,
    element: (
      <div>
        <h1>Welcome to the Redirect App</h1>
        <span>[Created By Mostafa 😊]</span>
      </div>
    ),
  },
  {
    path: "/redirect",
    element: <RedirectComponent url={links.REDIRECT} />,
  },
  {
    path: "/unsub-adv",
    element: <RedirectComponent url={links.UNSUB_ADV} />,
  },
  {
    path: "/opt-down",
    element: <RedirectComponent url={links.OPTDOWN} />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
