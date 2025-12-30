import { createBrowserRouter } from "react-router";
import AboutClub from "../assets/Componets/AboutClub";
import NotFoundPage from "../assets/Componets/NotFoundPage";
import Home from "../assets/Componets/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "aboutClub",
    element: <AboutClub></AboutClub>
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>
  },
]);



 export default router;