import Card from "../../UI/Card/Card";
import ImgItemBox from "../../UI/ImgItemBox/ImgItemBox";
import itemsData from "./itemsData";
import classes from "./SecondSection.module.scss";

const SecondSection = () => {
  const itemsList = itemsData.map((item) => (
    <ImgItemBox
      src={item.src}
      name={item.name}
      cost={item.cost}
      distance={item.distance}
      duration={item.duration}
    />
  ));

  return (
    <Card>
      <h2>Inspiration for your next adventure</h2>
      <div>{itemsList}</div>
    </Card>
  );
};

export default SecondSection;
