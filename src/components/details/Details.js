import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../home/Search";
import "./details.css";
import { BiRupee } from "react-icons/bi";

import TabOptions from "./TabOptions";
import Overview from "./tabpages/Overview";
import ContactUs from "./tabpages/ContactUs";
import OrderOnline from "./tabpages/OrderOnline";
import Photos from "./tabpages/Photos";
import Account from "../account/Account";
import Cart from "../busket/Cart";

const rurl = "https://zomatoapi-crvb.onrender.com/resturantdetails";
const menuurl = "https://zomatoapi-crvb.onrender.com/menu";

function Details() {
  const [rest_details, setrest_details] = useState("");
  const [menu_details, setmenu_details] = useState("");
  const [activeTab, setactiveTab] = useState("Overview");
  // const [useritem, setuseritem] = useState("");

  let restid = window.location.search.split("=")[1];
  // console.log(restid);

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${rurl}/${restid}`);
      let menures = await axios.get(`${menuurl}/${restid}`);
      setrest_details(res.data[0]);
      setmenu_details(menures.data);
    })();
  }, [restid]);

  // const addtocart = (data) => {
  //   setuseritem(data);
  // };

  // const placeorder = (data) => {
  //   addtocart(data);
  // };

  // console.log(`Total item added in cart ${useritem.length}`);
  const gettabdetails = (tab) => {
    switch (tab) {
      case "Overview":
        return <Overview rest_details={rest_details} />;
      case "Order Online":
        return <OrderOnline menu_details={menu_details} />;
      case "Photos":
        return <Photos rest_details={rest_details} />;
      case "Contact Us":
        return <ContactUs rest_details={rest_details} />;

      default:
        return <Overview rest_details={rest_details} />;
    }
  };

  return (
    <>
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

          <Link to={`/PlaceOrder/${rest_details.restaurant_name}`}>
            <div className="cart_content absolute-center">
              <Cart />
            </div>
          </Link>
        </div>
        <hr />

        <div id="mainContent">
          <div className="img_content">
            <div className="imgDiv">
              <img src={rest_details.restaurant_thumb} alt="images" />
            </div>

            <div className="contentDiv">
              <h2>{rest_details.restaurant_name}</h2>
              <span>231 Customers Say {rest_details.rating_text} </span>
              <h3>
                <del>
                  Old Price: <BiRupee />
                  1000
                </del>
              </h3>
              <h3>
                New Price: <BiRupee />
                {rest_details.cost}
              </h3>
              <p>Best Taste of Fresh Chai with Samosa At your Door or DineIn</p>
              <div className="feature_container">
                <figure>
                  <img
                    src="https://i.ibb.co/wJvrhYg/veg.png"
                    className="featureIcon"
                    alt="images"
                  />
                  <figcaption>Pure Veg</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://i.ibb.co/mD3jpgc/sentizied.png"
                    className="featureIcon"
                    alt="images"
                  />
                  <figcaption>Fully Senatized</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="tabs">
            <TabOptions activeTab={activeTab} setactiveTab={setactiveTab} />
            {gettabdetails(activeTab)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
