import { FC } from 'react';
import Button from '../button/button.component';

import style from './layout.module.sass';

const Layout: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.chat}>Chat</div>
      <div className={style.wrapper}>
        <div className={style.header}>
          Header
          <Button>Hello</Button>
        </div>
        <div className={style.main}>Main</div>
        <div className={style.footer}>Footer</div>
      </div>
    </div>
  );
};

export default Layout;
