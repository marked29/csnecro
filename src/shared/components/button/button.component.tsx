/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import cn from 'classnames';

import s from './button.module.sass';

const COLORS = {
  primary: s.primary,
  secondary: s.secondary,
};

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
  className?: string;
  color?: keyof typeof COLORS;
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  color = 'primary',
  ...props
}) => {
  const compoundClassName = cn(s.root, COLORS[color], className);

  const content = children;

  return (
    <button
      // @ts-ignore
      type={type}
      {...(props as React.HTMLProps<HTMLButtonElement>)}
      className={compoundClassName}
    >
      {content}
    </button>
  );
};

export default Button;
