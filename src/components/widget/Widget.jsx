import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import getWidget from "../../helpers/getWidget";

import "./widget.scss";

const Widget = ({ type }) => {
  let widget = React.useMemo(() => getWidget(type), [type]);

  //temporary
  let amount = 56.22;
  let diff = 20;

  return widget ? (
    <div className="widget cardBoxShadow">
      <div className="left">
        <span className="title">{widget.title}</span>
        <span className="counter">
          {widget.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{widget.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {widget.icon}
      </div>
    </div>
  ) : null;
};

export default Widget;
