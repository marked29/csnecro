import { FC } from 'react';
import cx from 'classnames';

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
  const compoundClassName = cx(
    style.root,
    biggerPadding ? style.big_padding : '',
    className
  );
  return <div className={compoundClassName}>{children}</div>;
};

export default Wrapper;
