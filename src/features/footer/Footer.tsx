import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import Link from '../../shared/components/link/link.component';
import Facebook from '../../shared/svg/facebook';
import Instagram from '../../shared/svg/instagram';
import Twitter from '../../shared/svg/twitter';

import style from './footer.module.sass';

const Footer: FC = () => {
  return (
    <footer className={style.root}>
      <Wrapper className={style.wrapper}>
        <p className={style.copyright}>
          Copyright &copy; 2019 - 2020 proplayer.com. All rights reserved.
        </p>
        <div className={style.socials}>
          Our socials:
          <Link external to="/">
            <Facebook />
          </Link>
          <Link external to="/">
            <Twitter />
          </Link>
          <Link external to="/">
            <Instagram />
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
