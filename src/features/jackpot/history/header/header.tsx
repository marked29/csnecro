import { FC } from 'react';
import { Button } from '../../../../shared/components/button';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Arrow from '../../../../shared/svg/arrow';
import ArrowDown from '../../../../shared/svg/arrow-down';

import style from './header.module.sass';

export type HeaderProps = {
  onToggleCard: VoidFunction;
  isExpanded: boolean;
};

export const Header: FC<HeaderProps> = ({ onToggleCard, isExpanded }) => {
  return (
    <Wrapper paddingSize="md" className={style.header}>
      <div className={style.content}>
        <div className={style.gameNumber}>Game # 3445</div>
        <Button
          color="transparent"
          onClick={onToggleCard}
          className={style.toggleInfoBtn}
        >
          {isExpanded && (
            <>
              Close info <Arrow className={style.arrowUp} />
            </>
          )}
          {!isExpanded && (
            <>
              Show info <ArrowDown className={style.arrowDown} />
            </>
          )}
        </Button>
        <div className={style.hash}>
          <p>
            Hash:
            <span className={style.counter}>
              b0e5736dcf58e33c7c414f20183e3fc1
            </span>
            | Percent: <span className={style.counter}> 9.15%</span> | Secret:
            <span className={style.counter}>bdlusi</span>
          </p>
        </div>
        <Button size="sm"> FAIRNESS </Button>
      </div>
    </Wrapper>
  );
};

export default Header;
