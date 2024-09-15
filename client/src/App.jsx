import Homepage from "../pages/Login";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  }
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
