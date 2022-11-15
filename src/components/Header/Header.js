import classes from "./Header.module.scss";
import logoColored from "../../assets/logo-coloured.svg";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import WalletLinks from "../WalletLinks/WalletLinks";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logoSmall from "../../assets/logo-small.svg";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const displayModalHandler = () => {
    setModalVisible(true);
  };

  const hideModalHandler = (e) => {
    e.target.dataset.type === "modal" && setModalVisible(false);
  };

  const showMenuHandler = () => {
    setMenuIsVisible(true);
  };

  const hideMenuHandler = () => {
    setMenuIsVisible(false);
  };

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
        <HiOutlineMenuAlt2
          className={classes["menu-icon"]}
          onClick={showMenuHandler}
        />
        <div className={classes.logo}>
          <img src={logoColored} alt="logo" className={classes["logo-big"]} />
          <img src={logoSmall} alt="logo" className={classes["logo-small"]} />
        </div>
        <nav
          className={
            menuIsVisible ? classes["visible-menu"] : classes["invisible-menu"]
          }
          onClick={hideMenuHandler}
        >
          <ul>{navLinks}</ul>
        </nav>
        <Button
          className={classes["connect-btn"]}
          onClick={displayModalHandler}
        >
          Connect wallet
        </Button>
      </header>
      <Modal
        onClick={hideModalHandler}
        className={modalVisible ? classes["show-modal"] : classes["hide-modal"]}
      >
        <WalletLinks onClose={hideModalHandler} />
      </Modal>
    </>
  );
};

export default Header;
