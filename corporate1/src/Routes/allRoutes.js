import React from "react";
import YourBusinesses from "../pages/ToDo"

//GetThingsDone
import GetThingsDone from "../pages/GetThingsDone";
import Login from "../pages/Authentication/Login";
const authProtectedRoutes = [
  { path: "/get-things-done", component: <GetThingsDone /> },
  { path: "/your-businesses", component: <YourBusinesses /> },
];
const publicRoutes = [
  // Authentication Page

  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
