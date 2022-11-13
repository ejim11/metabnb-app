import classes from "./ImgItemBox.module.scss";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import FiveStar from "../FiveStar/FiveStar";

const ImgItemBox = (props) => {
  const [filledHeart, setFilledHeart] = useState(false);

  const toggleHeartFilled = () => {
    setFilledHeart((prevState) => !prevState);
  };

  return (
    <div className={classes["item-box"]}>
      <div className={classes["img-container"]}>
        <img src={props.src} alt={props.name} />
        <FaHeart
          className={`${classes["icon"]} ${
            filledHeart ? classes["filled-icon"] : classes["unfilled-icon"]
          }`}
          onClick={toggleHeartFilled}
        />
      </div>
      <div className={classes["item-box-text"]}>
        <p>{props.name}</p>
        <p className={classes.cost}>{props.cost}</p>
      </div>
      <div className={classes["item-box-text"]}>
        <p>{props.distance}</p>
        <p>{props.duration}</p>
      </div>
      <FiveStar />
    </div>
  );
};

export default ImgItemBox;
