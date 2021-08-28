/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC, HTMLProps } from 'react';
import cn from 'classnames';

import style from './button.module.sass';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
  className?: string;
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  ...props
}) => {
  const compoundClassName = cn(style.root, className);

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
