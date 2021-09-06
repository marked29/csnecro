import { FC } from 'react';

import cn from 'classnames';

import style from './user.module.sass';

type UserProps = {
  className?: string;
  winnerLabel?: boolean;
  hiddenSpan?: boolean;
};

const User: FC<UserProps> = ({ className, winnerLabel, hiddenSpan }) => {
  const compoundClassName = cn(style.root, className);

  return (
    <div className={compoundClassName}>
      <div className={style.userInfo}>
        <img className={style.avatar} src="/img/avatar.png" alt="avatar" />
        <span className={style.levelLabel}>27</span>
        {!hiddenSpan && (
          <>
            <span className={style.userName}>Username</span>
            <span className={style.message}> Lorem ipsum ipsum</span>
          </>
        )}
      </div>
      {winnerLabel && <div className={style.winner}>WINNER</div>}
    </div>
  );
};
export default User;
