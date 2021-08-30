import { FC } from 'react';
import Cash from '../../../shared/svg/cash';
import Question from '../../../shared/svg/question';

import style from './tape.module.sass';

const Tape: FC = () => {
  return (
    <div className={style.root}>
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
    </div>
  );
};

export default Tape;
