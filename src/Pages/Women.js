import React, { useState } from "react";
import Card from "../Components/Card";
import { fullArr } from "../Components/Filter/Fillter";

let dataArray = fullArr.filter(isWomen);

function isWomen(fullArr) {
  return fullArr.gender === "women";
}
const Women = () => {
  console.log(dataArray, "asw");

  return (
    // <div>
    <>
      {/* // Women card */}
      <Card dataArray={dataArray} />
    </>
    // </div>
  );
};

export default Women;
