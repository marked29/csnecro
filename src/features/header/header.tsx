import { FC } from 'react';
import { Routes } from '../../app/shared/constants/Routes';

import { NavLink } from '../../shared/components/nav-link';
import Button from '../../shared/components/button/button.component';
import Link from '../../shared/components/link/link';
import Wrapper from '../../shared/components/wrapper/wrapper.component';
import English from '../../shared/svg/language/english';
import Sound from '../../shared/svg/sound';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <header className={style.root}>
      <Wrapper className={style.wrapper}>
        <div>
          <NavLink to={Routes.JACKPOT}>Jackpot</NavLink>
          <NavLink to={Routes.COINFLIP}>Coinflip</NavLink>
        </div>
        <div className={style.tools}>
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
          <English className={style.flag} />
          <select className="language" name="language">
            <option value="English">ENG</option>
            <option value="Russian">RUS</option>
          </select>
          <Button color="transparent">
            <Sound className={style.icon} />
            Sound on
          </Button>
          <Button>Login</Button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
