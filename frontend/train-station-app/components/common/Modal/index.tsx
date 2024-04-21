'use-client';

import classes from './modal.module.css';
import React from 'react';

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

const Modal = (props: any) => {
  return (
    <React.Fragment>
      <BackDrop onClose={props.onClose} />
      <ModalOverlay className={props.className}>{props.children}</ModalOverlay>
    </React.Fragment>
  );
};
export default Modal;
