import { FC } from 'react';
import { GamerEntity } from '../../../../app/domain/gamer';
import Skin from '../../../../shared/components/skin/skin.component';
import User from '../../../../shared/components/user/user';
import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Arrow from '../../../../shared/svg/arrow';

import style from './games.module.sass';

export type GamersProps = {
  gamers: GamerEntity[];
};

const Games: FC<GamersProps> = ({ gamers }) => {
  return (
    <div className={style.games}>
      {gamers.map(({ userName, skins, deposit, lvl, winner }) => (
        <Wrapper className={style.player}>
          <User
            className={style.userInfo}
            winnerLabel={winner}
            hiddenSpan
            userName={userName}
            lvl={lvl}
          />
          <div className={style.skins}>
            {skins.map(({ avatar }) => (
              <Skin className={style.skin} avatar={avatar} />
            ))}
          </div>
          <span className={style.deposite}>
            <Arrow className={style.arrowStyle} />
            {deposit}
          </span>
        </Wrapper>
      ))}
    </div>
  );
};
export default Games;
