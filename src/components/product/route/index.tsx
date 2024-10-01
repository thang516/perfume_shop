import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error/ErrorComponent";
import MainPage from "../page/MainPage";
import { Product } from "../Product";
import HomePage from "../page/HomePage";
import Collection from "../../collection";
import Blog from "../../blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: "/product/:id",
            element: <Collection />,
          },
        ]
      },
      {
        path: "/pages",
        element: <Product />,
        children: [
          {
            path: "/pages/:id",
            element: <Blog />,
          },
        ]
      },
      {
        path: "/introduction",
        element: <HomePage/>,
      },
    ],
  },
]);
