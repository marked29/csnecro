import { FC } from 'react';
import Skin from '../../../../shared/components/skin/skin.component';
import User from '../../../../shared/components/user/user';
import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Arrow from '../../../../shared/svg/arrow';

import style from './games.module.sass';

const Games: FC = () => {
  return (
    <div className={style.games}>
      <Wrapper className={style.player}>
        <User className={style.userInfo} winnerLabel hiddenSpan />
        <div className={style.skins}>
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
        </div>
        <span className={style.deposite}>
          <Arrow className={style.arrowStyle} />
          255$
        </span>
      </Wrapper>
      <Wrapper className={style.player}>
        <User className={style.userInfo} hiddenSpan />
        <div className={style.skins}>
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
        </div>
        <span className={style.deposite}>
          <Arrow className={style.arrowStyle} />
          255$
        </span>
      </Wrapper>
      <Wrapper className={style.player}>
        <User className={style.userInfo} hiddenSpan />
        <div className={style.skins}>
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
        </div>
        <span className={style.deposite}>
          <Arrow className={style.arrowStyle} />
          255$
        </span>
      </Wrapper>
      <Wrapper className={style.player}>
        <User className={style.userInfo} hiddenSpan />
        <div className={style.skins}>
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
        </div>
        <span className={style.deposite}>
          <Arrow className={style.arrowStyle} />
          255$
        </span>
      </Wrapper>
      <Wrapper className={style.player}>
        <User className={style.userInfo} hiddenSpan />
        <div className={style.skins}>
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
          <Skin className={style.skin} />
        </div>
        <span className={style.deposite}>
          <Arrow className={style.arrowStyle} />
          255$
        </span>
      </Wrapper>
    </div>
  );
};
export default Games;
