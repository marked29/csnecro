import classNames from 'classnames';
import { FC, useState } from 'react';

import ArrowLeft from '../../../shared/svg/arrow-left';
import ArrowRight from '../../../shared/svg/arrow-right';
import { Wrapper } from '../../../shared/components/wrapper';
import { Button } from '../../../shared/components/button';
import { ConflipHistoryItem } from './conflip-history-item';

import style from './conflip-history.module.sass';

const items = [1, 2, 3, 4, 5];

export const ConflipHistory: FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className={classNames(style.root, { [style.closed]: !isOpened })}>
      <div className={style.header}>
        <h4 className={style.title}>History</h4>
        <Button size="sm" onClick={() => setIsOpened(!isOpened)}>
          {isOpened && (
            <>
              Hide <ArrowRight />
            </>
          )}
          {!isOpened && <ArrowLeft />}
        </Button>
      </div>
      <Wrapper className={style.items}>
        {items.map((id) => (
          <ConflipHistoryItem key={id} hideDetails={!isOpened} />
        ))}
      </Wrapper>
    </div>
  );
};
