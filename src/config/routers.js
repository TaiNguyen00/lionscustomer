// import Login from "~/pages/AuthPage/Login";
// import Register from "~/pages/AuthPage/Register";
// import Page404 from "~/pages/AuthPage/404";
import Mainlayout from "~/layouts/MainLayout";
import { LoginPage, RegisterPage } from "~/pages/AuthPage";
import { Page404, Invoice, Payment, TestComponents } from "~/pages";
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
  /*
  case này để test components xoá trong tương lai
  */
  {
    id: 6,
    path: "/test",
    component: TestComponents,
  },

  // case này dùng để code component
  {
    id: 7,
    path: "/component",
    component: Mainlayout,
  },
];
export default routers;
