import { FC } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className={style.game_buttons}>
          <NavLink
            className={style.tab}
            activeClassName={style.active}
            to={Routes.JACKPOT}
          >
            Jackpot
          </NavLink>
          <NavLink
            className={style.tab}
            activeClassName={style.active}
            to={Routes.COINFLIP}
          >
            Coinflip
          </NavLink>
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
          <div className={style.settings}>
            <English className={style.icon} />
            <select name="language">
              <option value="English">ENG</option>
              <option value="Russian">RUS</option>
            </select>
            <Button color="transparent">
              <Sound className={style.icon} />
              Sound on
            </Button>
            <Button>Login</Button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
