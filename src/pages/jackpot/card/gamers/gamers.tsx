import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';

import style from './gamers.module.sass';

const userList = ['User 1', 'User 2', 'User 3', 'User 4'];
type GamerProps = {
  userName?: string;
  deposit?: string;
  percentage?: string;
  lvl?: number;
};

const Gamers: FC<GamerProps> = () => {
  return (
    <Wrapper biggerPadding className={style.gamer_surface}>
      {userList.map((user) => (
        <Wrapper biggerPadding className={style.gamer} key={user}>
          <div className={style.gamer_name}>
            <h4>{user}</h4>
            <span className={style.gamer_percent_title}>
              Percent: <p className={style.gamer_percent}>9.15%</p>
            </span>
          </div>
          <div className={style.gamer_avatar}>
            <p className={style.gamer_lvl}>25</p>
            <img src="/img/avatarBig.png" alt="avatar" />
            <p className={style.gamer_deposit}>255$</p>
          </div>
          <Button size="sm">Show skins</Button>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
export default Gamers;
