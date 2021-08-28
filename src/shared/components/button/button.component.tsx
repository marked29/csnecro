/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC, HTMLProps } from 'react';
import cn from 'classnames';

import style from './button.module.sass';

const COLORS = {
  primary: style.primary,
  secondary: style.secondary,
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
  className?: string;
  color?: keyof typeof COLORS;
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  color = 'primary',
  ...props
}) => {
  const compoundClassName = cn(style.root, COLORS[color], className);

  return (
    <button
      // @ts-ignore
      type={type}
      {...props}
      className={compoundClassName}
    >
      {children}
    </button>
  );
};

export default Button;
