import React, { FC } from 'react';
import Props from './Header.interface';
import classes from './header.module.scss';

const Header: FC<Props> = (props) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
