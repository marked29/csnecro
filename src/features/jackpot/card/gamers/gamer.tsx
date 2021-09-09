import { FC, useState } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';

import style from './gamer.module.sass';

type GamerProps = {
  userName: string;
  deposit: string;
  percentage: string;
  lvl: number;
};

export const Gamer: FC<GamerProps> = ({
  userName,
  deposit,
  percentage,
  lvl = 23,
}) => {
  const [isSkinsShown, setIsSkinsShown] = useState(false);

  return (
    <Wrapper paddingSize="md" className={style.root} key={userName}>
      <div className={style.name}>
        <h4>{userName}</h4>
        <span className={style.percent_title}>
          Percent: <p className={style.percent}>{percentage}</p>
        </span>
      </div>
      <div className={style.avatar}>
        <p className={style.lvl}>{lvl}</p>
        <img src="/img/avatarBig.png" alt="avatar" />
        <p className={style.deposit}>{deposit}</p>
      </div>

      <Button size="sm" onClick={() => setIsSkinsShown(!isSkinsShown)}>
        {isSkinsShown ? 'Hide skins' : 'Show skins'}
      </Button>
    </Wrapper>
  );
};
export default Gamer;
