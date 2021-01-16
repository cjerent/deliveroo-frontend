import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import Categories from "./components/Categories";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <Categories data={data} />
    </div>
  );
}

export default App;
