import cn from 'classnames';
import { FC } from 'react';

import { SkinEntity } from '../../../../app/domain/skin';

import style from './skin.module.sass';

export type SkinProps = SkinEntity & { className?: string };

export const Skin: FC<SkinProps> = ({ avatar, deposit, className }) => {
  return (
    <div className={cn(style.root, className)}>
      <img src={avatar} alt="avatar" className={style.skinImg} />
      <br />
      <p className={style.deposit}>{deposit}</p>
    </div>
  );
};

export default Skin;
