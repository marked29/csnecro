import { FC } from 'react';

import { Route } from 'react-router-dom';
import Header from '../../../features/header/header';
import Footer from '../../../features/footer/Footer';

import { Chat } from '../../../features/chat/chat';
import Jackpot from '../../../pages/jackpot/jackpot';

import style from './layout.module.sass';
import Faq from '../../../pages/faq/faq';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <Chat />
      <div className={style.wrapper}>
        <Header />
        <Route exact path={['/', '/jackpot']} component={Jackpot} />
        <Route path="/faq" component={Faq} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
