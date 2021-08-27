import { FC } from 'react';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.chat}>Chat</div>
      <div className={style.wrapper}>
        <div className={style.header}>Header</div>
        <div className={style.main}>Main</div>
        <div className={style.footer}>Footer</div>
      </div>
    </div>
  );
};

export default Layout;
