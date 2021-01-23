import React from "react";
import placeholder from "../assets/placeholder.jpg";

const Meals = (props) => {
  const { category, addItem } = props;

  return (
    <div className="meals-container">
      {category.meals.map((elem) => {
        const title = elem.title;
        const description = elem.description;
        const price = elem.price;
        const popular = elem.popular;
        const picture = elem.picture;
        const id = elem.id;

        return (
          <div key={id}>
            <div className="meal-box" onClick={() => addItem(id)}>
              <div>
                <h3>{title}</h3>
                <p className="overflow">{description}</p>
                <span className="price">
                  {Number(price).toFixed(2).replace(".", ",")} €
                </span>
                <span className="popular">{popular ? "★ Populaire" : ""}</span>
              </div>
              <div className="meals-picture">
                {picture ? (
                  <img src={picture} alt="meal" />
                ) : (
                  <img src={placeholder} alt="logo" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
