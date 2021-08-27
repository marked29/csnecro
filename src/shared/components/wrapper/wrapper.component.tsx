import { FC } from 'react';
import cn from 'classnames';

import style from './wrapper.module.sass';

type WrapperProps = {
  biggerPadding?: boolean;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({
  biggerPadding = false,
  className,
  children,
}) => {
  const compoundClassName = cn(
    style.root,
    biggerPadding ? style.big_padding : biggerPadding,
    className
  );
  return <div className={compoundClassName}>{children}</div>;
};

export default Wrapper;
