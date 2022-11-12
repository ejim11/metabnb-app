import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import image1 from "../../../assets/home-first-section/image 1.jpg";
import image2 from "../../../assets/home-first-section/image 2.jpg";
import image3 from "../../../assets/home-first-section/image 3.jpg";
import image4 from "../../../assets/home-first-section/image 4.jpg";

const imgs = [
  [image1, image2],
  [image3, image4],
];

const FirstSection = () => {
  const images = imgs.map((grp) => (
    <div>
      {grp.map((img) => (
        <div>
          <img src={img} alt="home-img" />
        </div>
      ))}
    </div>
  ));

  return (
    <Card>
      <div>
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input placeholder="Search for location" type={"text"} />
          <Button>Search</Button>
        </div>
      </div>
      <div>{images}</div>
    </Card>
  );
};

export default FirstSection;
