import React from "react";
import placeholder from "../assets/placeholder.jpg";

const Meals = (props) => {
  const { category } = props;
  return (
    <div className="meals-container">
      <>
        {category.meals.map((elem) => {
          const title = elem.title;
          const description = elem.description;
          const price = elem.price;
          const popular = elem.popular;
          const picture = elem.picture;
          return (
            <>
              <div key={elem.id} className="meal-box">
                <div>
                  <h3>{title}</h3>
                  <p className="overflow">{description}</p>
                  <span className="price">{price} €</span>
                  <span className="popular">
                    {popular ? "★ Populaire" : ""}
                  </span>
                </div>

                <div className="meals-picture">
                  {picture ? (
                    <img src={picture} alt="meal" />
                  ) : (
                    <img src={placeholder} alt="logo" />
                  )}
                </div>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};

export default Meals;
