import InnerContent from "~/components/InnerContent";
import HeaderMain from "./HeaderMain";

import Package from "~/components/Package/index";
import Functional from "~/components/Functional/index";
import TeamContact from "~/components/TeamContact";
import ManageSolution from "~/components/ManageSolution";

const Mainlayout = () => {
  return (
    <div>
      <HeaderMain />
      <InnerContent>
        <h1>MainLayout</h1>
        <TeamContact />
        <ManageSolution />
        <Functional />
        <Package />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
