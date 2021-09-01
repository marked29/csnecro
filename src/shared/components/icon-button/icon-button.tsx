/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from 'react';
import cn from 'classnames';

import { Button, ButtonProps } from '../button';

import style from './icon-button.module.sass';

const COLORS = {
  primary: style.primary,
  transparent: style.transparent,
  secondary: style.secondary,
};

const SIZES = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
};

export type IconButtonProps = {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
} & Omit<ButtonProps, 'type' | 'size'>;

export const IconButton: FC<IconButtonProps> = ({
  className,
  size = 'md',
  color = 'secondary',
  ...props
}) => {
  const compoundClassName = cn(
    style.root,
    SIZES[size],
    COLORS[color],
    className
  );

  return <Button {...props} className={compoundClassName} />;
};

export default IconButton;
