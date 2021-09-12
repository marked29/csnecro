import cn from 'classnames';
import { FC } from 'react';

import ReactTooltip from 'react-tooltip';
import { SkinEntity } from '../../../../app/domain/skin';

import style from './skin.module.sass';

export type SkinProps = SkinEntity & { className?: string; skinName?: string };

export const Skin: FC<SkinProps> = ({
  avatar,
  deposit,
  className,
  skinName,
}) => {
  return (
    <div className={cn(style.root, className)}>
      <img
        src={avatar}
        alt="avatar"
        className={style.skinImg}
        data-tip={skinName || 'skin'}
      />
      <br />
      <p className={style.deposit}>{deposit}</p>
      <ReactTooltip />
    </div>
  );
};

export default Skin;
