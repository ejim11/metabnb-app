import classes from "./Footer.module.scss";
import metatbnbLogo from "../../assets/logo-white.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const footerLinksText = [
  { heading: "Community", links: ["NFT", "Tokens", "Landlords", "Discord"] },
  { heading: "Places", links: ["Castle", "Farms", "Beach", "Learn more"] },
  {
    heading: "About us",
    links: ["Road map", "Creators", "Career", "Contact us"],
  },
];

const Footer = () => {
  const footerLinks = footerLinksText.map((list, i) => (
    <ul key={i}>
      <li>{list.heading}</li>
      {list.links.map((text, i) => (
        <li key={i}>
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
          <a href="http://facebook.com">
            <FaFacebookF className={classes["icon"]} />
          </a>
          <a href="http://instagram.com">
            <FaInstagram className={classes["icon"]} />
          </a>
          <a href="http://twitter.com">
            <FaTwitter className={classes["icon"]} />
          </a>
        </div>
      </div>
      <div className={classes["ft-links-container"]}>{footerLinks}</div>
      <p>© 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
