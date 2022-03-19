import { WIDGETS_TYPES, WIDGETS_CONFIG as widget } from "../components/config";

const getWidget = (type) => {
  switch (type.toUpperCase()) {
    case WIDGETS_TYPES.USERS:
      return widget.USERS;
    case WIDGETS_TYPES.ORDERS:
      return widget.ORDERS;
    case WIDGETS_TYPES.BALANCE:
      return widget.BALANCE;
    case WIDGETS_TYPES.EARNINGS:
      return widget.EARNINGS;
    default:
      return;
  }
};

export default getWidget;
