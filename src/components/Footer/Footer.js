import classes from "./Footer.module.scss";
import metatbnbLogo from "../../assets/logo-white.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const footerLinksText = [
  ["Community", "NFT", "Tokens", "Landlords", "Discord"],
  ["Places", "Castle", "Farms", "Beach", "Learn more"],
  ["About us", "Road map", "Creators", "Career", "Contact us"],
];

const Footer = () => {
  const footerLinks = footerLinksText.map((list) => (
    <ul>
      {list.map((text) => (
        <li>
          <a href="#">{text}</a>
        </li>
      ))}
    </ul>
  ));

  return (
    <footer>
      <div className={classes["first-container"]}>
        <div className={classes["logo-img"]}>
          <img src={metatbnbLogo} alt="metabnb-logo" />
        </div>
        <div className={classes["media-links-icons"]}>
          <FaFacebookF className={classes["icon"]} />
          <FaInstagram className={classes["icon"]} />
          <FaTwitter className={classes["icon"]} />
        </div>
      </div>
      <div className={classes["ft-links-container"]}>{footerLinks}</div>
      <p>© 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
