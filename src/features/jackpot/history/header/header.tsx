import { FC } from 'react';
import { Button } from '../../../../shared/components/button';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Arrow from '../../../../shared/svg/arrow';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <Wrapper paddingSize="md" className={style.header}>
      <div className={style.content}>
        <div className={style.gameNumber}>Game # 3445</div>
        <div className={style.showMore}>
          Close info <Arrow className={style.arrowStyle} />
        </div>
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
