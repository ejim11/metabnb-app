import classes from "./FilterComp.module.scss";
import filterIcon from "../../assets/place to stay page images/filter btn.svg";

const filters = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantasy city",
  "Beach",
  "Carbins",
  "Off-grid",
  "Farm",
];

const FilterComp = () => {
  const filterList = filters.map((filter, i) => (
    <li className={classes.filter}>{filter}</li>
  ));

  return (
    <div className={classes["container"]}>
      <ul>{filterList}</ul>
      <div className={classes["filter-box"]}>
        <p>Location</p>
        <div className={classes["filter-box-img"]}>
          <img src={filterIcon} alt="filter-img" />
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
