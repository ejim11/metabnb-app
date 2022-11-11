import classes from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main */}
      <main>{props.children}</main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Layout;
