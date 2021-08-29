import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import Logo from '../../shared/svg/logo';
import { ChatHeader } from './header';
import { ChatItem } from './item';
import { Messanger } from './messanger';

import style from './chat.module.sass';

export const Chat: FC = () => {
  return (
    <aside className={style.root}>
      <Wrapper className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.chat}>
          <ChatHeader />
          <div className={style.chatList}>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </div>
        </div>
        <Messanger />
      </Wrapper>
    </aside>
  );
};
