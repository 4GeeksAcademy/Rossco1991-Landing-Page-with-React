import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Repeated } from "./repeated";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let cardInfo = [
  {
    image: "https://miro.medium.com/v2/resize:fit:500/0*-ouKIOsDCzVCTjK-.png",
    title: "Card Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    button: "Find out More!",
  }
]


//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Repeated data={cardInfo.map(cardInfo, idx)}/>
      </div>
    </>
  );
};

export default Home;
