import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import CategoryButton from "./Pages/CategoryButton";

function App(selectedSubCats) {
  console.log(selectedSubCats);
  return (
    <>
      <Header />
      <main className="pt-24 bg-slate-100 min-h-[calc(100vh)] md:px-4 bg-dark ">
        <div className="mx-auto grid grid-cols-12 gap-4">
          <div class="col-span-12 rounded-lg border border-gray-100 bg-gray-200 p-10 md:col-span-3">
            <h1>FILTERS</h1>
            <CategoryButton />
          </div>
          <div class="col-span-12 rounded-lg border border-gray-100 bg-gray-200 p-10  md:col-span-9">
            <div className="grid grid-cols-4 gap-4">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
