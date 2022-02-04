import React from "react";
import Wellcome from "./Wellcome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center h-full ">
      <Wellcome />
      <section className="my-auto container flex flex-wrap justify-center py-8  text-white ">
        <Link to="/tasks">
          <div className="w-36 shadow-md  text-center m-4 bg-green-500 flex flex-col justify-evenly items-center h-44 border-2 p-2 rounded-3xl text-lg ">
            <p className="">My Task List</p>
            <span> icon </span>
            <p>you have 2 items</p>
          </div>
        </Link>
        <Link to="/newtask">
          <div className="w-36 shadow-md  m-4 text-center  bg-pink-500 flex flex-col justify-evenly items-center h-44 border-2 p-2 rounded-3xl text-lg ">
            <p>Add New Task</p>
            <span> icon </span>
            <p>you have 2 items</p>
          </div>
        </Link>
        <Link to="/completedtask">
          <div className="w-36 shadow-md  m-4  bg-purple-500 flex flex-col justify-evenly items-center h-44 border-2 text-center p-2 rounded-3xl text-lg ">
            <p>Completed Task</p>
            <span> icon </span>
            <p>you have 2 items</p>
          </div>
        </Link>
        <Link to="/uncompletedtask">
          <div className="w-36 shadow-md  m-4  bg-yellow-500 flex flex-col justify-evenly items-center h-44 border-2 text-center p-2 rounded-3xl text-lg ">
            <p>UnCompleted Task</p>
            <span> icon </span>
            <p>you have 2 items</p>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
