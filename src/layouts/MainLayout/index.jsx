import InnerContent from "~/components/InnerContent";
import HeaderMain from "./HeaderMain";
import Package from "~/components/Package/index";
import Functional from "~/components/Functional/index";
import TeamContact from "~/components/TeamContact";
import ManageSolution from "~/components/ManageSolution";
import { AdminEditPackage } from "~/components/AdminEditPackage";

const Mainlayout = () => {
  return (
    <div>
      <HeaderMain />
      <InnerContent>
        {/* <TeamContact />
        <ManageSolution />
        <Functional />
        <Package /> */}
        <AdminEditPackage />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
