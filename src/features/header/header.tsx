import { FC } from 'react';
import { Routes } from '../../app/shared/constants/Routes';

import Link from '../../shared/components/link/link.component';

import Wrapper from '../../shared/components/wrapper/wrapper.component';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <header className={style.root}>
      <Wrapper className={style.wrapper}>
        <div>
          <Link to={Routes.JACKPOT}>Jackpot</Link>
          <Link to={Routes.COINFLIP}>Coinflip</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link external to="/">
                Fairness
              </Link>
            </li>
            <li>
              <Link external to="/">
                Support
              </Link>
            </li>
            <li>
              <Link external to="/">
                Faq
              </Link>
            </li>
            <li>
              <Link external to="/">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
