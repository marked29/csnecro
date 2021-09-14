import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Jackpot from '../../../features/jackpot/jackpot';
import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';
import Faq from '../../../features/faq/faq';
import { Chat } from '../../../features/chat/chat';
import { Conflip } from '../../../features/conflip';
import { Routes } from '../../../app/shared/constants';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div id="shit" className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>
          <Route path={Routes.JACKPOT} component={Jackpot} />
          <Route path={Routes.COINFLIP} component={Conflip} />
          <Route path={Routes.FAQ} component={Faq} />
        </main>

        <Redirect to={Routes.JACKPOT} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
