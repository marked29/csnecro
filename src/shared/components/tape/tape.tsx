import { FC } from 'react';
import Cash from '../../svg/cash';
import Question from '../../svg/question';

import Wrapper from '../wrapper/wrapper.component';

import style from './tape.module.sass';

const Tape: FC = () => {
  return (
    <Wrapper className={style.root}>
      <div className={style.tapeLeft} />
      <div className={style.tapeCenter}>
        <Cash className={style.icon} />
        <p className={style.promo}>
          The player who made the first bet, revives a bonus of 4% in case of
          winning
        </p>
        <Question className={style.icon} />
      </div>
      <div className={style.tapeRight} />
    </Wrapper>
  );
};

export default Tape;
