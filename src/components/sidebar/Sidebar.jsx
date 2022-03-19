import "./sidebar.scss";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top">
          <span className="logo">React Admin</span>
        </div>
        <div className="center">
          <ul>
            <h4 className="categoryTitle">main</h4>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <h4 className="categoryTitle">lists</h4>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
            <li>
              <ReceiptLongIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <h4 className="categoryTitle">useful</h4>
            <li>
              <BarChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsActiveIcon className="icon" />
              <span>Notifications</span>
            </li>
            <h4 className="categoryTitle">services</h4>
            <li>
              <SettingsSystemDaydreamIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <BookIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
            <h4 className="categoryTitle">profile</h4>
            <li>
              <AccountBoxIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
