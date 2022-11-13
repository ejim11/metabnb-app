import classes from "./ThirdSection.module.scss";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import image1 from "../../../assets/home-third-section/image 7.svg";
import image2 from "../../../assets/home-third-section/image 8.svg";
import image3 from "../../../assets/home-third-section/image 9.svg";

const ThirdSection = () => {
  return (
    <Card>
      <div>
        <h3>Metabnb NFTs</h3>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <Button>Learn more</Button>
      </div>
      <div>
        <div>
          <img src={image1} alt="third-sec-img" />
        </div>
        <div>
          <img src={image2} alt="third-sec-img" />
        </div>
        <div>
          <img src={image3} alt="third-sec-img" />
        </div>
      </div>
    </Card>
  );
};

export default ThirdSection;
