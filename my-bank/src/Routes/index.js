import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../Pages/Home";
import Login from "../Pages/Login.js";
import AddCustomer from "../Pages/AddCustomer.js";
import DashBoard from "../Pages/Dashboard.js";
import LandingPage from "../Pages/LandingPage";
import CustomeGrid from "../Components/CustomerGrid";
import CustomerGrid from "../Components/CustomerGrid";

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
          element: <CustomerGrid />,
        },
        {
          path: "/customer",
          element: <AddCustomer />,
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
