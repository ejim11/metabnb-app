import classes from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <div
      className={`${classes["modal"]} ${props.className}`}
      onClick={props.onClick}
      data-type="modal"
    >
      {props.children}
    </div>
  );
};

export default Modal;
