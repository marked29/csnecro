import { FC } from 'react';

import cn from 'classnames';

import style from './skin.module.sass';

type SkinProps = {
  className?: string;
};

const Skin: FC<SkinProps> = ({ className }) => {
  return (
    <img
      className={cn(className, style.skinImg)}
      src="/img/avatarBig.png"
      alt="avatar"
    />
  );
};
export default Skin;
