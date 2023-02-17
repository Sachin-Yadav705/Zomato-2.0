import React, { useEffect, useState } from "react";
import Search from "../home/Search";
import "./listing.css";
import "./restaurantlist.css";

import Restaurantlist from "./Restaurantlist";
import { Link, useParams } from "react-router-dom";
import TabOptions from "../tabOptions";
import Account from "../account/Account";

const url = "https://zomatoapi-crvb.onrender.com/resturantdata?mealid=";

function Listing({ match }) {
  const mealid = useParams();

  sessionStorage.setItem("mealId", mealid);

  const [restaurantlist, setrestaurantlist] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    fetch(url + mealid).then((res) => {
      return res.json().then((data) => {
        setrestaurantlist(data);
      });
    });
  }, [mealid]);

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return;

      case "Dining Out":
        return;

      case "Nightlife":
        return;

      default:
        return;
    }
  };

  console.log(restaurantlist);
  return (
    <div className="container">
      <div className="listing-head">
        <Link to="/">
          <h1>Zomato</h1>
        </Link>
        <div className="search-heading">
          <Search />
        </div>
        <div className="user_acc">
          <Account />
        </div>
      </div>
      <hr />
      <div className="tab">
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
      </div>
      <div className=" justify-content-center rest_card">
        <Restaurantlist listdata={restaurantlist} />
      </div>
    </div>
  );
}

// sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire,
//data in sessionStorage is cleared when the page session ends.

export default Listing;
