import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Login";
import Register from "../pages/Register";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "regi",
    element: <Register />,
  },
  {
    path: "admi",
    element: <Dashboard />,
  },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
