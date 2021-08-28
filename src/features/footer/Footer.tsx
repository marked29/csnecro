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
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
          <Link href="/">
            <Instagram />
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
