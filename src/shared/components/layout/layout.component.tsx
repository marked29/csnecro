import { FC } from 'react';

import style from './layout.module.sass';
import Footer from '../../../features/footer/footer';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.chat}>Chat</div>
      <div className={style.wrapper}>
        <div className={style.header}>Header</div>
        <div className={style.main}>Main</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
