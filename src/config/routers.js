
import { LoginPage, RegisterPage } from "~/pages/AuthPage";
import Home from "../pages/Home";
import {
  Page404,
  Invoice,
  Payment,
  Paymentfailure,
  PaymentSuccess,
  ManageClient
} from "~/pages";
import TestComponent from "~/layouts/TestComponent";

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
    path: "/Register",
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



  // case này dùng để code component
  {
    id: 6,
    path: "/testcomponent",
    component: TestComponent,

  },
  {
    id: 7,
    path: "/paymentfailure",
    component: Paymentfailure,
  },
  {
    id: 8,
    path: "/paymentSuccess",
    component: PaymentSuccess,
  },
  {
    id: 9,
    path: "/manageClient",
    component: ManageClient,
  },
];
export default routers;
