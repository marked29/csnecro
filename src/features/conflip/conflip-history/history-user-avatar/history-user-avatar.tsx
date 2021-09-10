import cn from 'classnames';
import { FC } from 'react';

import style from './history-user-avatar.module.sass';

export type HistoryUserAvatarProps = {
  avatar: string;
  winner: boolean;
  className?: string;
};

export const HistoryUserAvatar: FC<HistoryUserAvatarProps> = ({
  avatar,
  winner,
  className,
}) => {
  return (
    <div className={cn(style.avatar, className)}>
      <img src={avatar} alt="avatar" />
      {winner && <span className={style.winnerLabel}>Winner</span>}
    </div>
  );
};
