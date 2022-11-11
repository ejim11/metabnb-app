import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      {/* header */}

      {/* main */}
      <main>{props.children}</main>
      {/* footer */}
    </>
  );
};

export default Layout;
