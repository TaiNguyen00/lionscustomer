import React from "react";
import { Routes, Route } from "react-router";
import routers from "../config/routers";
const Router = () => (
  <React.Suspense>
    <Routes>
      {routers.map((route) => {
        const Page = route.component;
        return <Route key={route.id} path={route.path} element={<Page />} />;
      })}
    </Routes>
  </React.Suspense>
);
export default Router;
