import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

//IMPORT for -> user form icons
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";

//IMPORT for -> product form icons
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

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

export const USER_INPUTS = {
  title: "Add New User",
  layout: [
    {
      id: 1,
      label: "username",
      type: "text",
      required: true,
      icon: <PersonIcon className="inputIcon" />,
    },
    {
      id: 2,
      label: "email",
      type: "email",
      required: true,
      icon: <AlternateEmailIcon className="inputIcon" />,
    },
    {
      id: 3,
      label: "name",
      type: "text",
      required: true,
      icon: <BadgeOutlinedIcon className="inputIcon" />,
    },
    {
      id: 4,
      label: "surname",
      type: "text",
      required: true,
      icon: <BadgeOutlinedIcon className="inputIcon" />,
    },
    {
      id: 5,
      label: "address",
      type: "text",
      required: true,
      icon: <HomeOutlinedIcon className="inputIcon" />,
    },
    {
      id: 6,
      label: "country",
      type: "text",
      required: true,
      icon: <FlagCircleOutlinedIcon className="inputIcon" />,
    },
    {
      id: 7,
      label: "password",
      type: "text",
      required: true,
      icon: <VerifiedUserOutlinedIcon className="inputIcon" />,
    },
  ],
};

export const PRODUCT_INPUT = {
  title: "Add New Product",
  layout: [
    {
      id: "p1",
      label: "title",
      type: "text",
      required: true,
      icon: <LabelOutlinedIcon className="inputIcon" />,
    },
    {
      id: "p2",
      label: "price",
      type: "text",
      required: true,
      icon: <LocalOfferOutlinedIcon className="inputIcon" />,
    },
    {
      id: "p3",
      label: "category",
      type: "text",
      required: true,
      icon: <CategoryOutlinedIcon className="inputIcon" />,
    },
    {
      id: "p4",
      label: "manufacturer",
      type: "text",
      required: true,
      icon: <WarehouseOutlinedIcon className="inputIcon" />,
    },
    {
      id: "p5",
      label: "description",
      type: "text",
      required: true,
      icon: <DescriptionOutlinedIcon className="inputIcon" />,
    },
    {
      id: "p6",
      label: "warranty",
      type: "text",
      required: false,
      icon: <AccessTimeOutlinedIcon className="inputIcon" />,
    },
  ],
};
