import Mainlayout from "~/layouts/MainLayout";
// import Login from "~/pages/AuthPage/Login";
// import Register from "~/pages/AuthPage/Register";
// import Page404 from "~/pages/AuthPage/404";
import { LoginPage, RegisterPage } from "~/pages/AuthPage";
import { Page404, Invoice, Payment } from "~/pages";
import Home from "../pages/Home";
const routers = [
  {
    id: 0,
    path: "/",
    component: Home,
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
  {
    id: 4,
    path: "/invoice",
    component: Invoice,
  },
  {
    id: 5,
    path: "/payment",
    component: Payment,
  },
];
export default routers;
