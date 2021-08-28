import { FC } from 'react';
import { Routes } from '../../app/shared/constants/Routes';

import Button from '../../shared/components/button/button.component';
import Link from '../../shared/components/link/link.component';
import Wrapper from '../../shared/components/wrapper/wrapper.component';
import English from '../../shared/svg/language/english';
import Sound from '../../shared/svg/sound';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <header className={style.root}>
      <Wrapper className={style.wrapper}>
        <div>
          <Link to={Routes.JACKPOT}>Jackpot</Link>
          <Link to={Routes.COINFLIP}>Coinflip</Link>
        </div>
        <nav className={style.navigation}>
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
        <div className={style.tools}>
          <English />
          <select name="language">
            <option value="English">ENG</option>
            <option value="Russian">RUS</option>
          </select>
          <Sound />
          Sound on
          <Button>Login</Button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
