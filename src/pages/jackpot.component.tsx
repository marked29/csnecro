import { FC } from 'react';

import Wrapper from '../shared/components/wrapper/wrapper.component';

import style from './jackpot.module.sass';

const Jackpot: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper biggerPadding>
        <div className={style.header}>Header</div>
        <div>UserCard</div>
        <div>Line</div>
        <div>Betted Skins</div>
      </Wrapper>
    </div>
  );
};

export default Jackpot;
