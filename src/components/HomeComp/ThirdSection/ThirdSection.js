import classes from "./ThirdSection.module.scss";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import image1 from "../../../assets/home-third-section/img1.svg";

const ThirdSection = () => {
  return (
    <Card className={classes["third-section"]}>
      <div className={classes["third-section-1"]}>
        <h3>Metabnb NFTs</h3>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <Button className={classes["learn-more-btn"]}>Learn more</Button>
      </div>
      <div className={classes["third-section-2"]}>
        <img src={image1} alt="third-sec-img" />
      </div>
    </Card>
  );
};

export default ThirdSection;
