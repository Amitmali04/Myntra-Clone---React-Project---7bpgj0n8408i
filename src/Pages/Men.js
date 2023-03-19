import React from "react";
import Card from "../Components/Card";
import { fullArr } from "../Components/Filter/Fillter";

let dataArray = fullArr.filter(isMen);

function isMen(fullArr) {
  return fullArr.gender === "men";
}
const Men = () => {
  return (
    // <div>
    <Card dataArray={dataArray} />
    // </div>
  );
};

export default Men;
