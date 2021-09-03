import { FC } from 'react';
import Skin from '../../../../shared/components/skin/skin.component';

import style from './games.module.sass';

const Games: FC = () => {
  return (
    <div className={style.games}>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
          <p className={style.winnerLabel}>WINNER</p>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
        </div>
        <div className={style.skins}>
          <Skin />
          <Skin />
          <Skin />
        </div>
        <span className={style.deposite}>255$</span>
      </div>
      <div className={style.player}>
        <div className={style.userInfo}>
          <div className={style.wrap}>
            <img className={style.avatar} src="/img/avatar.png" alt="" />
            <span className={style.levelLabel}>27</span>
          </div>
        </div>
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
