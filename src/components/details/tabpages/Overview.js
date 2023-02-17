import React from "react";
import "./overview.css";

function Overview({ rest_details }) {
  return (
    <div className="overview-container">
      <h2>{rest_details.restaurant_name}</h2>
      <p>
        {rest_details.restaurant_name} is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </p>
    </div>
  );
}

export default Overview;
