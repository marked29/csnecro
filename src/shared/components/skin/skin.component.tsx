import { FC } from 'react';
import cn from 'classnames';

import ReactTooltip from 'react-tooltip';
import style from './skin.module.sass';

type SkinProps = {
  avatar?: string;
  className?: string;
  tooltip?: string;
};

const Skin: FC<SkinProps> = ({
  className,
  avatar = '/img/avatarBig.png',
  tooltip,
}) => {
  return (
    <>
      <img
        className={cn(className, style.skinImg)}
        src={avatar}
        alt="avatar"
        data-tip={tooltip || 'skin name'}
      />
      <ReactTooltip />
    </>
  );
};

export default Skin;
