import React from "react";
import Meals from "./Meals";

const Categories = (props) => {
  const { data, addItem } = props;
  const nonEmptyCategories = data.categories.filter(
    (category) => category.meals.length > 0
  );
  return (
    <div>
      {nonEmptyCategories.map((category) => {
        const catName = category.name;
        const mealId = category.meals.id;

        return (
          <div key={catName}>
            <div className="menu-container">
              <h2>{catName}</h2>
              <div>
                <Meals key={mealId} category={category} addItem={addItem} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
