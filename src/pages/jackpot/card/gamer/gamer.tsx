import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';
import style from './gamer.module.sass';

const userList = ['User 1', 'User 2', 'User 3', 'User 4'];
type GamerProps = {
  userName?: string;
  deposit?: string;
  percentage?: string;
  lvl?: number;
};

const Gamer: FC<GamerProps> = () => {
  return (
    <Wrapper biggerPadding className={style.gamer_surface}>
      {userList.map((user) => (
        <Wrapper biggerPadding className={style.gamer}>
          <div className={style.gamer_name}>
            {user} <br /> percentage
          </div>
          <div className={style.gamer_avatar}>
            <img src="/img/avatarBig.png" alt="avatar" />
            <br />
            255$
          </div>
          <Button size="sm">Show skins</Button>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
export default Gamer;
