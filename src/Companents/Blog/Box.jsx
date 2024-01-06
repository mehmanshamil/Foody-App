import React from "react";
import { SiIfood } from "react-icons/si";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaFish } from "react-icons/fa";
import styles from "./Blog.module.css"

const Box = ({ icon, enjoy, text }) => {
  let IconComponent;
  switch (icon) {
    case "FaFish":
      IconComponent = FaFish;
      break;
    case "FaBowlFood":
      IconComponent = FaBowlFood;
      break;
    case "IoFastFoodSharp":
      IconComponent = IoFastFoodSharp;
      break;
      case "SiIfood":
        IconComponent = SiIfood;
        break;
    default:
      return <p>undefined icon name</p>;
  }

  return (
    
      <div className={styles.box}>
        <IconComponent />
        <p className={styles.enjoy}>{enjoy}</p>
        <p>{text}</p>
      </div>
    
  );
};

export default Box;
