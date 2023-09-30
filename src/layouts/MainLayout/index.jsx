import InnerContent from "~/components/InnerContent";
import HeaderMain from "./HeaderMain";
import Package from "~/components/Package/index";
import Functional from "~/components/Functional/index";

const Mainlayout = () => {
  return (
    <div>
      <HeaderMain />
      <InnerContent>
        <Functional />
        <Package />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
