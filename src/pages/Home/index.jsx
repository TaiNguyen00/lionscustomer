import clsx from "clsx";
import style from "./Home.module.scss";
import Functional from "~/components/Functional";
import ManageSolution from "~/components/ManageSolution";
import Package from "~/components/Package";
import TeamContact from "~/components/TeamContact";
import Banner from "../../components/Banner";


const Home = () => {
  return (
    <div className={clsx(style.homeWapper)}>
        <Banner />
        <Functional />
        <ManageSolution />
        <Package />
        <TeamContact />
    </div>
  );
};

export default Home;
