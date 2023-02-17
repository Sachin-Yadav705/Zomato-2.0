import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./CartQuantityToggle.css";

const CartAmountToggle = ({ quantity, setDecrease, setIncrement }) => {
  return (
    <div className="cart-button">
      <button onClick={setDecrease}>
        <FaMinus />
      </button>
      <div className="quantity-style">{quantity}</div>
      <button onClick={setIncrement}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
