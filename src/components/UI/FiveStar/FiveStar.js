import { FaStar } from "react-icons/fa";
import classes from "./FiveStar.module.scss";

const FiveStar = () => {
  return (
    <div className={classes.container}>
      <FaStar className={classes["star-icon"]} />
      <FaStar className={classes["star-icon"]} />
      <FaStar className={classes["star-icon"]} />
      <FaStar className={classes["star-icon"]} />
      <FaStar className={classes["star-icon"]} />
    </div>
  );
};

export default FiveStar;
