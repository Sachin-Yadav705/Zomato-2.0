import React from "react";

import "./restaurantlist.css";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

const Restaurantlist = (props) => {
  const renderlist = ({ listdata }) => {
    if (listdata) {
      if (listdata.length > 0) {
        return listdata.map((item) => {
          return (
            <>
              <Link to={`/Details?restid=${item.restaurant_id}`}>
                <div className="item" key={item._id}>
                  <div className="col single_card">
                    <div className="card  food_card">
                      <div className="img_style">
                        <img
                          src={item.restaurant_thumb}
                          className="card-img-top"
                          alt={item.restaurant_thumb}
                        />
                      </div>
                      <div className="card_details">
                        <div className="card-text">
                          <div className="hotel_name">
                            <h4>{item.restaurant_name} </h4>
                          </div>
                        </div>

                        <div className="card-text2">
                          <div className="card-text rating ">
                            <p> {item.rating_text}</p>
                          </div>
                          <div className="card-text cost ">
                            <BiRupee />
                            {item.cost}
                          </div>
                        </div>
                      </div>
                      <div className="card-text city_name ">
                        <p>{item.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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

  return <>{renderlist(props)}</>;
};

export default Restaurantlist;
