import cn from 'classnames';
import { FC, HTMLProps, ReactNode } from 'react';

import style from './input.module.sass';

/**
 * Based on material ui InputBase
 * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/InputBase/InputBase.js
 */

export type InputProps = {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  inputClassName?: string;
} & HTMLProps<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  endAdornment,
  startAdornment,
  className,
  inputClassName,
  ...inputProps
}) => {
  const compoundRootClassName = cn(
    style.root,
    {
      [style.endAdornment]: endAdornment,
      [style.startAdornment]: startAdornment,
    },

    className
  );

  const compoundInputClassName = cn(style.input, inputClassName);

  return (
    <div className={compoundRootClassName}>
      {startAdornment}
      <input className={compoundInputClassName} {...inputProps} />
      {endAdornment}
    </div>
  );
};
