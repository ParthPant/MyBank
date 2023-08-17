import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login.js";
import AddCustomer from "../Pages/AddCustomer.js";
import DashBoard from "../Pages/Dashboard.js";
import LandingPage from "../Pages/LandingPage";
import CustomerDetails from "../Pages/CustomerDetails";
import About from "../Pages/About";
import AddAccount from "../Pages/AddAccount";
import Layout from "../Components/Layout.js"

const Routes = ({children}) => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        }
      ]
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      element: <Layout/>,
      children: [
        {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
              path: "/dashboard",
              element: <DashBoard />,
            },
            {
              path: "/customer/:mode/:id?",
              element: <AddCustomer />,
            },
            {
              path: "/customer-details/:id",
              element: <CustomerDetails />,
            },
            {
              path: "/add-account/:id",
              element: <AddAccount />,
            },
            {
              path: "/user-accounts",
              element: <DashBoard />,
            },
            {
              path: "/logout",
              element: <DashBoard />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        }
      ],
    },
  ];

  const routesForNonAuthenticatedOnly = [
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    }
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNonAuthenticatedOnly : routesForAuthenticatedOnly),
  ]);

  return <RouterProvider router={router}> {children} </RouterProvider>
};

export default Routes;
