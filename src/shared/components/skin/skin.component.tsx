import { FC } from 'react';

import cn from 'classnames';

import style from './skin.module.sass';

type SkinProps = {
  avatar?: string;
  className?: string;
};

const Skin: FC<SkinProps> = ({ className, avatar = '/img/avatarBig.png' }) => {
  return (
    <img className={cn(className, style.skinImg)} src={avatar} alt="avatar" />
  );
};

export default Skin;
