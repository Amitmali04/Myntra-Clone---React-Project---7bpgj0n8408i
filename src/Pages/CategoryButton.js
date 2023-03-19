import React, { useState } from "react";
import { gendArr } from "../Components/Filter/Fillter";
const CategoryButton = () => {
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [checkAnswer, setCheckAnswer] = useState(false);

  const handleChange = (e) => {
    const isChecked = e.target.value === "men" ? true : false;
    setSelectedSubCats(isChecked);
    console.log(isChecked);
  };
  return (
    <>
      <h1>Gender</h1>
      {gendArr.map((item) => (
        <div
          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
          key={item.id}
        >
          <input
            type="radio"
            id={item.id}
            value={item.value}
            name={item.value}
            onChange={handleChange}
            onClick={(e) => setCheckAnswer(e.target.checked)}
          />
          <label htmlFor={item.id}>{item.lable}</label>
        </div>
      ))}
    </>
  );
};

export default CategoryButton;
