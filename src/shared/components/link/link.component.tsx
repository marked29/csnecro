/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import cn from 'classnames';

import s from './link.module.sass';

type LinkProps = {
  external?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({
  external = false,
  className,
  children,
  ...props
}) => {
  const compoundClassName = cn(s.root, className);

  const content = children;
  if (external) {
    return (
      <a
        target="_blank"
        rel="noreferrer noopener"
        className={compoundClassName}
        {...props}
      >
        {content}
      </a>
    );
  }
  return <a className={compoundClassName}>{content}</a>;
};

export default Link;
