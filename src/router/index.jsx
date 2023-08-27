import React from "react";
import { Routes, Route } from "react-router";
import Mainlayout from "~/layouts/MainLayout";
import Login from "~/pages/AuthPage/Login";
import Register from "~/pages/AuthPage/Register";
const Router = () => (
  <React.Suspense>
    <Routes>
      <Route path="/" element={<Mainlayout />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </React.Suspense>
);
export default Router;
