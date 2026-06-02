import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
function MainLayout(){
    return (
      <>
      <NavBar />
      <Outlet />
      </>
    );
}
export default MainLayout;