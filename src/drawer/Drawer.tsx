import React, { FC, useEffect } from 'react';
import Props from './drawer.interface';
import classes from './drawer.module.scss';

const Drawer: FC<Props> = (props) => {
  const { onOpenChange, open, children } = props;

  useEffect(() => {}, [open]);

  return (
    <div style={{ width: open ? 200 : 0 }} className={classes.drawer}>
      <div className={classes.head}>
        <button onClick={() => onOpenChange(false)} className={classes.close}>
          &times;
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
