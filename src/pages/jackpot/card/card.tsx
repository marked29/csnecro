import { FC } from 'react';

import style from './card.module.sass';
import Gamer from './gamer/gamer';
import Header from './header/header';
import Skins from './skins/skins';

const Card: FC = () => {
  return (
    <div className={style.card}>
      <Header />
      <Gamer />
      <Skins />
    </div>
  );
};
export default Card;
