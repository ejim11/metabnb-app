import mbTokenImg from "../../assets/mbToken.svg";
import metaMaskImg from "../../assets/metamask-logo.svg";
import openSeaImg from "../../assets/opensea.svg";
import classes from "./HomeComp.module.scss";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

const imgs = [mbTokenImg, metaMaskImg, openSeaImg];

const HomeComp = () => {
  const images = imgs.map((img, i) => (
    <div key={i}>
      <img src={img} alt="sponsor-img" />
    </div>
  ));

  return (
    <>
      <FirstSection />
      <div className={classes["imgs-container"]}>{images}</div>
      <SecondSection />
    </>
  );
};

export default HomeComp;
