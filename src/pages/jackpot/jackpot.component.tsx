import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import Tape from './tape/tape';

import style from './jackpot.module.sass';
import Card from './card/card';

const Jackpot: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper biggerPadding>
        <Tape />
        <Card />
      </Wrapper>
    </div>
  );
};

export default Jackpot;
