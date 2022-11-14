import classes from "./Header.module.scss";
import logoColored from "../../assets/logo-coloured.svg";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import WalletLinks from "../WalletLinks/WalletLinks";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Place to stay",
    path: "/place-to-stay",
  },
  {
    title: "NFTs",
    path: "/nfts",
  },
  {
    title: "Community",
    path: "/community",
  },
];

const Header = () => {
  const navLinks = links.map((link, i) => (
    <li key={i}>
      <NavLink
        to={link.path}
        className={(navData) =>
          navData.isActive ? classes["active-link"] : classes["inactive-link"]
        }
      >
        {link.title}
      </NavLink>
    </li>
  ));

  return (
    <>
      <header>
        <div className={classes.logo}>
          <img src={logoColored} alt="logo" />
        </div>
        <nav>
          <ul>{navLinks}</ul>
        </nav>
        <Button className={classes["connect-btn"]}>Connect wallet</Button>
      </header>
      <Modal>
        <WalletLinks />
      </Modal>
    </>
  );
};

export default Header;
