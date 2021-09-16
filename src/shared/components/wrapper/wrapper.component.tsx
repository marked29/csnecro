import { HTMLProps, forwardRef } from 'react';
import cn from 'classnames';

import style from './wrapper.module.sass';

const SIZES = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
};

type WrapperProps = {
  paddingSize?: keyof typeof SIZES;
  className?: string;
} & HTMLProps<HTMLDivElement>;

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  (props, ref) => {
    const { paddingSize = 'sm', children, className, ...rest } = props;

    const compoundClassName = cn(SIZES[paddingSize], className);
    return (
      <div ref={ref} className={compoundClassName} {...rest}>
        {children}
      </div>
    );
  }
);

export default Wrapper;
