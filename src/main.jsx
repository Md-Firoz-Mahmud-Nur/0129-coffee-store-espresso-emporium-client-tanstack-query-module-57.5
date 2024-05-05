import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import AuthProvider from "./firebase/AuthProvider";
import Users from "./Components/Users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users2 from "./Components/Users2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/coffee",
      ),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/coffee/${params.id}`,
      ),
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch(
        "https://0121-coffee-store-espresso-emporium-server-module-56-5.vercel.app/user",
      ),
  },
  {
    path: "/users2",
    element:<Users2></Users2>
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
