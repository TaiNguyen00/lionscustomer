import Mainlayout from "~/layouts/MainLayout";
// import Login from "~/pages/AuthPage/Login";
// import Register from "~/pages/AuthPage/Register";
// import Page404 from "~/pages/AuthPage/404";
import { LoginPage, RegisterPage } from "~/pages/AuthPage";
import { Page404 } from "~/pages";
const routers = [
  {
    id: 0,
    path: "/",
    component: Mainlayout,
  },
  {
    id: 1,
    path: "/login",
    component: LoginPage,
  },
  {
    id: 2,
    path: "/register",
    component: RegisterPage,
  },
  {
    id: 3,
    path: "*",
    component: Page404,
  },
];
export default routers;