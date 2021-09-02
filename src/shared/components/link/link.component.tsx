/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import cn from 'classnames';

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import style from './link.module.sass';

type LinkProps = {
  external?: boolean;
} & RouterLinkProps;

const Link: React.FC<LinkProps> = ({
  external = false,
  className,
  children,
  ...props
}) => {
  const compoundClassName = cn(style.root, className);

  const content = children;
  if (external) {
    return (
      <RouterLink
        target="_blank"
        rel="noreferrer noopener"
        className={compoundClassName}
        {...props}
      >
        {content}
      </RouterLink>
    );
  }
  return (
    <RouterLink className={compoundClassName} {...props}>
      {content}
    </RouterLink>
  );
};

export default Link;
