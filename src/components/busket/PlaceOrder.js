import React from "react";
import { useCartContext } from "../../ContextAPI/Cart_Context/cart_context";
import { Link } from "react-router-dom";
import Search from "../home/Search";
import Account from "../account/Account";
import Cart from "../busket/Cart";
import { FaTrash } from "react-icons/fa";
// import { BiRupee } from "react-icons/bi";
import CartQuantityToggle from "./CartQuantityToggle";
import "./CartQuantityToggle.css";
import FormatPrice from "../../FormatPrice";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const {
    cart,
    RemoveFromCart,
    setDecrease,
    setIncrement,
    total_price,
    shipping_fee,
  } = useCartContext();

  console.log(total_price);

  if (cart.length === 0) {
    return (
      <div className="empty_cart">
        <h3>No Cart in Item </h3>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="listing-head">
        <Link to="/">
          <h1>Zomato</h1>
        </Link>
        <div className="search-heading">
          <Search />
        </div>
        <div className="user-acc">
          <Account />
        </div>
        {/* <Link to={`/PlaceOrder?restName=${rest_details.restaurant_name}`}> */}

        <Link to="/PlaceOrder">
          <div className="cart_content absolute-center">
            <Cart />
          </div>
        </Link>
      </div>
      <hr />

      <section>
        <div className="cart_data_table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((curElem) => {
                const { menu_image, menu_id, menu_name, menu_price, quantity } =
                  curElem;

                return (
                  <tr key={menu_id}>
                    <td>
                      <div className="cart_img_data">
                        <div className="cart_img">
                          <img src={menu_image} alt={menu_id} />
                        </div>
                        <div className="item_name">
                          <p>{menu_name}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* price   */}
                      <div className="cart_price">
                        <p>
                          {/* <BiRupee /> {menu_price} */}
                          <FormatPrice price={menu_price} />
                        </p>
                      </div>
                    </td>
                    <td>
                      {/* Quantity  */}
                      <CartQuantityToggle
                        quantity={quantity}
                        setDecrease={() => setDecrease(menu_id)}
                        setIncrement={() => setIncrement(menu_id)}
                      />
                    </td>
                    <td>
                      {/* //Subtotal */}
                      <div className="cart_price">
                        <p>
                          {/* <BiRupee />
                          {menu_price * quantity} */}
                          <FormatPrice price={menu_price * quantity} />
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="cart_bin">
                        <FaTrash
                          className="remove_icon"
                          onClick={() => {
                            RemoveFromCart(menu_id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <hr />

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              {/* <p>{total_price + shipping_fee}</p> */}
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
            <button type="button" class="btn btn-success">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
