import React, { useState } from "react";
import Card from "../Components/Card";
import { fullArr } from "../Components/Filter/Fillter";
const Home = () => {
  const [status, setState] = useState("home");

  return (
    <>
      <Card dataArray={fullArr} />
    </>
  );
};

export default Home;
