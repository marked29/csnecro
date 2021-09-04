import { FC } from 'react';
import { IconButton } from '../../../shared/components/icon-button';

import User from '../../../shared/components/user/user';
import Cancel from '../../../shared/svg/cancel';
import SoundOff from '../../../shared/svg/sound-off';

import style from './chat-item.module.sass';

export const ChatItem: FC = () => {
  return (
    <div className={style.root}>
      <User chat historyFlag={false} />

      <div className={style.chatListActions}>
        <IconButton size="sm" color="transparent">
          <Cancel />
        </IconButton>

        <IconButton size="sm" color="transparent">
          <SoundOff />
        </IconButton>
      </div>
    </div>
  );
};
