import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-cj.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = (cartMealId) => {
    const exist = cart.find((cartMeal) => cartMeal.id === cartMealId);

    if (exist) {
      const index = cart.indexOf(exist);
      const newCart = [...cart];
      newCart[index].amount++;
      setCart(newCart);
    } else {
      let item = null;
      data.categories.forEach((category) => {
        category.meals.forEach((meal) => {
          if (meal.id === cartMealId) {
            item = meal;
          }
        });
      });

      const newCart = [...cart];
      newCart.push({
        id: item.id,
        price: Number(item.price),
        name: item.title,
        amount: 1,
      });

      setCart(newCart);
    }
  };

  const removeItem = (itemId) => {
    const exist = cart.find((cartItem) => cartItem.id === itemId);
    const index = cart.indexOf(exist);

    const newCart = [...cart];

    newCart[index].amount--;

    const cartNotZero = newCart.filter((cartItem) => cartItem.amount > 0);

    setCart(cartNotZero);
  };
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <HeaderTop logo={logo} />
      <HeaderBottom
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <div className="grey-section">
        <div className="center-section">
          <div>
            <Categories data={data} addItem={addItem} />
          </div>
          <div>
            <Cart cart={cart} addItem={addItem} removeItem={removeItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
