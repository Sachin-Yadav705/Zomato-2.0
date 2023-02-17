import React from "react";
import { Link } from "react-router-dom";

import "./quicksearch.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const QuickDisplay = (props) => {
  const listmeal = props.mealdata;
  if (listmeal) {
    return listmeal.map((item) => {
      return (
        <div className="col single_card">
          <Link to={`/Listing/${item.mealtype_id}`} key={item._id}>
            <div className="card shadow main_card">
              <div className="img_style">
                <img
                  src={item.meal_image}
                  className="card-img-top"
                  alt={item.mealtype_id}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.mealtype} </h5>
                <p className="card-text card_title">{item.content}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }
};

export default QuickDisplay;
