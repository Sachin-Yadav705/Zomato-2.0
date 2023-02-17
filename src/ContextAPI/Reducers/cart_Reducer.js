const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { items, quantity } = action.payload;

    let existingProduct = state.cart.find(
      (curr) => curr.menu_id === items.menu_id
    );

    if (existingProduct) {
      let updateProduct = state.cart.map((ele) => {
        if (ele.menu_id === items.menu_id) {
          let newQuantity = ele.quantity + quantity;

          if (newQuantity >= 4) {
            newQuantity = 4;
          }
          return {
            ...ele,
            quantity: newQuantity,
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        // id: items._id,
        menu_id: items?.menu_id,
        menu_image: items?.menu_image,
        menu_name: items?.menu_name,
        menu_price: items?.menu_price,
        quantity,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // DELETE ITEM FROM CART
  if (action.type === "REMOVE_FROM_CART") {
    let updatedCart = state.cart.filter((e) => {
      return e.menu_id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  // INCREMENT && DECREMENT

  if (action.type === "SET_DECREMENT") {
    let updateProduct = state.cart.map((e) => {
      if (e.menu_id === action.payload) {
        let decQuantity = e.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...e,
          quantity: decQuantity,
        };
      } else {
        return e;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updateProduct = state.cart.map((e) => {
      if (e.menu_id === action.payload) {
        let incQuantity = e.quantity + 1;

        if (incQuantity > 4) {
          incQuantity = 4;
        }

        return {
          ...e,
          quantity: incQuantity,
        };
      } else {
        return e;
      }
    });

    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updateCart = state.cart.reduce((initialVal, curr) => {
      let { quantity } = curr;
      initialVal = initialVal + quantity;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updateCart,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let totalPrice = state.cart.reduce((initialVal, curElem) => {
      let { menu_price, quantity } = curElem;

      initialVal = initialVal + menu_price * quantity;

      return initialVal;
    }, 0);
    return {
      ...state,
      total_price: totalPrice,
    };
  }
  return state;
};

export default cartReducer;
