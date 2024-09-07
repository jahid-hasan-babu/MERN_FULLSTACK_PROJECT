import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:8000/api/v1/read-book-byId/${params.id}`
          );
          if (!response.ok) {
            throw new Response("Failed to fetch book", {
              status: response.status,
            });
          }
          const result = await response.json();
          return result.data; // Return the 'data' object directly
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:8000/api/v1/read-book-byId/${params.id}`
          );
          if (!response.ok) {
            throw new Response("Failed to fetch book", {
              status: response.status,
            });
          }
          const result = await response.json();
          return result.data; // Return the 'data' object directly
        },
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);

export default router;
