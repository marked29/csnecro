import { FC } from 'react';

import JackpotHeader from './header/header';
import JackpotGamers from './gamers/gamers';
import JackpotSkins from './skins/skins';

import style from './card.module.sass';

const Card: FC = () => {
  return (
    <div className={style.card}>
      <JackpotHeader />
      <JackpotGamers />
      <JackpotSkins />
    </div>
  );
};
export default Card;
