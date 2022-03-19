import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const WIDGETS_TYPES = {
  USERS: "USERS",
  ORDERS: "ORDERS",
  EARNINGS: "EARNINGS",
  BALANCE: "BALANCE",
};
export const WIDGETS_CONFIG = {
  USERS: {
    title: "users",
    isMoney: false,
    link: "see all users",
    icon: (
      <PersonSearchOutlinedIcon
        className="widgetIcon"
        style={{ backgroundColor: "var(--primary-300)" }}
      />
    ),
  },

  ORDERS: {
    title: "orders",
    isMoney: false,
    link: "see all orders",
    icon: <ShoppingCartOutlinedIcon className="widgetIcon" />,
  },
  EARNINGS: {
    title: "profit",
    isMoney: true,
    link: "see net earnings",
    icon: (
      <MonetizationOnOutlinedIcon
        className="widgetIcon"
        style={{ backgroundColor: "var(--green-700)" }}
      />
    ),
  },
  BALANCE: {
    title: "balance",
    isMoney: true,
    link: "see details",
    icon: (
      <AccountBalanceOutlinedIcon
        className="widgetIcon"
        style={{ backgroundColor: "var(--orange-500)" }}
      />
    ),
  },
};
