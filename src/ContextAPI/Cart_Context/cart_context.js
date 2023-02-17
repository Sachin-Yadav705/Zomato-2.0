import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducers/cart_Reducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = sessionStorage.getItem("Cart_Storage");
  if (localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 70,
};

console.log(initialState.total_price);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (items, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { items, quantity } });
  };

  const RemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    // localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    sessionStorage.setItem("Cart_Storage", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, RemoveFromCart, setDecrease, setIncrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
