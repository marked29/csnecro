import { FC } from 'react';

import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';

import { Chat } from '../../../features/chat/chat';
import Jackpot from '../../../pages/jackpot/jackpot';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <Jackpot />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
