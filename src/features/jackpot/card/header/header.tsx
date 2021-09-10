import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';

import style from './header.module.sass';

type HeaderProps = {
  gameId?: string;
};

const headerTitlesLeft = ['SKIN LIMIT', 'MIN BET', 'MAX BET'];
const headerTitlesRight = ['TIME', 'TOTAL', 'USERS'];

const Header: FC<HeaderProps> = ({ gameId = '# 3445' }) => {
  return (
    <Wrapper paddingSize="md" className={style.gameHeader}>
      <div className={style.content}>
        {headerTitlesLeft.map((title) => (
          <span className={style.surface} key={title}>
            {title} <span>$10 </span>
          </span>
        ))}
      </div>
      <h3 className={style.content}>GAME {gameId}</h3>
      <div className={style.content}>
        {headerTitlesRight.map((title) => (
          <span className={style.surface} key={title}>
            {title} <span>$10</span>
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default Header;
