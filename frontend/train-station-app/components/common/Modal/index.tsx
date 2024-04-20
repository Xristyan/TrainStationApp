import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const BackDrop = (props: any) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={`${classes.modal} ${classes[props.className]}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement: any = document.querySelector('#overlays');

const Modal = (props: any) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
