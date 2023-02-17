import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../ContextAPI/Cart_Context/cart_context";

const Cart = () => {
  const { cart, total_item } = useCartContext();
  console.log(cart);
  // console.log(cart.length);
  return (
    <div className="absolute-center cart_total">
      <FaShoppingCart className="cart_icon" />
      {total_item === 0 ? (
        ""
      ) : (
        <div className="absolute-center cart_lenght">
          <span>{total_item}</span>
        </div>
      )}
    </div>
  );
};
export default Cart;
