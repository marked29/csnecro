/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import cn from 'classnames';

import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

import commonStyle from '../../styles/link.module.sass';
import style from './nav-link.module.sass';

export const NavLink: React.FC<RouterNavLinkProps> = ({
  className,
  children,
  ...props
}) => {
  const compoundClassName = cn(commonStyle.root, style.root, className);

  return (
    <RouterNavLink
      className={compoundClassName}
      activeClassName={style.active}
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
