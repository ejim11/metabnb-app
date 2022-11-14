import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import metaMaskIcon from "../../assets/metamask-icon.svg";
import walletConnectIcon from "../../assets/wallet-connect-icon.svg";
import classes from "./WalletLinks.module.scss";
import { useState } from "react";

const wallets = [
  { logo: metaMaskIcon, name: "Metamask" },
  { logo: walletConnectIcon, name: "WalletConnect" },
];

const WalletLinks = (props) => {
  const [activeClass, setActiveClass] = useState(0);

  const walletList = wallets.map((item, i) => (
    <div
      key={i}
      className={`${classes["wallet-item"]} ${
        activeClass === i ? classes["active"] : classes["inactive"]
      }`}
      onClick={() => {
        setActiveClass(i);
      }}
    >
      <div>
        <img src={item.logo} alt={item.name} />
      </div>
      <p>{item.name}</p>
      <AiOutlineRight className={classes["right-arr-icon"]} />
    </div>
  ));

  return (
    <div className={classes.container}>
      <div>
        <p>Connect Wallet</p>
        <AiOutlineClose
          className={classes["close-icon"]}
          onClick={props.onClose}
        />
      </div>
      <div>
        <p>Choose your preferred wallet:</p>
        {walletList}
      </div>
    </div>
  );
};

export default WalletLinks;
