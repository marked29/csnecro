/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from 'react';
import cn from 'classnames';

import { Button, ButtonProps } from '../button';

import style from './icon-button.module.sass';

export type IconButtonProps = {} & Omit<ButtonProps, 'type'>;

export const IconButton: FC<IconButtonProps> = ({ className, ...props }) => {
  const compoundClassName = cn(style.root, className);

  return <Button {...props} className={compoundClassName} />;
};

export default IconButton;
