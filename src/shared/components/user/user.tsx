import { FC } from 'react';

import cn from 'classnames';

import ReactTooltip from 'react-tooltip';
import style from './user.module.sass';
import { GamerEntity } from '../../../app/domain/gamer';

type UserProps = {
  className?: string;
  winnerLabel?: boolean;
  hiddenSpan?: boolean;
} & Partial<Pick<GamerEntity, 'userName' | 'lvl'>>;

const User: FC<UserProps> = ({
  className,
  winnerLabel,
  hiddenSpan,
  userName = 'Username',
  lvl = 27,
}) => {
  const compoundClassName = cn(style.root, className);

  return (
    <div className={compoundClassName}>
      <div className={style.userInfo}>
        <img
          className={style.avatar}
          src="/img/avatar.png"
          alt="avatar"
          data-tip={userName}
        />
        <span className={style.levelLabel}>{lvl}</span>
        {!hiddenSpan && (
          <>
            <span className={style.userName}>{userName}</span>
            <span className={style.message}> Lorem ipsum ipsum</span>
          </>
        )}
      </div>
      {winnerLabel && <div className={style.winner}>WINNER</div>}
      <ReactTooltip />
    </div>
  );
};
export default User;
