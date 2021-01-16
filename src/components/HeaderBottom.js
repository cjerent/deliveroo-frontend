import React from "react";

const HeaderBottom = (props) => {
  const { name, description, picture } = props;
  return (
    <div>
      <div className="center">
        <div className="header-bottom">
          <div className="description">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className="cover-img">
            <img src={picture} alt="pain-quotidien" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
