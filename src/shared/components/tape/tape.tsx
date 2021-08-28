import { FC } from 'react';
import Cash from '../../svg/cash';
import Question from '../../svg/question';

import Wrapper from '../wrapper/wrapper.component';

import style from './tape.module.sass';

const Tape: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper>
        <div className={style.tapeLeft} />
        <div className={style.tapeCenter}>
          <div className={style.icon}>
            <Cash />
          </div>
          <p className={style.promo}>
            The player who made the first bet, revives a bonus of 4% in case of
            winning
          </p>
          <div className={style.icon}>
            <Question />
          </div>
        </div>
        <div className={style.tapeRight} />
      </Wrapper>
    </div>
  );
};

export default Tape;
