import { FC } from 'react';

import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';

import { Chat } from '../../../features/chat/chat';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <div className={style.main}>
          Main
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
