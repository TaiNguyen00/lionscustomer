import InnerContent from "~/components/InnerContent";
import HeaderMain from "./HeaderMain";
import Package from "../../components/Package/Package";

const Mainlayout = () => {
  return (
    <div>
      <HeaderMain />
      <InnerContent>
        <Package />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
