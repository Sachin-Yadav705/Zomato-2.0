import "./quicksearch.css";
import QuickDisplay from "./QuickDisplay";

import React, { useEffect, useState } from "react";
let mealurl = "https://zomatoapi-crvb.onrender.com/mealtype";

const Quicksearch = () => {
  const [meal, setmeal] = useState("");

  useEffect(() => {
    fetch(mealurl, { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setmeal(data);
      });
    });
  }, []);

  console.log(meal._id);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center row_card ">
          <QuickDisplay mealdata={meal} />
        </div>
      </div>
    </>
  );
};
export default Quicksearch;
