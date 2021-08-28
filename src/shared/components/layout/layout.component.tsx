import { FC } from 'react';
import Button from '../button/button.component';

import style from './layout.module.sass';
import Footer from '../../../features/footer/footer';
import { Chat } from '../../../features/chat/chat';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <div className={style.header}>
          Header
          <Button>Hello</Button>
        </div>
        <div className={style.main}>Main</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
