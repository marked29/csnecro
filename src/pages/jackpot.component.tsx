import { FC } from 'react';

import Wrapper from '../shared/components/wrapper/wrapper.component';
import Tape from './tape/tape';

import style from './jackpot.module.sass';
import { Button } from '../shared/components/button';

const Jackpot: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper biggerPadding>
        <Tape />
        <div className={style.card}>
          <Wrapper className={style.gameHeader}>
            <div className={style.content}>
              <span className={style.surface}>Skin limit: 10</span>
              <span className={style.surface}>Skin limit: 10</span>
              <span className={style.surface}>Skin limit: 10</span>
            </div>
            <h3 className={style.content}>GAME # 3445</h3>
            <div className={style.content}>
              <span className={style.surface}>Skin limit: 10</span>
              <span className={style.surface}>Skin limit: 10</span>
              <span className={style.surface}>Skin limit: 10</span>
            </div>
          </Wrapper>
          <Wrapper>
            <div>Username percentage</div>
            <img src="/img/avatarBig.png" alt="avatar" />
            <Button size="sm">Show skins</Button>
          </Wrapper>
          <div>Line</div>
          <div>Betted Skins</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Jackpot;
