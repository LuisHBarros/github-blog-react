import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../pages/header";

export function DefaultLayout() {
  return (
    <div className=" ">
      <Header />
      <Outlet />
    </div>
  );
}
