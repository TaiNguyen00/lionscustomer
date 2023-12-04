import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

import InnerContent from "~/components/InnerContent";
// eslint-disable-next-line react/prop-types
const Mainlayout = () => {
  return (
    <div>
      <Navigation />

      <InnerContent>
        <Outlet />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
