import React from "react";
import Card from "../Components/Card";
import { fullArr } from "../Components/Filter/Fillter";

const Kids = (gender) => {
  let dataArray = fullArr.filter(isMen);

  function isMen(fullArr) {
    return fullArr.gender === "kids";
  }
  console.log(gender);
  // console.log(props.gender);
  return <Card dataArray={dataArray} />;
};

export default Kids;
