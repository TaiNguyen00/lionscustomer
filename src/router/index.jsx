import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Mainlayout from "../layouts/MainLayout";
const Router = () => (
  <React.Suspense>
    <Routes>
      <Route path="/" element={<Mainlayout />}></Route>
    </Routes>
  </React.Suspense>
);
export default Router