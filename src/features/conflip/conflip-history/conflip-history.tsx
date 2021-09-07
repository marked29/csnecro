import { FC } from 'react';
import { Button } from '../../../shared/components/button';
import ArrowRight from '../../../shared/svg/arrow-right';

import style from './conflip-history.module.sass';

export const ConflipHistory: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.header}>
        <h4>History</h4>
        <Button size="sm">
          Hide <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
