import { FC } from 'react';
import Skin from '../../../../shared/components/skin/skin.component';
import User from '../../../../shared/components/user/user';
import Arrow from '../../../../shared/svg/arrow';

import style from './games.module.sass';

const Games: FC = () => {
  return (
    <div className={style.games}>
      <div className={style.player}>
        <div className={style.winner}>
          <User chat={false} historyFlag={false} />
          <p className={style.winnerLabel}>WINNER</p>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>
          <Arrow arrowStyle={style.arrowStyle} />
          255$
        </span>
      </div>
      <div className={style.player}>
        <User chat={false} historyFlag />
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <User chat={false} historyFlag />
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <User chat={false} historyFlag />
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <User chat={false} historyFlag />
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <User chat={false} historyFlag />
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
    </div>
  );
};
export default Games;
