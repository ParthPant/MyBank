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
import Layout from "../Components/Layout.js";
import ViewAccount from "../Pages/ViewAccount";
import Transactions from "../Pages/Transactions";
import MiniStatement from "../Pages/MiniStatements";
import BalanceEnquiry from "../Pages/BalanceEnquiry";
import FundsTransfer from "../Pages/FundsTransfer.js";
import PinChange from "../Pages/PinChange.js";
import PageNotFound from "../Pages/PageNotFound.js";
import CurrencyConversion from "../Pages/CurrencyConversion";

const Routes = ({ children }) => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      element: <Layout />,
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
            {
              path: "/view-account/:id",
              element: <ViewAccount />,
            },
            {
              path: "/balance-enquiry",
              element: <BalanceEnquiry />,
            },
            {
              path: "transactions/:accNo?",
              element: <Transactions />,
            },
            {
              path: "mini-statement/:accNo?",
              element: <MiniStatement />,
            },
            {
              path: "funds-transfer",
              element: <FundsTransfer />,
            },
            {
              path: "pin-change",
              element: <PinChange />,
            },
            {
              path: "currency-conversion",
              element: <CurrencyConversion />,
            },
            {
              path: "/login",
              element: <LandingPage />,
            },
            {
              path: "*",
              element: <PageNotFound />,
            },
          ],
        },
      ],
    },
  ];

  const routesForNonAuthenticatedOnly = [
    {
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(token ? routesForAuthenticatedOnly : []),
    ...routesForNonAuthenticatedOnly,
  ]);

  return <RouterProvider router={router}> {children} </RouterProvider>;
};

export default Routes;
