import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login.js";
import AddCustomer from "../Pages/AddCustomer.js";
import DashBoard from "../Pages/Dashboard.js";
import LandingPage from "../Pages/LandingPage";
import CustomerDetails from "../Pages/CustomerDetails";

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
          path: "/customer",
          element: <AddCustomer />,
        },
        {
          path: "/customer-details/:id",
          element: <CustomerDetails />,
        },
        {
          path: "/user-accounts",
          element: <DashBoard />,
        },
        {
          path: "/logout",
          element: <DashBoard />,
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
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNonAuthenticatedOnly : routesForAuthenticatedOnly),
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
