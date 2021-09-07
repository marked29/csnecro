import { FC } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';
import { Chat } from '../../../features/chat/chat';
import Jackpot from '../../../pages/jackpot/jackpot';
import Faq from '../../../pages/faq/faq';

import { Routes } from '../../../app/shared/constants/Routes';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <Route exact path={['/', Routes.JACKPOT]} component={Jackpot} />
        <Route path={Routes.FAQ} component={Faq} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
