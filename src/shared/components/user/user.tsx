import { FC } from 'react';

import style from './user.module.sass';

type UserProps = {
  chat: boolean;
  historyFlag: boolean;
};

const User: FC<UserProps> = ({ chat, historyFlag }) => {
  return (
    <div
      className={style.userInfo}
      style={historyFlag ? { padding: '10px 20px 10px' } : { padding: 'none' }}
    >
      <img className={style.avatar} src="/img/avatar.png" alt="" />
      <span className={style.levelLabel}>27</span>
      {chat && (
        <>
          <span className={style.userName}>Username</span>
          <span className={style.message}> Lorem ipsum ipsum</span>
        </>
      )}
    </div>
  );
};
export default User;
