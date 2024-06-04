import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import IndexLayout from "./pages/Layout/IndexLayout";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/one1",
        element: <PageOne />,
      },
      {
        path: "/two",
        element: <PageTwo />,
      },
      {
        path: "/three",
        element: <PageThree />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
