import React from "react";
import Wellcome from "./Wellcome";

function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center py-8">
      <Wellcome />
      <section className="my-auto grid grid-cols-2 gap-4 text-white ">
        <div className="w-48 bg-green-300 flex flex-col justify-evenly items-center h-52 border-2 rounded-3xl text-xl ">
          <p className="">Add New Task</p>
          <span> icon </span>
          <p>you have 2 items</p>
        </div>
        <div className="w-48 bg-pink-300 flex flex-col justify-evenly items-center h-52 border-2 rounded-3xl text-xl ">
          <p>Add New Task</p>
          <span> icon </span>
          <p>you have 2 items</p>
        </div>
        <div className="w-48 bg-purple-300 flex flex-col justify-evenly items-center h-52 border-2 rounded-3xl text-xl ">
          <p>Add New Task</p>
          <span> icon </span>
          <p>you have 2 items</p>
        </div>
        <div className="w-48 bg-yellow-300 flex flex-col justify-evenly items-center h-52 border-2 rounded-3xl text-xl ">
          <p>Add New Task</p>
          <span> icon </span>
          <p>you have 2 items</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
