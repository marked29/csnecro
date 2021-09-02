import { FC } from 'react';
import Games from './games/games';
import Header from './header/header';

import style from './history.module.sass';

const History: FC = () => {
  return (
    <div className={style.history}>
      <Header />
      <Games />
    </div>
  );
};
export default History;
