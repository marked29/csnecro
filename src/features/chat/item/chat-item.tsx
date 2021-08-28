import { FC } from 'react';

import Cancel from '../../../shared/svg/cancel';
import SoundOff from '../../../shared/svg/sound-off';

import style from './chat-item.module.sass';

export const ChatItem: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.userInfo}>
        <img className={style.avatar} src="/img/avatar.png" alt="" />
        <span className={style.levelLabel}>27</span>
        <span className={style.userName}>Username</span>
        <span className={style.message}> Lorem ipsum </span>
      </div>

      <div className={style.chatListActions}>
        <Cancel />
        <SoundOff />
      </div>
    </div>
  );
};
