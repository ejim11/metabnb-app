import classes from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <div
      className={`${classes["modal"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Modal;
