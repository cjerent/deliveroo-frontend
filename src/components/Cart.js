import React from "react";
import plus from "../assets/iconplus.png";
import minus from "../assets/iconminus.png";

const Cart = (props) => {
  const { cart, addItem, removeItem } = props;
  const empty = cart.length === 0;

  let subTotal = 0;
  cart.forEach((cartMeal) => {
    subTotal += cartMeal.price * cartMeal.amount;
  });

  const deliveryFees = 2.5;

  const total = subTotal + deliveryFees;

  return (
    <div className="cart">
      <button className={empty ? "button-empty" : "submit-button"}>
        Valider mon panier
      </button>

      {empty ? (
        <div className="cart-empty">Votre panier est vide</div>
      ) : (
        <>
          <div>
            {cart.map((cartMeal) => (
              <div className="line">
                <div className="line-left">
                  <button
                    className="button-amount"
                    onClick={() => removeItem(cartMeal.id)}
                  >
                    <img src={minus} alt="icon-minus" />{" "}
                  </button>
                  <span className="amount">{cartMeal.amount}</span>
                  <button
                    className="button-amount"
                    onClick={() => addItem(cartMeal.id)}
                  >
                    <img src={plus} alt="icon-plus" />
                  </button>
                </div>
                <div className="line-center">
                  <span>{cartMeal.name}</span>
                </div>
                <div>
                  <span className="line-right">
                    {cartMeal.price.toFixed(2).replace(".", ",")}€
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="subtotal-section">
              <div className="line">
                <span>Sous-total</span>
                <span>{subTotal.toFixed(2).replace(".", ",")}€</span>
              </div>

              <div className="line">
                <span>Frais de livraison</span>
                <span>{deliveryFees.toFixed(2).replace(".", ",")}€</span>
              </div>
            </div>
            <div className="total">
              <div className="line">
                <span>Total</span>
                <span>{total.toFixed(2).replace(".", ",")}€</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
