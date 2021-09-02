import { FC } from 'react';
import Wrapper from '../../shared/components/wrapper/wrapper.component';

import style from './history.module.sass';

const Card: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper biggerPadding>
        <div className={style.history}>
          <Wrapper biggerPadding>
            <div className={style.history_header}>
              <span>Game # 3445</span>
              <span>Close info</span>
              <span>
                Hash: b0e5736dcf58e33c7c414f20183e3fc1 | Percent: 9.15% |
                Secret: bdlusi
              </span>
            </div>
            <div className={style.history_players}>
              <div className={style.player}>
                <img className={style.avatar} src="/img/avatar.png" alt="" />
                <span className={style.levelLabel}>27</span>
              </div>
              <div className={style.history_skins} />
              <div className={style.history_deposite} />
            </div>
          </Wrapper>
        </div>
      </Wrapper>
    </div>
  );
};
export default Card;
