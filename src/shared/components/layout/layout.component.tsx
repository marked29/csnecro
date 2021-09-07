import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Jackpot from '../../../pages/jackpot/jackpot.component';
import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';
import { Chat } from '../../../features/chat/chat';
import { Conflip } from '../../../features/conflip';
import { Routes } from '../../../app/shared/constants';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <Route path={Routes.JACKPOT}>
          <Jackpot />
        </Route>

        <Route path={Routes.COINFLIP}>
          <Conflip />
        </Route>
        <Redirect to={Routes.COINFLIP} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
