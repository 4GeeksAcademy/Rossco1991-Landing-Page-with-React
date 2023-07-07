import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Repeated } from "./repeated";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Repeated imageUrl="" title="" description="" buttonLabel=""/>
      </div>
    </>
  );
};

export default Home;
