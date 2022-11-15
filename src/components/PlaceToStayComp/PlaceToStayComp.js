import FilterComp from "../FilterComp/FilterComp";
import Card from "../UI/Card/Card";
import itemsData from "./PlaceToStayData";
import ImgItemBox from "../UI/ImgItemBox/ImgItemBox";
import classes from "./PlaceToStayComp.module.scss";

const PlaceToStayComp = () => {
  const itemsList = itemsData.map((item, i) => (
    <ImgItemBox
      key={i}
      src={item.src}
      name={item.name}
      cost={item.cost}
      distance={item.distance}
      duration={item.duration}
    />
  ));

  return (
    <Card>
      <FilterComp />
      <div className={classes["items-list-container"]}>{itemsList}</div>
    </Card>
  );
};

export default PlaceToStayComp;
