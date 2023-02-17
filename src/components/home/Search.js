import "./search.css";

import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import React, { useEffect, useState } from "react";

let rUrl = "https://zomatoapi-crvb.onrender.com/resturantdata?stateid=";

const Search = () => {
  const [location, setlocation] = useState("");
  const [restaurant, setrestaurant] = useState("");

  useEffect(() => {
    fetch(" https://zomatoapi-crvb.onrender.com/location", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        setlocation(data);
      });
    });
  }, []);

  const handellocation = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option
            className="dropdown-item"
            value={item.state_id}
            key={item.state_id}
          >
            {item.state}
          </option>
        );
      });
    }
  };

  const handelrest = (e) => {
    let stateid = e.target.value;

    return fetch(rUrl + stateid, { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setrestaurant(data);
      });
    });
  };

  const renderrest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option
            className="dropdown-item"
            value={item.restaurant_id}
            key={item.restaurant_id}
          >
            {item.restaurant_name}
          </option>
        );
      });
    }
  };

  return (
    <div className="search_from">
      <div className="dropdown  ">
        <div className="dropdown-content for-radius-first">
          <ImLocation className="search_icon loc" />
          <select onChange={handelrest}>
            <option>Select Location</option>
            {handellocation(location)}
          </select>
        </div>
      </div>
      <div className="location-search-separator"></div>
      <div className="dropdown  ">
        <div className="dropdown-content for-radius-second">
          <BsSearch className="search_icon" />
          <select>
            <option>Search for restaurant</option>
            {renderrest(restaurant)}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Search;

//  <div className="search_page  ">
//    <div className="row w-400 ">
//      <div className="col-1 search_icon ">
//        <ImLocation className="icon loc" />
//      </div>
//      <select
//        className=" col form-select form-select-lg select_style"
//        onChange={handelrest}
//      >
//        <option selected>-----Select Location-----</option>
//        {handellocation(location)}
//      </select>

//      <div className="col-1 search_icon">
//        <BsSearch className="icon" />
//      </div>
//      <select className=" col form-select form-select-lg select_style2 ">
//        <option selected>Search for restaurant</option>
//        {renderrest(restaurant)}
//      </select>
//    </div>
//  </div>;
