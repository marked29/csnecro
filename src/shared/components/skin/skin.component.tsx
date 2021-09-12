import { FC } from 'react';
import cn from 'classnames';
import ReactTooltip from 'react-tooltip';
import { SkinEntity } from '../../../app/domain/skin';
import style from './skin.module.sass';

type SkinProps = {
  avatar?: string;
  className?: string;
  skinName?: string;
} & Partial<Pick<SkinEntity, 'name' | 'avatar'>>;

const Skin: FC<SkinProps> = ({
  className,
  avatar = '/img/avatarBig.png',
  skinName = 'skinName',
}) => {
  return (
    <>
      <img
        className={cn(className, style.skinImg)}
        src={avatar}
        alt="avatar"
        data-tip={skinName}
      />
      <ReactTooltip />
    </>
  );
};

export default Skin;
