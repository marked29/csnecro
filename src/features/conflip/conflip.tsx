import { FC } from 'react';
import { ConflipHistory } from './conflip-history';

import style from './conflip.module.sass';

export const Conflip: FC = () => {
  return (
    <div className={style.root}>
      <div>main</div>
      <ConflipHistory />
    </div>
  );
};
