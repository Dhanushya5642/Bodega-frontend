import React from "react";
import {Routes,Route} from 'react-router-dom';
import HomePage from "..//Components/Homepage";
import AboutPage from "../Components/AboutPage";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import MainLayout from "../Layouts/MainLayout";

function AppRoutes(){
    return(
          <>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
          </Routes>
          </>
    );
}
export default AppRoutes;