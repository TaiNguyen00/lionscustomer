import InnerContent from "~/components/InnerContent";
import HeaderMain from "./HeaderMain";
import RoomInfo from "../../components/Room";

const Mainlayout = () => {


  return (
    <div>
      <HeaderMain />
      <InnerContent>
        <h1>MainLayout</h1>
        <RoomInfo />
      </InnerContent>
    </div>
  );
};

export default Mainlayout;
