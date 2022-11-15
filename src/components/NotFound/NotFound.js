import underConstructionImg from "../../assets/undraw_under_construction_-46-pa.svg";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={classes["not-found-sect"]}>
      <p>UNDER CONSTRUCTION</p>
      <div className={classes["img"]}>
        <img src={underConstructionImg} alt="under-construction-img" />
      </div>
    </section>
  );
};

export default NotFound;
