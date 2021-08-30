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
          <Wrapper biggerPadding className={style.gameHeader}>
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
          <Wrapper biggerPadding className={style.gamer_surface}>
            <Wrapper biggerPadding className={style.gamer}>
              <div className={style.gamer_name}>
                Username <br /> percentage
              </div>
              <div className={style.gamer_avatar}>
                <img src="/img/avatarBig.png" alt="avatar" />
                <br />
                255$
              </div>
              <Button size="sm">Show skins</Button>
            </Wrapper>
            <Wrapper biggerPadding className={style.gamer}>
              <div className={style.gamer_name}>
                Username <br /> percentage
              </div>
              <div className={style.gamer_avatar}>
                <img src="/img/avatarBig.png" alt="avatar" />
                <br />
                255$
              </div>
              <Button size="sm">Show skins</Button>
            </Wrapper>
            <Wrapper biggerPadding className={style.gamer}>
              <div className={style.gamer_name}>
                Username <br /> percentage
              </div>
              <div className={style.gamer_avatar}>
                <img src="/img/avatarBig.png" alt="avatar" />
                <br />
                255$
              </div>
              <Button size="sm">Show skins</Button>
            </Wrapper>
            <Wrapper biggerPadding className={style.gamer}>
              <div className={style.gamer_name}>
                Username <br /> percentage
              </div>
              <div className={style.gamer_avatar}>
                <img src="/img/avatarBig.png" alt="avatar" />
                <br />
                255$
              </div>
              <Button size="sm">Show skins</Button>
            </Wrapper>
          </Wrapper>
          <div>Betted Skins</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Jackpot;
