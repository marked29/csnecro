import { FC } from 'react';

import Wrapper from '../../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../../shared/components/button/button.component';

import style from './gamer.module.sass';

type GamerProps = {
  userName?: string;
  deposit?: string;
  percentage?: string;
  lvl?: number;
};

const Gamer: FC<GamerProps> = ({ userName }) => {
  return (
    <Wrapper paddingSize="md" className={style.gamer}>
      <div className={style.gamer_name}>
        <h4>{userName}</h4>
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
  );
};
export default Gamer;
