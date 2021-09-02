import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <Wrapper biggerPadding className={style.header}>
      <div className={style.content}>
        <div>Game # 3445</div>
        <div>Close info</div>
        <div>
          Hash: b0e5736dcf58e33c7c414f20183e3fc1 | Percent: 9.15% | Secret:
          bdlusi
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;
