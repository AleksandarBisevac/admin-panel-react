import { CircularProgressbar } from "react-circular-progressbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured cardBoxShadow">
      <header className="top">
        <h2>Total Revenue</h2>
        <MoreVertIcon className="icon" />
      </header>
      <div className="details">
        <div className="featuredChart">
          <CircularProgressbar
            value={(774.23 / 1000) * 100}
            text={Math.floor((774.23 / 1000) * 100) + "%"}
            strokeWidth={5}
            styles={{
              root: {},
              path: {
                stroke: "var(--primary-700)",
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "var(--orange-200)",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: { fill: "var(--primary-700)" },
            }}
          />
        </div>
        <h5 className="title">total sales made today</h5>
        <p className="amount">$774.23</p>
        <p className="description">
          Previous transactions processing. Last payment may not be included!
        </p>
        <div className="summery">
          {/*  */}
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon />
              <div className="itemAmount">$20k</div>
            </div>
          </div>
          {/*  */}
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon />
              <div className="itemAmount">$4.2k</div>
            </div>
          </div>
          {/*  */}
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon />
              <div className="itemAmount">$21.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
