import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import {
  Public,
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  ListOutlined,
  NotificationAddOutlined,
} from "@mui/icons-material";
import profileImg from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <Public className="icon" /> English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationAddOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src={profileImg} alt="user profile" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
