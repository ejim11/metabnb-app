import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import image1 from "../../../assets/home-first-section/image 1.jpg";
import image2 from "../../../assets/home-first-section/image 2.jpg";
import image3 from "../../../assets/home-first-section/image 3.jpg";
import image4 from "../../../assets/home-first-section/image 4.jpg";
import classes from "./FirstSection.module.scss";

const imgs = [
  [image1, image2],
  [image3, image4],
];

const FirstSection = () => {
  const images = imgs.map((grp, i) => (
    <div key={i} className={classes[`grp-img-${i + 1}`]}>
      {grp.map((img, i) => (
        <div key={i} className={classes[`img-${i + 1}`]}>
          <img src={img} alt="home-img" />
        </div>
      ))}
    </div>
  ));

  return (
    <Card className={classes["first-section"]}>
      <div className={classes["first-section-1"]}>
        <h1>
          Rent a <span>Place</span> away from
          <br /> <span>Home</span> in the
          <span> Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className={classes["search-container"]}>
          <input placeholder="Search for location" type={"text"} />
          <Button className={classes["search-btn"]}>Search</Button>
        </div>
      </div>
      <div className={classes["first-section-2"]}>{images}</div>
    </Card>
  );
};

export default FirstSection;
