import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Own Dependencies
import "./assets/css/variables.css";
import "./assets/css/utilities.css";
import "./assets/css/global.css";
import "./assets/css/header.css";
import Root from "./routes/Root";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
