import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <List />
      </div>
    </div>
  );
};

export default Home;
