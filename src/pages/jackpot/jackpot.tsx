import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import Tape from './tape/tape';
import Card from './card/card';

import style from './jackpot.module.sass';
import History from './history/history';

const Jackpot: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper biggerPadding>
        <Tape />
        <Card />
        <History />
      </Wrapper>
    </div>
  );
};

export default Jackpot;
