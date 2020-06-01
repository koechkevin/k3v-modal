import React, { FC } from 'react';
import { Props } from './MenuIcon.interface';
import classes from './MenuIcon.module.scss';

const MenuIcon: FC<Props> = (props) => {
  const { onClick, open, className, ...restProps} = props;
  return (
    <span
      onClick={onClick}
      role="button"
      {...restProps}
      className={[classes.navigator, className, open && classes.active].join(' ')}
    >
      <div />
      <div />
      <div />
    </span>
  );
};

export default MenuIcon;
