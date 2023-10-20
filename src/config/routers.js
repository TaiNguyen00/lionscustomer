import { LoginPage, RegisterPage } from "~/pages/AuthPage";
import Mainlayout from "../layouts/MainLayout";
import {
  Page404,
  Invoice,
  Payment,
  Paymentfailure,
  PaymentSuccess,
  ManageClient,
  Home,
} from "~/pages";
import TestComponent from "~/layouts/TestComponent";
const routers = [
  {
    id: 0,
    path: "/",
    component: Mainlayout,
    childPath: [
      {
        id: 0,
        path: "/",
        childComponent: Home,
      },
      {
        id: 1,
        path: "/invoice",
        childComponent: Invoice
      },
      {
        id: 2,
        path: "/payment",
        childComponent: Payment
      },
      {
        id: 3,
        path: "/paymentfailure",
        childComponent: Paymentfailure
      },
      {
        id: 4,
        path: "/paymentSuccess",
        childComponent: PaymentSuccess
      }
    ],
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

  // case này dùng để code component
  {
    id: 6,
    path: "/testcomponent",
    component: TestComponent,
  },
  {
    id: 9,
    path: "/manageClient",
    component: ManageClient,
  },
];
export default routers;
