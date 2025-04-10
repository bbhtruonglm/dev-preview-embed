import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
