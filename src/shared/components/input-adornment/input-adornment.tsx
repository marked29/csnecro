import cn from 'classnames';
import { FC, HTMLProps } from 'react';

import style from './input-adornment.module.sass';

/**
 * Based on material ui InputAdornment
 * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/InputAdornment/InputAdornment.js
 */

const POSITIONS = {
  start: style.start,
  end: style.end,
};

export type InputAdornmentProps = {
  position: keyof typeof POSITIONS;
} & HTMLProps<HTMLDivElement>;

export const InputAdornment: FC<InputAdornmentProps> = ({
  className,
  position,
  children,
}) => {
  const compoundClassName = cn(style.root, POSITIONS[position], className);

  return <div className={compoundClassName}>{children}</div>;
};
