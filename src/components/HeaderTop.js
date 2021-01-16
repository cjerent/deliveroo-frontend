import React from "react";

const HeaderTop = (props) => {
  return (
    <header>
      <div className="header-top">
        <div className="center">
          <img src={props.logo} alt="deliveroo" />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
