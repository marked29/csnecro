import { FC } from 'react';

import style from './user.module.sass';

type UserProps = {
  className?: string;
  winnerLabel?: boolean;
};

const User: FC<UserProps> = ({ className, winnerLabel }) => {
  return (
    <div className={className}>
      <img className={style.avatar} src="/img/avatar.png" alt="" />
      <span className={style.levelLabel}>27</span>

      <span className={style.userName}>Username</span>
      <span className={style.message}> Lorem ipsum ipsum</span>
      {winnerLabel && (
        <div className={style.winner}>
          <p>WINNER</p>
        </div>
      )}
    </div>
  );
};
export default User;
