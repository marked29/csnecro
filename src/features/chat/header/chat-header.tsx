import { FC } from 'react';

import { IconButton } from '../../../shared/components/icon-button';
import ArrowLeft from '../../../shared/svg/arrow-left';
import Settings from '../../../shared/svg/settings';

import style from './chat-header.module.sass';

export const ChatHeader: FC = () => {
  return (
    <div className={style.root}>
      <IconButton>
        <ArrowLeft />
      </IconButton>
      <span>
        <strong>50</strong> online
      </span>
      <IconButton color="transparent">
        <Settings />
      </IconButton>
    </div>
  );
};
