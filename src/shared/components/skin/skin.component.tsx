import { FC } from 'react';
import ReactTooltip from 'react-tooltip';

import cn from 'classnames';

import style from './skin.module.sass';

type SkinProps = {
  className?: string;
  tooltip?: string;
};

const Skin: FC<SkinProps> = ({ className, tooltip }) => {
  return (
    <>
      <img
        className={cn(className, style.skinImg)}
        src="/img/avatarBig.png"
        alt="avatar"
        data-tip={tooltip || 'skin name'}
      />
      <ReactTooltip />
    </>
  );
};
export default Skin;
