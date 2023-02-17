import React, { useEffect, useState } from "react";
import "./orderonline.css";
import { ToastContainer, Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiRupee } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { useCartContext } from "../../../ContextAPI/Cart_Context/cart_context";

// const orders = [];
function OrderOnline({ menu_details }) {
  const { AddToCart } = useCartContext();

  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(1);
  }, []);

  // const setDecrease = () => {
  //   quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  // };
  // const setIncrement = () => {
  //   // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  //   quantity < 3 ? setQuantity(quantity + 1) : setQuantity(3);
  // };

  const rendermenu = (menu_details) => {
    if (menu_details) {
      if (menu_details.length > 0) {
        return menu_details.map((items) => {
          return (
            <>
              <div className="menu-list" key={items._id}>
                <div className="menu-item">
                  <div className="dish_img">
                    <img src={items.menu_image} alt="dish_img" />
                  </div>
                  <div className="menu-item-details">
                    <h2>
                      {items.menu_name} | {items.menu_type}
                    </h2>
                    <div className="star-rating">
                      <MdStarRate style={{ color: "rgb(243, 193, 23)" }} />
                      <MdStarRate style={{ color: "rgb(243, 193, 23)" }} />
                      <MdStarRate style={{ color: "rgb(243, 193, 23)" }} />
                      <MdStarRate style={{ color: "rgb(243, 193, 23)" }} />
                      <MdStarRate style={{ color: "rgb(204, 202, 195)" }} />
                    </div>
                    <h4 className="menu_price">
                      <BiRupee /> {items.menu_price}
                    </h4>
                    <p>{items.description}</p>
                  </div>
                </div>
                <div className="add_to_cart">
                  <button
                    type="button"
                    className="btn btn-outline-danger "
                    onClick={() => {
                      AddToCart(items, quantity);
                      toast.success("Item added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                  <ToastContainer
                    transition={Flip}
                    position="bottom-center"
                    autoClose={1000 / 7}
                    theme="colored"
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={1}
                  />
                </div>
              </div>
              <hr />
            </>
          );
        });
      } else {
        return (
          <center>
            <h1>No Data Found !</h1>
          </center>
        );
      }
    } else {
      return (
        <div className="loading">
          <center>
            <img src="/images/loading.gif" alt="Loading..." />
            <h2>Loading...</h2>
          </center>
        </div>
      );
    }
  };

  return (
    <>
      {/* <div className="render_cart">
        <h1>total items added {}</h1>
        Item Number {renderCart(cart)} Added
      </div> */}
      {rendermenu(menu_details)}
    </>
  );
}

export default OrderOnline;
