import React from "react";
import Meals from "./Meals";

const Categories = (props) => {
  const { data } = props;
  const nonEmptyCategories = data.categories.filter(
    (category) => category.meals.length > 0
  );
  return (
    <div className="grey">
      {nonEmptyCategories.map((category) => {
        const catName = category.name;

        return (
          <div className="center">
            <div key={catName} className="menu-container">
              <h2>{catName}</h2>
              <div>
                <Meals category={category} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
