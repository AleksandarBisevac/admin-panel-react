import "./single.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";

const Single = () => {
  return (
    <div className="singlePage">
      <div className="wrapper">
        <div className="top ">
          <div className="left cardBoxShadow">
            <button className="editButton">edit</button>
            <h1 className="title">information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+381 66 666 999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Bul. Nikole Tesle 74/12, Belgrade
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Serbia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Transaction (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom cardBoxShadow">
          <List title="list of transactions" />
        </div>
      </div>
    </div>
  );
};

export default Single;
