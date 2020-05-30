import React, { FC, ReactNode, useState, useEffect } from 'react';
import classes from './App.module.scss';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string | ReactNode;
}
const Modal: FC<Props> = (props) => {
  const { children, title, onOpenChange, open } = props;
  const [bodyRef, setBodyRef] = useState();

  const onClickOutside = (e: { target: any }) => {
    if (e.target.contains(bodyRef)) {
      onOpenChange(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  });

  useEffect(() => {
    if (open) {
      const bodyStyle = document.body.style;
      bodyStyle.overflow = 'hidden';
      return () => {
        bodyStyle.overflow = 'auto';
      };
    }
  }, [open]);

  return (
    <div className={classes.modalBackground} style={{ visibility: open ? 'visible' : 'hidden' }}>
      <div
        aria-labelledby="confirmation-dialog-title"
        aria-modal
        role="dialog"
        ref={setBodyRef}
        style={{ top: open ? '50%' : '-50%' }}
        className={classes.modalBody}
      >
        <div id="confirmation-dialog-title" className={classes.header}>
          <div>{title}</div>
          <button onClick={() => onOpenChange(false)} className={classes.close}>
            &times;
          </button>
        </div>
        <div aria-label="modal-description" className={classes.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
