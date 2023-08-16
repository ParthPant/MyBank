import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login.js";
import AddCustomer from "../Pages/AddCustomer.js";
import DashBoard from "../Pages/Dashboard.js";
import LandingPage from "../Pages/LandingPage";
import CustomerDetails from "../Pages/CustomerDetails";
<<<<<<< HEAD
import AddAccount from "../Pages/AddAccount";
=======
import About from "../Pages/About";
>>>>>>> 87d99e5ab5ec2a320cb603d647bd0ce5ae385c95

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <LandingPage />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      elemenent: <ProtectedRoute />,
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
    },
  ];

  const routesForNonAuthenticatedOnly = [
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
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNonAuthenticatedOnly : routesForAuthenticatedOnly),
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
