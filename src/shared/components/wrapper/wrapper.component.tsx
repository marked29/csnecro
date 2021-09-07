import cn from 'classnames';
import { FC } from 'react';

import style from './wrapper.module.sass';

const SIZES = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
};

type WrapperProps = {
  paddingSize?: keyof typeof SIZES;
  className?: string;
};

export const Wrapper: FC<WrapperProps> = ({
  paddingSize = 'sm',
  className,
  children,
}) => {
  const compoundClassName = cn(SIZES[paddingSize], className);
  return <div className={compoundClassName}>{children}</div>;
};

export default Wrapper;
